import Debug "mo:base/Debug";
import Principal "mo:base/Principal";
import Nat8 "mo:base/Nat8";
import HashMap "mo:base/HashMap";
import List "mo:base/List";
import Iter "mo:base/Iter";

import ArtistActorClass "Artist";
import MerchantActorClass "Merchant";

actor ArtConnect {
    private type Transaction = {
        merchant : Principal;
        transactions : Nat8;
        claimed : Bool;
    };

    var mapOfArtists = HashMap.HashMap<Principal, ArtistActorClass.Artist>(1, Principal.equal, Principal.hash);
    var mapOfMerchants = HashMap.HashMap<Principal, MerchantActorClass.Merchant>(1, Principal.equal, Principal.hash);

    var mapOfCollaborations = HashMap.HashMap<Principal, List.List<Principal>>(1, Principal.equal, Principal.hash);

    // Use nested HashMaps for quick lookups
    var userTransactions = HashMap.HashMap<Principal, HashMap.HashMap<Principal, Transaction>>(1, Principal.equal, Principal.hash);

    public shared (msg) func createArtist(owner : Principal, name : Text, city : Text, province : Text, behance : Text, flickr : Text, instagram : Text, reddit : Text) : async Principal {
        let newArtist = await ArtistActorClass.Artist(owner, name, city, province, behance, flickr, instagram, reddit);
        let newArtistPrincipal = await newArtist.getCanisterId();

        mapOfArtists.put(newArtistPrincipal, newArtist);
        return newArtistPrincipal;
    };

    public shared (msg) func createMerchant(owner : Principal, name : Text, lon : Text, lat : Text) : async Principal {
        let newMerchant = await MerchantActorClass.Merchant(owner, name, lon, lat);
        let newMerchantPrincipal = await newMerchant.getCanisterId();

        mapOfMerchants.put(newMerchantPrincipal, newMerchant);
        return newMerchantPrincipal;
    };

    public shared (msg) func addCollaboration(merchant : Principal, artist : Principal) : async () {
        var collab : List.List<Principal> = switch (mapOfCollaborations.get(merchant)) {
            case null List.nil<Principal>();
            case (?result) result;
        };

        collab := List.push(artist, collab);
        mapOfCollaborations.put(merchant, collab);
    };

    public shared (msg) func addTransaction(user : Principal, merchant : Principal) : async () {
        // Get or create the merchant transaction map for this user
        let merchantTransactions = switch (userTransactions.get(user)) {
            case (null) {
                // If the user does not have any transactions, create a new map
                HashMap.HashMap<Principal, Transaction>(1, Principal.equal, Principal.hash);
            };
            case (?existingMap) existingMap;
        };

        // Get the current transaction count for this merchant, or start at 0 if none exists
        let currentTransaction : Transaction = switch (merchantTransactions.get(merchant)) {
            case (null) {
                // Start a new transaction record if none exists
                { merchant = merchant; transactions = 0; claimed = false };
            };
            case (?existingTransaction) existingTransaction;
        };

        // Increment the transaction count
        let updatedTransaction = {
            merchant = currentTransaction.merchant;
            transactions = currentTransaction.transactions + 1 : Nat8;
            claimed = currentTransaction.claimed;
        };

        // Update the merchant transaction map for this user
        merchantTransactions.put(merchant, updatedTransaction);

        // Update the user transaction map with the new merchant transaction map
        userTransactions.put(user, merchantTransactions);
    };

    // Additional functions or logic can be added here
};
