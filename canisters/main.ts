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
} from "azle"
import { v4 as uuidv4 } from "uuid"

import { Nft, Slot, User, Merchant, Creator } from "./model"

const Errors = Variant({
  SlotDoesNotExist: nat64,
  NftDoesNotExist: nat64,
  UserDoesNotExist: Principal,
  MerchantDoesNotExist: text,
  CreatorDoesNotExist: Principal,
  // SlotClaimed: Principal,
  // CodeValidationError: Principal,
})

let nftCounter: nat64 = 0n
let slotCounter: nat64 = 0n
let nfts = StableBTreeMap(nat64, Nft, 0)
let slots = StableBTreeMap(nat64, Slot, 1)
let users = StableBTreeMap(Principal, User, 2)
let merchants = StableBTreeMap(text, Merchant, 3)
let creators = StableBTreeMap(Principal, Creator, 4)

export default Canister({
  /* ---------------------------------- NFTS ---------------------------------- */
  createNft: update(
    [Principal, text, text],
    Nft,
    (creatorId, imageUrl, imageMetadata) => {
      const nft: typeof Nft = {
        id: nftCounter,
        creatorId,
        imageUrl,
        imageMetadata,
        createdAt: ic.time(),
      }

      nfts.insert(nft.id, nft)
      nftCounter++ // Increment Nft Token ID
      return nft
    },
  ),
  readAllNfts: query([], Vec(Nft), () => {
    return nfts.values()
  }),
  readNft: query([nat64], Opt(Nft), (id) => {
    return nfts.get(id)
  }),
  deleteNft: update([nat64], Result(Nft, Errors), (id) => {
    const nftOpts = nfts.get(id)

    if ("None" in nftOpts) {
      return Err({
        NftDoesNotExist: id,
      })
    }

    const nft = nftOpts.Some

    nfts.remove(nft.id)
    return Ok(nft)
  }),

  /* ---------------------------------- Slots --------------------------------- */
  createSlot: update(
    [nat64, Principal, text, nat64],
    Slot,
    (id, userId, merchantId, nftId) => {
      const slot: typeof Slot = {
        id,
        userId,
        merchantId,
        nftId,
        claimed: false,
        createdAt: ic.time(),
      }

      slots.insert(slot.id, slot)
      return slot
    },
  ),
  readAllSlots: query([], Vec(Slot), () => {
    return slots.values()
  }),
  readSlot: query([nat64], Opt(Slot), (id) => {
    return slots.get(id)
  }),
  deleteSlot: update([nat64], Result(Slot, Errors), (id) => {
    const slotOpts = slots.get(id)

    if ("None" in slotOpts) {
      return Err({
        SlotDoesNotExist: id,
      })
    }

    const slot = slotOpts.Some

    slots.remove(slot.id)
    return Ok(slot)
  }),

  /* ---------------------------------- Users --------------------------------- */
  createUser: update([Principal], User, (id) => {
    const user: typeof User = {
      id,
      slotIds: [],
      nftIds: [],
      createdAt: ic.time(),
    }

    users.insert(user.id, user)
    return user
  }),
  readAllUsers: query([], Vec(User), () => {
    return users.values()
  }),
  readUser: query([Principal], Opt(User), (id) => {
    return users.get(id)
  }),
  deleteUser: update([Principal], Result(User, Errors), (id) => {
    const userOpts = users.get(id)

    if ("None" in userOpts) {
      return Err({
        UserDoesNotExist: id,
      })
    }

    const user = userOpts.Some

    user.slotIds.forEach((slotId) => {
      slots.remove(slotId)
    })
    user.nftIds.forEach((nftId) => {
      nfts.remove(nftId)
    })

    users.remove(user.id)
    return Ok(user)
  }),

  /* -------------------------------- Merchants ------------------------------- */
  createMerchant: update([], Merchant, () => {
    const uuid = uuidv4()
    const merchant: typeof Merchant = {
      uuid,
      slotIds: [],
      collabCreators: [],
      createdAt: ic.time(),
    }

    merchants.insert(merchant.uuid, merchant)
    return merchant
  }),
  readAllMerchants: query([], Vec(Merchant), () => {
    return merchants.values()
  }),
  readMerchant: query([text], Opt(Merchant), (uuid) => {
    return merchants.get(uuid)
  }),
  deleteMerchant: update([text], Result(Merchant, Errors), (uuid) => {
    const merchantOpts = merchants.get(uuid)

    if ("None" in merchantOpts) {
      return Err({
        MerchantDoesNotExist: uuid,
      })
    }

    const merchant = merchantOpts.Some

    merchant.slotIds.forEach((slotId) => {
      slots.remove(slotId)
    })

    merchants.remove(merchant.uuid)
    return Ok(merchant)
  }),

  /* -------------------------------- Creators -------------------------------- */
  createCreator: update(
    [text, text, text, text],
    Creator,
    (behance, flickr, instagram, reddit) => {
      const id = generateId()
      const creator: typeof Creator = {
        id,
        behance,
        flickr,
        instagram,
        reddit,
        nftIds: [],
        createdAt: ic.time(),
      }

      creators.insert(creator.id, creator)
      return creator
    },
  ),
  readAllCreators: query([], Vec(Creator), () => {
    return creators.values()
  }),
  readCreator: query([Principal], Opt(Creator), (id) => {
    return creators.get(id)
  }),
  deleteCreator: update([Principal], Result(Creator, Errors), (id) => {
    const creatorOpts = creators.get(id)

    if ("None" in creatorOpts) {
      return Err({
        CreatorDoesNotExist: id,
      })
    }

    const creator = creatorOpts.Some

    creator.nftIds.forEach((nftId) => {
      nfts.remove(nftId)
    })

    creators.remove(creator.id)
    return Ok(creator)
  }),
})

function generateId(): Principal {
  const randomBytes = new Array(29)
    .fill(0)
    .map((_) => Math.floor(Math.random() * 256))

  return Principal.fromUint8Array(Uint8Array.from(randomBytes))
}
