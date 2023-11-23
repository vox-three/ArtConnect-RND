import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'clearLoyalty' : ActorMethod<
    [bigint, Principal, string],
    {
        'Ok' : {
          'id' : bigint,
          'userId' : Principal,
          'createdAt' : bigint,
          'merchantId' : string,
          'claimed' : boolean,
        }
      } |
      {
        'Err' : { 'MerchantDoesNotExist' : string } |
          { 'SlotDoesNotExist' : bigint } |
          { 'NftDoesNotExist' : bigint } |
          { 'CreatorDoesNotExist' : Principal } |
          { 'LoyaltyDoesNotExist' : bigint } |
          { 'UserDoesNotExist' : Principal }
      }
  >,
  'createCreator' : ActorMethod<
    [string, string, string, string, string, string, string],
    {
      'id' : Principal,
      'province' : string,
      'flickr' : string,
      'city' : string,
      'instagram' : string,
      'name' : string,
      'createdAt' : bigint,
      'behance' : string,
      'reddit' : string,
    }
  >,
  'createLoyalty' : ActorMethod<
    [Principal, string],
    {
      'id' : bigint,
      'userId' : Principal,
      'createdAt' : bigint,
      'merchantId' : string,
      'claimed' : boolean,
    }
  >,
  'createMerchant' : ActorMethod<
    [string, string, string],
    {
      'lat' : string,
      'lon' : string,
      'name' : string,
      'createdAt' : bigint,
      'uuid' : string,
      'collaborations' : Array<Principal>,
    }
  >,
  'createNft' : ActorMethod<
    [Principal, string, string],
    {
        'Ok' : {
          'id' : bigint,
          'metadataUrl' : string,
          'userId' : Principal,
          'createdAt' : bigint,
          'creatorId' : Principal,
          'imageUrl' : string,
          'loyaltyId' : bigint,
        }
      } |
      {
        'Err' : { 'MerchantDoesNotExist' : string } |
          { 'SlotDoesNotExist' : bigint } |
          { 'NftDoesNotExist' : bigint } |
          { 'CreatorDoesNotExist' : Principal } |
          { 'LoyaltyDoesNotExist' : bigint } |
          { 'UserDoesNotExist' : Principal }
      }
  >,
  'createUser' : ActorMethod<
    [Principal],
    { 'id' : Principal, 'createdAt' : bigint }
  >,
  'deleteCreator' : ActorMethod<
    [Principal],
    {
        'Ok' : {
          'id' : Principal,
          'province' : string,
          'flickr' : string,
          'city' : string,
          'instagram' : string,
          'name' : string,
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
          { 'LoyaltyDoesNotExist' : bigint } |
          { 'UserDoesNotExist' : Principal }
      }
  >,
  'deleteLoyalty' : ActorMethod<
    [bigint],
    {
        'Ok' : {
          'id' : bigint,
          'userId' : Principal,
          'createdAt' : bigint,
          'merchantId' : string,
          'claimed' : boolean,
        }
      } |
      {
        'Err' : { 'MerchantDoesNotExist' : string } |
          { 'SlotDoesNotExist' : bigint } |
          { 'NftDoesNotExist' : bigint } |
          { 'CreatorDoesNotExist' : Principal } |
          { 'LoyaltyDoesNotExist' : bigint } |
          { 'UserDoesNotExist' : Principal }
      }
  >,
  'deleteMerchant' : ActorMethod<
    [string],
    {
        'Ok' : {
          'lat' : string,
          'lon' : string,
          'name' : string,
          'createdAt' : bigint,
          'uuid' : string,
          'collaborations' : Array<Principal>,
        }
      } |
      {
        'Err' : { 'MerchantDoesNotExist' : string } |
          { 'SlotDoesNotExist' : bigint } |
          { 'NftDoesNotExist' : bigint } |
          { 'CreatorDoesNotExist' : Principal } |
          { 'LoyaltyDoesNotExist' : bigint } |
          { 'UserDoesNotExist' : Principal }
      }
  >,
  'deleteNft' : ActorMethod<
    [bigint],
    {
        'Ok' : {
          'id' : bigint,
          'metadataUrl' : string,
          'userId' : Principal,
          'createdAt' : bigint,
          'creatorId' : Principal,
          'imageUrl' : string,
          'loyaltyId' : bigint,
        }
      } |
      {
        'Err' : { 'MerchantDoesNotExist' : string } |
          { 'SlotDoesNotExist' : bigint } |
          { 'NftDoesNotExist' : bigint } |
          { 'CreatorDoesNotExist' : Principal } |
          { 'LoyaltyDoesNotExist' : bigint } |
          { 'UserDoesNotExist' : Principal }
      }
  >,
  'deleteUser' : ActorMethod<
    [Principal],
    { 'Ok' : { 'id' : Principal, 'createdAt' : bigint } } |
      {
        'Err' : { 'MerchantDoesNotExist' : string } |
          { 'SlotDoesNotExist' : bigint } |
          { 'NftDoesNotExist' : bigint } |
          { 'CreatorDoesNotExist' : Principal } |
          { 'LoyaltyDoesNotExist' : bigint } |
          { 'UserDoesNotExist' : Principal }
      }
  >,
  'queryCreatorNft' : ActorMethod<
    [Principal],
    Array<
      {
        'id' : bigint,
        'metadataUrl' : string,
        'userId' : Principal,
        'createdAt' : bigint,
        'creatorId' : Principal,
        'imageUrl' : string,
        'loyaltyId' : bigint,
      }
    >
  >,
  'queryLoyalty' : ActorMethod<
    [Principal, string],
    Array<
      {
        'id' : bigint,
        'userId' : Principal,
        'createdAt' : bigint,
        'merchantId' : string,
        'claimed' : boolean,
      }
    >
  >,
  'queryLoyaltyNft' : ActorMethod<
    [bigint],
    Array<
      {
        'id' : bigint,
        'metadataUrl' : string,
        'userId' : Principal,
        'createdAt' : bigint,
        'creatorId' : Principal,
        'imageUrl' : string,
        'loyaltyId' : bigint,
      }
    >
  >,
  'queryUserNft' : ActorMethod<
    [Principal],
    Array<
      {
        'id' : bigint,
        'metadataUrl' : string,
        'userId' : Principal,
        'createdAt' : bigint,
        'creatorId' : Principal,
        'imageUrl' : string,
        'loyaltyId' : bigint,
      }
    >
  >,
  'readAllCreators' : ActorMethod<
    [],
    Array<
      {
        'id' : Principal,
        'province' : string,
        'flickr' : string,
        'city' : string,
        'instagram' : string,
        'name' : string,
        'createdAt' : bigint,
        'behance' : string,
        'reddit' : string,
      }
    >
  >,
  'readAllLoyalties' : ActorMethod<
    [],
    Array<
      {
        'id' : bigint,
        'userId' : Principal,
        'createdAt' : bigint,
        'merchantId' : string,
        'claimed' : boolean,
      }
    >
  >,
  'readAllMerchants' : ActorMethod<
    [],
    Array<
      {
        'lat' : string,
        'lon' : string,
        'name' : string,
        'createdAt' : bigint,
        'uuid' : string,
        'collaborations' : Array<Principal>,
      }
    >
  >,
  'readAllNfts' : ActorMethod<
    [],
    Array<
      {
        'id' : bigint,
        'metadataUrl' : string,
        'userId' : Principal,
        'createdAt' : bigint,
        'creatorId' : Principal,
        'imageUrl' : string,
        'loyaltyId' : bigint,
      }
    >
  >,
  'readAllUsers' : ActorMethod<
    [],
    Array<{ 'id' : Principal, 'createdAt' : bigint }>
  >,
  'readCreator' : ActorMethod<
    [Principal],
    [] | [
      {
        'id' : Principal,
        'province' : string,
        'flickr' : string,
        'city' : string,
        'instagram' : string,
        'name' : string,
        'createdAt' : bigint,
        'behance' : string,
        'reddit' : string,
      }
    ]
  >,
  'readLoyalty' : ActorMethod<
    [bigint],
    [] | [
      {
        'id' : bigint,
        'userId' : Principal,
        'createdAt' : bigint,
        'merchantId' : string,
        'claimed' : boolean,
      }
    ]
  >,
  'readMerchant' : ActorMethod<
    [string],
    [] | [
      {
        'lat' : string,
        'lon' : string,
        'name' : string,
        'createdAt' : bigint,
        'uuid' : string,
        'collaborations' : Array<Principal>,
      }
    ]
  >,
  'readNft' : ActorMethod<
    [bigint],
    [] | [
      {
        'id' : bigint,
        'metadataUrl' : string,
        'userId' : Principal,
        'createdAt' : bigint,
        'creatorId' : Principal,
        'imageUrl' : string,
        'loyaltyId' : bigint,
      }
    ]
  >,
  'readUser' : ActorMethod<
    [Principal],
    [] | [{ 'id' : Principal, 'createdAt' : bigint }]
  >,
  'sendNft' : ActorMethod<
    [bigint, Principal, bigint],
    {
        'Ok' : {
          'id' : bigint,
          'metadataUrl' : string,
          'userId' : Principal,
          'createdAt' : bigint,
          'creatorId' : Principal,
          'imageUrl' : string,
          'loyaltyId' : bigint,
        }
      } |
      {
        'Err' : { 'MerchantDoesNotExist' : string } |
          { 'SlotDoesNotExist' : bigint } |
          { 'NftDoesNotExist' : bigint } |
          { 'CreatorDoesNotExist' : Principal } |
          { 'LoyaltyDoesNotExist' : bigint } |
          { 'UserDoesNotExist' : Principal }
      }
  >,
}
