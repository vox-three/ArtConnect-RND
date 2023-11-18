export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addTransaction' : IDL.Func(
        [IDL.Nat64],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Nat64,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'merchantId' : IDL.Text,
              'claimed' : IDL.Bool,
              'transactions' : IDL.Nat64,
            }),
            'Err' : IDL.Variant({
              'MerchantDoesNotExist' : IDL.Text,
              'SlotDoesNotExist' : IDL.Nat64,
              'NftDoesNotExist' : IDL.Nat64,
              'CreatorDoesNotExist' : IDL.Principal,
              'LoyaltyDoesNotExist' : IDL.Nat64,
              'UserDoesNotExist' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'clearLoyalty' : IDL.Func(
        [IDL.Nat64, IDL.Principal, IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Nat64,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'merchantId' : IDL.Text,
              'claimed' : IDL.Bool,
              'transactions' : IDL.Nat64,
            }),
            'Err' : IDL.Variant({
              'MerchantDoesNotExist' : IDL.Text,
              'SlotDoesNotExist' : IDL.Nat64,
              'NftDoesNotExist' : IDL.Nat64,
              'CreatorDoesNotExist' : IDL.Principal,
              'LoyaltyDoesNotExist' : IDL.Nat64,
              'UserDoesNotExist' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'createCreator' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [
          IDL.Record({
            'id' : IDL.Principal,
            'province' : IDL.Text,
            'flickr' : IDL.Text,
            'city' : IDL.Text,
            'instagram' : IDL.Text,
            'name' : IDL.Text,
            'createdAt' : IDL.Nat64,
            'behance' : IDL.Text,
            'reddit' : IDL.Text,
          }),
        ],
        [],
      ),
    'createLoyalty' : IDL.Func(
        [IDL.Text],
        [
          IDL.Record({
            'id' : IDL.Nat64,
            'userId' : IDL.Principal,
            'createdAt' : IDL.Nat64,
            'merchantId' : IDL.Text,
            'claimed' : IDL.Bool,
            'transactions' : IDL.Nat64,
          }),
        ],
        [],
      ),
    'createMerchant' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text],
        [
          IDL.Record({
            'lat' : IDL.Text,
            'lon' : IDL.Text,
            'name' : IDL.Text,
            'createdAt' : IDL.Nat64,
            'uuid' : IDL.Text,
            'collaborations' : IDL.Vec(IDL.Principal),
          }),
        ],
        [],
      ),
    'createNft' : IDL.Func(
        [IDL.Principal, IDL.Text, IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Nat64,
              'metadataUrl' : IDL.Text,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'creatorId' : IDL.Principal,
              'imageUrl' : IDL.Text,
            }),
            'Err' : IDL.Variant({
              'MerchantDoesNotExist' : IDL.Text,
              'SlotDoesNotExist' : IDL.Nat64,
              'NftDoesNotExist' : IDL.Nat64,
              'CreatorDoesNotExist' : IDL.Principal,
              'LoyaltyDoesNotExist' : IDL.Nat64,
              'UserDoesNotExist' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'createUser' : IDL.Func(
        [],
        [IDL.Record({ 'id' : IDL.Principal, 'createdAt' : IDL.Nat64 })],
        [],
      ),
    'deleteCreator' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'province' : IDL.Text,
              'flickr' : IDL.Text,
              'city' : IDL.Text,
              'instagram' : IDL.Text,
              'name' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'behance' : IDL.Text,
              'reddit' : IDL.Text,
            }),
            'Err' : IDL.Variant({
              'MerchantDoesNotExist' : IDL.Text,
              'SlotDoesNotExist' : IDL.Nat64,
              'NftDoesNotExist' : IDL.Nat64,
              'CreatorDoesNotExist' : IDL.Principal,
              'LoyaltyDoesNotExist' : IDL.Nat64,
              'UserDoesNotExist' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'deleteLoyalty' : IDL.Func(
        [IDL.Nat64],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Nat64,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'merchantId' : IDL.Text,
              'claimed' : IDL.Bool,
              'transactions' : IDL.Nat64,
            }),
            'Err' : IDL.Variant({
              'MerchantDoesNotExist' : IDL.Text,
              'SlotDoesNotExist' : IDL.Nat64,
              'NftDoesNotExist' : IDL.Nat64,
              'CreatorDoesNotExist' : IDL.Principal,
              'LoyaltyDoesNotExist' : IDL.Nat64,
              'UserDoesNotExist' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'deleteMerchant' : IDL.Func(
        [IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'lat' : IDL.Text,
              'lon' : IDL.Text,
              'name' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'uuid' : IDL.Text,
              'collaborations' : IDL.Vec(IDL.Principal),
            }),
            'Err' : IDL.Variant({
              'MerchantDoesNotExist' : IDL.Text,
              'SlotDoesNotExist' : IDL.Nat64,
              'NftDoesNotExist' : IDL.Nat64,
              'CreatorDoesNotExist' : IDL.Principal,
              'LoyaltyDoesNotExist' : IDL.Nat64,
              'UserDoesNotExist' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'deleteNft' : IDL.Func(
        [IDL.Nat64],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Nat64,
              'metadataUrl' : IDL.Text,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'creatorId' : IDL.Principal,
              'imageUrl' : IDL.Text,
            }),
            'Err' : IDL.Variant({
              'MerchantDoesNotExist' : IDL.Text,
              'SlotDoesNotExist' : IDL.Nat64,
              'NftDoesNotExist' : IDL.Nat64,
              'CreatorDoesNotExist' : IDL.Principal,
              'LoyaltyDoesNotExist' : IDL.Nat64,
              'UserDoesNotExist' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'deleteUser' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'createdAt' : IDL.Nat64,
            }),
            'Err' : IDL.Variant({
              'MerchantDoesNotExist' : IDL.Text,
              'SlotDoesNotExist' : IDL.Nat64,
              'NftDoesNotExist' : IDL.Nat64,
              'CreatorDoesNotExist' : IDL.Principal,
              'LoyaltyDoesNotExist' : IDL.Nat64,
              'UserDoesNotExist' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'queryCreatorNft' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Nat64,
              'metadataUrl' : IDL.Text,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'creatorId' : IDL.Principal,
              'imageUrl' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'queryLoyalty' : IDL.Func(
        [IDL.Principal, IDL.Text],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Nat64,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'merchantId' : IDL.Text,
              'claimed' : IDL.Bool,
              'transactions' : IDL.Nat64,
            })
          ),
        ],
        [],
      ),
    'queryLoyaltyNft' : IDL.Func(
        [IDL.Nat64],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Nat64,
              'metadataUrl' : IDL.Text,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'creatorId' : IDL.Principal,
              'imageUrl' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'queryUserNft' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Nat64,
              'metadataUrl' : IDL.Text,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'creatorId' : IDL.Principal,
              'imageUrl' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'readAllCreators' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Principal,
              'province' : IDL.Text,
              'flickr' : IDL.Text,
              'city' : IDL.Text,
              'instagram' : IDL.Text,
              'name' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'behance' : IDL.Text,
              'reddit' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'readAllLoyalties' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Nat64,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'merchantId' : IDL.Text,
              'claimed' : IDL.Bool,
              'transactions' : IDL.Nat64,
            })
          ),
        ],
        ['query'],
      ),
    'readAllMerchants' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'lat' : IDL.Text,
              'lon' : IDL.Text,
              'name' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'uuid' : IDL.Text,
              'collaborations' : IDL.Vec(IDL.Principal),
            })
          ),
        ],
        ['query'],
      ),
    'readAllNfts' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Nat64,
              'metadataUrl' : IDL.Text,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'creatorId' : IDL.Principal,
              'imageUrl' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'readAllUsers' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({ 'id' : IDL.Principal, 'createdAt' : IDL.Nat64 })
          ),
        ],
        ['query'],
      ),
    'readCreator' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Opt(
            IDL.Record({
              'id' : IDL.Principal,
              'province' : IDL.Text,
              'flickr' : IDL.Text,
              'city' : IDL.Text,
              'instagram' : IDL.Text,
              'name' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'behance' : IDL.Text,
              'reddit' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'readLoyalty' : IDL.Func(
        [IDL.Nat64],
        [
          IDL.Opt(
            IDL.Record({
              'id' : IDL.Nat64,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'merchantId' : IDL.Text,
              'claimed' : IDL.Bool,
              'transactions' : IDL.Nat64,
            })
          ),
        ],
        ['query'],
      ),
    'readMerchant' : IDL.Func(
        [IDL.Text],
        [
          IDL.Opt(
            IDL.Record({
              'lat' : IDL.Text,
              'lon' : IDL.Text,
              'name' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'uuid' : IDL.Text,
              'collaborations' : IDL.Vec(IDL.Principal),
            })
          ),
        ],
        ['query'],
      ),
    'readNft' : IDL.Func(
        [IDL.Nat64],
        [
          IDL.Opt(
            IDL.Record({
              'id' : IDL.Nat64,
              'metadataUrl' : IDL.Text,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'creatorId' : IDL.Principal,
              'imageUrl' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'readUser' : IDL.Func(
        [],
        [
          IDL.Opt(
            IDL.Record({ 'id' : IDL.Principal, 'createdAt' : IDL.Nat64 })
          ),
        ],
        ['query'],
      ),
    'sendNft' : IDL.Func(
        [IDL.Nat64],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Nat64,
              'metadataUrl' : IDL.Text,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'creatorId' : IDL.Principal,
              'imageUrl' : IDL.Text,
            }),
            'Err' : IDL.Variant({
              'MerchantDoesNotExist' : IDL.Text,
              'SlotDoesNotExist' : IDL.Nat64,
              'NftDoesNotExist' : IDL.Nat64,
              'CreatorDoesNotExist' : IDL.Principal,
              'LoyaltyDoesNotExist' : IDL.Nat64,
              'UserDoesNotExist' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
