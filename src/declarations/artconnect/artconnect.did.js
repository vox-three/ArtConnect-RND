export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'createCreator' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [
          IDL.Record({
            'id' : IDL.Principal,
            'nftIds' : IDL.Vec(IDL.Nat64),
            'flickr' : IDL.Text,
            'instagram' : IDL.Text,
            'createdAt' : IDL.Nat64,
            'behance' : IDL.Text,
            'reddit' : IDL.Text,
          }),
        ],
        [],
      ),
    'createMerchant' : IDL.Func(
        [],
        [
          IDL.Record({
            'slotIds' : IDL.Vec(IDL.Nat64),
            'collabCreators' : IDL.Vec(IDL.Principal),
            'createdAt' : IDL.Nat64,
            'uuid' : IDL.Text,
          }),
        ],
        [],
      ),
    'createNft' : IDL.Func(
        [IDL.Principal, IDL.Text, IDL.Text],
        [
          IDL.Record({
            'id' : IDL.Nat64,
            'imageMetadata' : IDL.Text,
            'createdAt' : IDL.Nat64,
            'creatorId' : IDL.Principal,
            'imageUrl' : IDL.Text,
          }),
        ],
        [],
      ),
    'createSlot' : IDL.Func(
        [IDL.Nat64, IDL.Principal, IDL.Text, IDL.Nat64],
        [
          IDL.Record({
            'id' : IDL.Nat64,
            'userId' : IDL.Principal,
            'createdAt' : IDL.Nat64,
            'merchantId' : IDL.Text,
            'claimed' : IDL.Bool,
            'nftId' : IDL.Nat64,
          }),
        ],
        [],
      ),
    'createUser' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Record({
            'id' : IDL.Principal,
            'nftIds' : IDL.Vec(IDL.Nat64),
            'slotIds' : IDL.Vec(IDL.Nat64),
            'createdAt' : IDL.Nat64,
          }),
        ],
        [],
      ),
    'deleteCreator' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'nftIds' : IDL.Vec(IDL.Nat64),
              'flickr' : IDL.Text,
              'instagram' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'behance' : IDL.Text,
              'reddit' : IDL.Text,
            }),
            'Err' : IDL.Variant({
              'MerchantDoesNotExist' : IDL.Text,
              'SlotDoesNotExist' : IDL.Nat64,
              'NftDoesNotExist' : IDL.Nat64,
              'CreatorDoesNotExist' : IDL.Principal,
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
              'slotIds' : IDL.Vec(IDL.Nat64),
              'collabCreators' : IDL.Vec(IDL.Principal),
              'createdAt' : IDL.Nat64,
              'uuid' : IDL.Text,
            }),
            'Err' : IDL.Variant({
              'MerchantDoesNotExist' : IDL.Text,
              'SlotDoesNotExist' : IDL.Nat64,
              'NftDoesNotExist' : IDL.Nat64,
              'CreatorDoesNotExist' : IDL.Principal,
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
              'imageMetadata' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'creatorId' : IDL.Principal,
              'imageUrl' : IDL.Text,
            }),
            'Err' : IDL.Variant({
              'MerchantDoesNotExist' : IDL.Text,
              'SlotDoesNotExist' : IDL.Nat64,
              'NftDoesNotExist' : IDL.Nat64,
              'CreatorDoesNotExist' : IDL.Principal,
              'UserDoesNotExist' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'deleteSlot' : IDL.Func(
        [IDL.Nat64],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Nat64,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'merchantId' : IDL.Text,
              'claimed' : IDL.Bool,
              'nftId' : IDL.Nat64,
            }),
            'Err' : IDL.Variant({
              'MerchantDoesNotExist' : IDL.Text,
              'SlotDoesNotExist' : IDL.Nat64,
              'NftDoesNotExist' : IDL.Nat64,
              'CreatorDoesNotExist' : IDL.Principal,
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
              'nftIds' : IDL.Vec(IDL.Nat64),
              'slotIds' : IDL.Vec(IDL.Nat64),
              'createdAt' : IDL.Nat64,
            }),
            'Err' : IDL.Variant({
              'MerchantDoesNotExist' : IDL.Text,
              'SlotDoesNotExist' : IDL.Nat64,
              'NftDoesNotExist' : IDL.Nat64,
              'CreatorDoesNotExist' : IDL.Principal,
              'UserDoesNotExist' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'readAllCreators' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Principal,
              'nftIds' : IDL.Vec(IDL.Nat64),
              'flickr' : IDL.Text,
              'instagram' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'behance' : IDL.Text,
              'reddit' : IDL.Text,
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
              'slotIds' : IDL.Vec(IDL.Nat64),
              'collabCreators' : IDL.Vec(IDL.Principal),
              'createdAt' : IDL.Nat64,
              'uuid' : IDL.Text,
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
              'imageMetadata' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'creatorId' : IDL.Principal,
              'imageUrl' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'readAllSlots' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Nat64,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'merchantId' : IDL.Text,
              'claimed' : IDL.Bool,
              'nftId' : IDL.Nat64,
            })
          ),
        ],
        ['query'],
      ),
    'readAllUsers' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Principal,
              'nftIds' : IDL.Vec(IDL.Nat64),
              'slotIds' : IDL.Vec(IDL.Nat64),
              'createdAt' : IDL.Nat64,
            })
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
              'nftIds' : IDL.Vec(IDL.Nat64),
              'flickr' : IDL.Text,
              'instagram' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'behance' : IDL.Text,
              'reddit' : IDL.Text,
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
              'slotIds' : IDL.Vec(IDL.Nat64),
              'collabCreators' : IDL.Vec(IDL.Principal),
              'createdAt' : IDL.Nat64,
              'uuid' : IDL.Text,
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
              'imageMetadata' : IDL.Text,
              'createdAt' : IDL.Nat64,
              'creatorId' : IDL.Principal,
              'imageUrl' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'readSlot' : IDL.Func(
        [IDL.Nat64],
        [
          IDL.Opt(
            IDL.Record({
              'id' : IDL.Nat64,
              'userId' : IDL.Principal,
              'createdAt' : IDL.Nat64,
              'merchantId' : IDL.Text,
              'claimed' : IDL.Bool,
              'nftId' : IDL.Nat64,
            })
          ),
        ],
        ['query'],
      ),
    'readUser' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Opt(
            IDL.Record({
              'id' : IDL.Principal,
              'nftIds' : IDL.Vec(IDL.Nat64),
              'slotIds' : IDL.Vec(IDL.Nat64),
              'createdAt' : IDL.Nat64,
            })
          ),
        ],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
