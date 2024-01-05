import Debug "mo:base/Debug";
import Principal "mo:base/Principal";

actor class Merchant(owner : Principal, name : Text, lon : Text, lat : Text) = this {
    private type Location = {
        merchantLon : Text;
        merchantLat : Text;
    };

    private let merchantPrincipal = owner;
    private var merchantName = name;
    private let merchantLoc : Location = {
        merchantLon = lon;
        merchantLat = lat;
    };

    public query func getName() : async Text {
        return merchantName;
    };
    public query func getLoc() : async Location {
        return merchantLoc;
    };

    public shared (msg) func changeName(newName : Text) : async Text {
        if (merchantPrincipal == msg.caller) {
            merchantName := newName;
            return "Success";
        } else {
            return "Change name error: not initiated by owner";
        };
    };

    // get nft canister id
    public query func getCanisterId() : async Principal {
        return Principal.fromActor(this);
    };

};
