
# Art Connect

## Quick Links

- [Introduction](#introduction)

- [Getting started](#getting-started)

- [Usage Guide](#usage-guide)

- [API Documentation](#api-documentation)

- [Troubleshooting](#troubleshooting)

- [Support and Contact Information](#support-and-contact-information)

### Introduction
Art Connect is a loyalty program, developed on Internet Computer Protocol or ICP platform which is continuously growing as a blockchain network. Art Connect tries to fix a problem in Bali, where there are several businesses that are struggling to sell and maintain their sells each month. Also artists in Bali that are selling arts as their main source of income.

Art Connect tries to connect businesses and artists to collaborate on this problem with the help of decentralized technology built on top of ICP.

Art Connect is one of the first loyalty program in Indonesia which propose this kind of solution, trying to fix the problem of businesses and artists with a gamified loyalty program, targeting mobile platforms.

### Getting Started
1. Clone the project
2. Install the Internet Computer SDK 
	`sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"`
3. Start the local replica
	`dfx start --background`
4. Generate Candid definitions 
	 `dfx generate`
5. Copy the generated files
	`cp src/declarations/counter/* .dfx/local/canisters/counter/`
6. Deploy the project
	`dfx deploy`
7. Start the local development server for the frontend
	`npm run dev`

### Usage Guide
1. When the user is accessing the application, the user needs to login using Internet Identity
2. After the user is logged in, they can scan the QR code given at the merchant
3. The scanned QR code contains NFT and Transaction data which will be saved into the user Internet Identity on-chain
4. The user then can check out the current transaction progress at the Transaction Page or check their collection at the Collection Page

### API Documentation
#### `addTransaction`

- Input: `(nat64)`
- Output: `variant {Ok:record {id:nat64; userId:principal; createdAt:nat64; merchantId:text; claimed:bool; transactions:nat64}; Err:variant {MerchantDoesNotExist:text; SlotDoesNotExist:nat64; NftDoesNotExist:nat64; CreatorDoesNotExist:principal; LoyaltyDoesNotExist:nat64; UserDoesNotExist:principal}}`

Description: Adds a transaction.

#### `clearLoyalty`

- Input: `(nat64, principal, text)`
- Output: `variant {Ok:record {id:nat64; userId:principal; createdAt:nat64; merchantId:text; claimed:bool; transactions:nat64}; Err:variant {MerchantDoesNotExist:text; SlotDoesNotExist:nat64; NftDoesNotExist:nat64; CreatorDoesNotExist:principal; LoyaltyDoesNotExist:nat64; UserDoesNotExist:principal}}`

Description: Clears loyalty.

#### `createCreator`

- Input: `(text, text, text, text, text, text, text)`
- Output: `record {id:principal; province:text; flickr:text; city:text; instagram:text; name:text; createdAt:nat64; behance:text; reddit:text}`

Description: Creates a creator.

#### `createLoyalty`

- Input: `(text)`
- Output: `record {id:nat64; userId:principal; createdAt:nat64; merchantId:text; claimed:bool; transactions:nat64}`

Description: Creates a loyalty.

#### `createMerchant`

- Input: `(text, text, text)`
- Output: `record {lat:text; lon:text; name:text; createdAt:nat64; uuid:text; collaborations:vec principal}`

Description: Creates a merchant.

#### `createNft`

- Input: `(principal, text, text)`
- Output: `variant {Ok:record {id:nat64; metadataUrl:text; userId:principal; createdAt:nat64; creatorId:principal; imageUrl:text}; Err:variant {MerchantDoesNotExist:text; SlotDoesNotExist:nat64; NftDoesNotExist:nat64; CreatorDoesNotExist:principal; LoyaltyDoesNotExist:nat64; UserDoesNotExist:principal}}`

Description: Creates an NFT.

#### `createUser`

- Input: `()`
- Output: `record {id:principal; createdAt:nat64}`

Description: Creates a user.

#### `deleteCreator`

- Input: `(principal)`
- Output: `variant {Ok:record {id:principal; province:text; flickr:text; city:text; instagram:text; name:text; createdAt:nat64; behance:text; reddit:text}; Err:variant {MerchantDoesNotExist:text; SlotDoesNotExist:nat64; NftDoesNotExist:nat64; CreatorDoesNotExist:principal; LoyaltyDoesNotExist:nat64; UserDoesNotExist:principal}}`

Description: Deletes a creator.

#### `deleteLoyalty`

- Input: `(nat64)`
- Output: `variant {Ok:record {id:nat64; userId:principal; createdAt:nat64; merchantId:text; claimed:bool; transactions:nat64}; Err:variant {MerchantDoesNotExist:text; SlotDoesNotExist:nat64; NftDoesNotExist:nat64; CreatorDoesNotExist:principal; LoyaltyDoesNotExist:nat64; UserDoesNotExist:principal}}`

Description: Deletes a loyalty.

#### `deleteMerchant`

- Input: `(text)`
- Output: `variant {Ok:record {lat:text; lon:text; name:text; createdAt:nat64; uuid:text; collaborations:vec principal}; Err:variant {MerchantDoesNotExist:text; SlotDoesNotExist:nat64; NftDoesNotExist:nat64; CreatorDoesNotExist:principal; LoyaltyDoesNotExist:nat64; UserDoesNotExist:principal}}`

Description: Deletes a merchant.

#### `deleteNft`

- Input: `(nat64)`
- Output: `variant {Ok:record {id:nat64; metadataUrl:text; userId:principal; createdAt:nat64; creatorId:principal; imageUrl:text}; Err:variant {MerchantDoesNotExist:text; SlotDoesNotExist:nat64; NftDoesNotExist:nat64; CreatorDoesNotExist:principal; LoyaltyDoesNotExist:nat64; UserDoesNotExist:principal}}`

Description: Deletes an NFT.

#### `deleteUser`

- Input: `(principal)`
- Output: `variant {Ok:record {id:principal; createdAt:nat64}; Err:variant {MerchantDoesNotExist:text; SlotDoesNotExist:nat64; NftDoesNotExist:nat64; CreatorDoesNotExist:principal; LoyaltyDoesNotExist:nat64; UserDoesNotExist:principal}}`

Description: Deletes a user.

#### `queryCreatorNft`

- Input: `(principal)`
- Output: `vec record {id:nat64; metadataUrl:text; userId:principal; createdAt:nat64; creatorId:principal; imageUrl:text}`

Description: Queries NFTs created by a creator.

#### `queryLoyalty`

- Input: `(principal, text)`
- Output: `vec record {id:nat64; userId:principal; createdAt:nat64; merchantId:text; claimed:bool; transactions:nat64}`

Description: Queries loyalty information for a user at a specific merchant.

#### `queryLoyaltyNft`

- Input: `(nat64)`
- Output: `vec record {id:nat64; metadataUrl:text; userId:principal; createdAt:nat64

### Troubleshooting
1. If the problem mention about `npm run build` process, make sure that the frontend and the backend canister don't have any compilation error
2. If the problem persist, try to repeat the [getting started](#getting-started) process from step 3 after running this command `dfx stop`
3. If you encounter an error or errors when running `dfx stop`, make sure to kill all of IC processes in your machine

### Support and Contact Information
techprod@voxthree.com
