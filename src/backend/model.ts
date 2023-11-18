import { bool, nat64, Principal, Record, text, Vec, Opt } from "azle";

const User = Record({
    id: Principal,
    createdAt: nat64,
});
const Merchant = Record({
    uuid: text,
    name: text,
    lon: text,
    lat: text,
    collaborations: Vec(Principal),
    createdAt: nat64,
});
const Creator = Record({
    id: Principal,
    name: text,
    city: text,
    province: text,
    behance: text,
    flickr: text,
    instagram: text,
    reddit: text,
    createdAt: nat64,
});

// Relationship Models
const Nft = Record({
    id: nat64,
    imageUrl: text,
    metadataUrl: text,
    userId: Principal,
    creatorId: Principal,
    createdAt: nat64,
});
const Loyalty = Record({
    id: nat64,
    transactions: nat64,
    claimed: bool,
    userId: Principal,
    merchantId: text,
    createdAt: nat64,
});

export { Nft, User, Merchant, Creator, Loyalty };
