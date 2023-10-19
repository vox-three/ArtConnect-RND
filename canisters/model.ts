import { bool, nat64, Principal, Record, text, Vec } from "azle"

const Nft = Record({
  id: nat64,
  creatorId: Principal,
  imageUrl: text,
  imageMetadata: text,
  createdAt: nat64,
})
const Slot = Record({
  id: nat64,
  userId: Principal,
  merchantId: text,
  nftId: nat64,
  claimed: bool,
  createdAt: nat64,
})
const User = Record({
  id: Principal,
  slotIds: Vec(nat64),
  nftIds: Vec(nat64),
  createdAt: nat64,
})
const Merchant = Record({
  uuid: text,
  slotIds: Vec(nat64),
  collabCreators: Vec(Principal),
  createdAt: nat64,
})
const Creator = Record({
  id: Principal,
  behance: text,
  flickr: text,
  instagram: text,
  reddit: text,
  nftIds: Vec(nat64),
  createdAt: nat64,
})

export { Nft, Slot, User, Merchant, Creator }
