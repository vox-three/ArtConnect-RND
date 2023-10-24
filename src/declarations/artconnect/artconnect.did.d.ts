import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'createCreator' : ActorMethod<
    [string, string, string, string],
    {
      'id' : Principal,
      'nftIds' : BigUint64Array | bigint[],
      'flickr' : string,
      'instagram' : string,
      'createdAt' : bigint,
      'behance' : string,
      'reddit' : string,
    }
  >,
  'createMerchant' : ActorMethod<
    [],
    {
      'slotIds' : BigUint64Array | bigint[],
      'collabCreators' : Array<Principal>,
      'createdAt' : bigint,
      'uuid' : string,
    }
  >,
  'createNft' : ActorMethod<
    [Principal, string, string],
    {
      'id' : bigint,
      'imageMetadata' : string,
      'createdAt' : bigint,
      'creatorId' : Principal,
      'imageUrl' : string,
    }
  >,
  'createSlot' : ActorMethod<
    [bigint, Principal, string, bigint],
    {
      'id' : bigint,
      'userId' : Principal,
      'createdAt' : bigint,
      'merchantId' : string,
      'claimed' : boolean,
      'nftId' : bigint,
    }
  >,
  'createUser' : ActorMethod<
    [Principal],
    {
      'id' : Principal,
      'nftIds' : BigUint64Array | bigint[],
      'slotIds' : BigUint64Array | bigint[],
      'createdAt' : bigint,
    }
  >,
  'deleteCreator' : ActorMethod<
    [Principal],
    {
        'Ok' : {
          'id' : Principal,
          'nftIds' : BigUint64Array | bigint[],
          'flickr' : string,
          'instagram' : string,
          'createdAt' : bigint,
          'behance' : string,
          'reddit' : string,
        }
      } |
      {
        'Err' : { 'MerchantDoesNotExist' : string } |
          { 'SlotDoesNotExist' : bigint } |
          { 'NftDoesNotExist' : bigint } |
          { 'CreatorDoesNotExist' : Principal } |
          { 'UserDoesNotExist' : Principal }
      }
  >,
  'deleteMerchant' : ActorMethod<
    [string],
    {
        'Ok' : {
          'slotIds' : BigUint64Array | bigint[],
          'collabCreators' : Array<Principal>,
          'createdAt' : bigint,
          'uuid' : string,
        }
      } |
      {
        'Err' : { 'MerchantDoesNotExist' : string } |
          { 'SlotDoesNotExist' : bigint } |
          { 'NftDoesNotExist' : bigint } |
          { 'CreatorDoesNotExist' : Principal } |
          { 'UserDoesNotExist' : Principal }
      }
  >,
  'deleteNft' : ActorMethod<
    [bigint],
    {
        'Ok' : {
          'id' : bigint,
          'imageMetadata' : string,
          'createdAt' : bigint,
          'creatorId' : Principal,
          'imageUrl' : string,
        }
      } |
      {
        'Err' : { 'MerchantDoesNotExist' : string } |
          { 'SlotDoesNotExist' : bigint } |
          { 'NftDoesNotExist' : bigint } |
          { 'CreatorDoesNotExist' : Principal } |
          { 'UserDoesNotExist' : Principal }
      }
  >,
  'deleteSlot' : ActorMethod<
    [bigint],
    {
        'Ok' : {
          'id' : bigint,
          'userId' : Principal,
          'createdAt' : bigint,
          'merchantId' : string,
          'claimed' : boolean,
          'nftId' : bigint,
        }
      } |
      {
        'Err' : { 'MerchantDoesNotExist' : string } |
          { 'SlotDoesNotExist' : bigint } |
          { 'NftDoesNotExist' : bigint } |
          { 'CreatorDoesNotExist' : Principal } |
          { 'UserDoesNotExist' : Principal }
      }
  >,
  'deleteUser' : ActorMethod<
    [Principal],
    {
        'Ok' : {
          'id' : Principal,
          'nftIds' : BigUint64Array | bigint[],
          'slotIds' : BigUint64Array | bigint[],
          'createdAt' : bigint,
        }
      } |
      {
        'Err' : { 'MerchantDoesNotExist' : string } |
          { 'SlotDoesNotExist' : bigint } |
          { 'NftDoesNotExist' : bigint } |
          { 'CreatorDoesNotExist' : Principal } |
          { 'UserDoesNotExist' : Principal }
      }
  >,
  'readAllCreators' : ActorMethod<
    [],
    Array<
      {
        'id' : Principal,
        'nftIds' : BigUint64Array | bigint[],
        'flickr' : string,
        'instagram' : string,
        'createdAt' : bigint,
        'behance' : string,
        'reddit' : string,
      }
    >
  >,
  'readAllMerchants' : ActorMethod<
    [],
    Array<
      {
        'slotIds' : BigUint64Array | bigint[],
        'collabCreators' : Array<Principal>,
        'createdAt' : bigint,
        'uuid' : string,
      }
    >
  >,
  'readAllNfts' : ActorMethod<
    [],
    Array<
      {
        'id' : bigint,
        'imageMetadata' : string,
        'createdAt' : bigint,
        'creatorId' : Principal,
        'imageUrl' : string,
      }
    >
  >,
  'readAllSlots' : ActorMethod<
    [],
    Array<
      {
        'id' : bigint,
        'userId' : Principal,
        'createdAt' : bigint,
        'merchantId' : string,
        'claimed' : boolean,
        'nftId' : bigint,
      }
    >
  >,
  'readAllUsers' : ActorMethod<
    [],
    Array<
      {
        'id' : Principal,
        'nftIds' : BigUint64Array | bigint[],
        'slotIds' : BigUint64Array | bigint[],
        'createdAt' : bigint,
      }
    >
  >,
  'readCreator' : ActorMethod<
    [Principal],
    [] | [
      {
        'id' : Principal,
        'nftIds' : BigUint64Array | bigint[],
        'flickr' : string,
        'instagram' : string,
        'createdAt' : bigint,
        'behance' : string,
        'reddit' : string,
      }
    ]
  >,
  'readMerchant' : ActorMethod<
    [string],
    [] | [
      {
        'slotIds' : BigUint64Array | bigint[],
        'collabCreators' : Array<Principal>,
        'createdAt' : bigint,
        'uuid' : string,
      }
    ]
  >,
  'readNft' : ActorMethod<
    [bigint],
    [] | [
      {
        'id' : bigint,
        'imageMetadata' : string,
        'createdAt' : bigint,
        'creatorId' : Principal,
        'imageUrl' : string,
      }
    ]
  >,
  'readSlot' : ActorMethod<
    [bigint],
    [] | [
      {
        'id' : bigint,
        'userId' : Principal,
        'createdAt' : bigint,
        'merchantId' : string,
        'claimed' : boolean,
        'nftId' : bigint,
      }
    ]
  >,
  'readUser' : ActorMethod<
    [Principal],
    [] | [
      {
        'id' : Principal,
        'nftIds' : BigUint64Array | bigint[],
        'slotIds' : BigUint64Array | bigint[],
        'createdAt' : bigint,
      }
    ]
  >,
}
