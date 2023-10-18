import {
    bool,
    Canister,
    Err,
    ic,
    nat64,
    nat8,
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

import { Nft, Slot, User, Merchant, Creator } from "./model";

const UpdateLoyaltyDataError = Variant({
    SlotDoesNotExist: nat64,
    NftDoesNotExist: nat64,
    UserDoesNotExist: Principal,
    MerchantDoesNotExist: text,
    CreatorDoesNotExist: Principal,
    // SlotClaimed: Principal,
    // CodeValidationError: Principal,
});

let nftCounter: nat64 = 0n;
let slotCounter: nat64 = 0n;
let nfts = StableBTreeMap(nat64, Nft, 0);
let slots = StableBTreeMap(nat64, Slot, 1);
let users = StableBTreeMap(Principal, User, 2);
let merchants = StableBTreeMap(text, Merchant, 3);
let creators = StableBTreeMap(Principal, Creator, 4);

export default Canister({
    // NFTS
    // Slots
    // Users
    // Merchants
    // Creators
});

function generateId(): Principal {
    const randomBytes = new Array(29).fill(0).map((_) => Math.floor(Math.random() * 256));

    return Principal.fromUint8Array(Uint8Array.from(randomBytes));
}
