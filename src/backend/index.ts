import {
    bool,
    Canister,
    Err,
    ic,
    nat64,
    nat8,
    None,
    Ok,
    Opt,
    Principal,
    query,
    Result,
    StableBTreeMap,
    text,
    update,
    Variant,
    Vec,
    Void,
} from "azle";
import { v4 as uuidv4 } from "uuid";

import { Nft, User, Merchant, Creator, Loyalty } from "./model";

const Errors = Variant({
    SlotDoesNotExist: nat64,
    NftDoesNotExist: nat64,
    UserDoesNotExist: Principal,
    MerchantDoesNotExist: text,
    CreatorDoesNotExist: Principal,
    LoyaltyDoesNotExist: nat64,
    // SlotClaimed: Principal,
    // CodeValidationError: Principal,
});

let nftCounter: nat64 = 0n;
let loyaltyCounter: nat64 = 0n;
let nfts = StableBTreeMap(nat64, Nft, 0);
let users = StableBTreeMap(Principal, User, 1);
let merchants = StableBTreeMap(text, Merchant, 2);
let creators = StableBTreeMap(Principal, Creator, 3);
let loyalties = StableBTreeMap(nat64, Loyalty, 4);

export default Canister({
    /* ---------------------------------- Users --------------------------------- */
    createUser: update([], User, () => {
        const user: typeof User = {
            id: ic.caller(),
            createdAt: ic.time(),
        };

        users.insert(user.id, user);
        return user;
    }),
    readAllUsers: query([], Vec(User), () => {
        return users.values();
    }),
    readUser: query([], Opt(User), () => {
        return users.get(ic.caller());
    }),
    deleteUser: update([Principal], Result(User, Errors), (id) => {
        const userOpts = users.get(id);

        if ("None" in userOpts) {
            return Err({
                UserDoesNotExist: id,
            });
        }

        const user = userOpts.Some;

        users.remove(user.id);
        return Ok(user);
    }),

    /* -------------------------------- Merchants ------------------------------- */
    createMerchant: update([text, text, text], Merchant, (name, lon, lat) => {
        const uuid = uuidv4();
        const merchant: typeof Merchant = {
            uuid,
            name,
            lon,
            lat,
            collaborations: [],
            createdAt: ic.time(),
        };

        merchants.insert(merchant.uuid, merchant);
        return merchant;
    }),
    readAllMerchants: query([], Vec(Merchant), () => {
        return merchants.values();
    }),
    readMerchant: query([text], Opt(Merchant), (uuid) => {
        return merchants.get(uuid);
    }),
    deleteMerchant: update([text], Result(Merchant, Errors), (uuid) => {
        const merchantOpts = merchants.get(uuid);

        if ("None" in merchantOpts) {
            return Err({
                MerchantDoesNotExist: uuid,
            });
        }

        const merchant = merchantOpts.Some;

        merchants.remove(merchant.uuid);
        return Ok(merchant);
    }),

    /* -------------------------------- Creators -------------------------------- */
    createCreator: update(
        [text, text, text, text, text, text, text],
        Creator,
        (name, city, province, behance, flickr, instagram, reddit) => {
            const id = generateId();
            const creator: typeof Creator = {
                id,
                name,
                city,
                province,
                behance,
                flickr,
                instagram,
                reddit,
                createdAt: ic.time(),
            };

            creators.insert(creator.id, creator);
            return creator;
        }
    ),
    readAllCreators: query([], Vec(Creator), () => {
        return creators.values();
    }),
    readCreator: query([Principal], Opt(Creator), (id) => {
        return creators.get(id);
    }),
    deleteCreator: update([Principal], Result(Creator, Errors), (id) => {
        const creatorOpts = creators.get(id);

        if ("None" in creatorOpts) {
            return Err({
                CreatorDoesNotExist: id,
            });
        }

        const creator = creatorOpts.Some;

        creators.remove(creator.id);
        return Ok(creator);
    }),

    /* ---------------------------------- NFTS ---------------------------------- */
    createNft: update(
        [Principal, text, text],
        Result(Nft, Errors),
        (creatorId, imageUrl, metadataUrl) => {
            const creatorOpt = creators.get(creatorId);

            if ("None" in creatorOpt) {
                return Err({
                    CreatorDoesNotExist: creatorId,
                });
            }

            const creator = creatorOpt.Some;

            const nft: typeof Nft = {
                id: nftCounter,
                imageUrl,
                metadataUrl,
                userId: creator.id,
                creatorId,
                createdAt: ic.time(),
            };

            nfts.insert(nft.id, nft);
            nftCounter++; // Increment Nft Token ID

            return Ok(nft);
        }
    ),
    readAllNfts: query([], Vec(Nft), () => {
        return nfts.values();
    }),
    readNft: query([nat64], Opt(Nft), (id) => {
        return nfts.get(id);
    }),
    deleteNft: update([nat64], Result(Nft, Errors), (id) => {
        // Find nft
        const nftOpts = nfts.get(id);

        if ("None" in nftOpts) {
            return Err({
                NftDoesNotExist: id,
            });
        }

        const nft = nftOpts.Some;

        nfts.remove(nft.id);
        return Ok(nft);
    }),
    sendNft: update([nat64], Result(Nft, Errors), (nftId) => {
        // Find NFT
        const nftOpts = nfts.get(nftId);

        if ("None" in nftOpts) {
            return Err({
                NftDoesNotExist: nftId,
            });
        }

        const nft = nftOpts.Some;
        const userId = ic.caller();

        const updatedNft: typeof Nft = {
            ...nft,
            userId,
        };

        nfts.insert(updatedNft.id, updatedNft);

        return Ok(nft);
    }),
    queryUserNft: query([], Vec(Nft), () => {
        return nfts.values().filter((nft) => {
            nft.userId.toText() === ic.caller().toText();
        });
    }),
    queryCreatorNft: query([Principal], Vec(Nft), (creatorId) => {
        return nfts.values().filter((nft) => {
            nft.creatorId.toText() === creatorId.toText();
        });
    }),
    queryLoyaltyNft: query([nat64], Vec(Nft), (loyaltyId) => {
        return nfts.values().filter((nft) => {
            nft.loyaltyId === loyaltyId;
        });
    }),
    /* --------------------------------- Loyalty -------------------------------- */
    createLoyalty: update([text], Loyalty, (merchantId) => {
        const loyalty: typeof Loyalty = {
            id: loyaltyCounter,
            transactions: 0n,
            claimed: false,
            userId: ic.caller(),
            merchantId,
            createdAt: ic.time(),
        };

        loyalties.insert(loyalty.id, loyalty);
        loyaltyCounter++;

        return loyalty;
    }),
    readAllLoyalties: query([], Vec(Loyalty), () => {
        return loyalties.values();
    }),
    readLoyalty: query([nat64], Opt(Loyalty), (loyaltyId) => {
        return loyalties.get(loyaltyId);
    }),
    deleteLoyalty: update([nat64], Result(Loyalty, Errors), (loyaltyId) => {
        // Find the loyalty record
        const loyaltyOpt = loyalties.get(loyaltyId);

        if ("None" in loyaltyOpt) {
            return Err({
                LoyaltyDoesNotExist: loyaltyId,
            });
        }

        const loyalty = loyaltyOpt.Some;

        // Remove loyalty
        loyalties.remove(loyaltyId);

        return Ok(loyalty);
    }),
    clearLoyalty: update([nat64, Principal, text], Result(Loyalty, Errors), (loyaltyId) => {
        // Change claimed status to true
        const loyaltyOpt = loyalties.get(loyaltyId);

        if ("None" in loyaltyOpt) {
            return Err({
                LoyaltyDoesNotExist: loyaltyId,
            });
        }

        const loyalty = loyaltyOpt.Some;
        loyalty.claimed = true;

        // Create new and assign new loyalty to user and merchant
        const newLoyalty: typeof Loyalty = {
            id: loyaltyCounter,
            transactions: 0n,
            claimed: false,
            userId: loyalty.userId,
            merchantId: loyalty.merchantId,
            createdAt: ic.time(),
        };

        loyalties.insert(newLoyalty.id, newLoyalty);
        loyaltyCounter++;

        return Ok(loyalty);
    }),
    addTransaction: update([nat64], Result(Loyalty, Errors), (loyaltyId) => {
        // Change claimed status to true
        const loyaltyOpt = loyalties.get(loyaltyId);

        if ("None" in loyaltyOpt) {
            return Err({
                LoyaltyDoesNotExist: loyaltyId,
            });
        }

        const loyalty = loyaltyOpt.Some;

        const updatedLoyalty: typeof Loyalty = {
            ...loyalty,
            transactions: loyalty.transactions++,
        };

        loyalties.insert(updatedLoyalty.id, updatedLoyalty);

        return Ok(loyalty);
    }),
    queryLoyalty: update([Principal, text], Vec(Loyalty), (userId, merchantId) => {
        return loyalties.values().filter((loyalty) => {
            loyalty.userId.toText() === userId.toText() && loyalty.merchantId === merchantId;
        });
    }),
});

function generateId(): Principal {
    const randomBytes = new Array(29).fill(0).map((_) => Math.floor(Math.random() * 256));

    return Principal.fromUint8Array(Uint8Array.from(randomBytes));
}
