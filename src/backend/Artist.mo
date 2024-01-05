import Debug "mo:base/Debug";
import Principal "mo:base/Principal";

actor class Artist(owner : Principal, name : Text, city : Text, province : Text, behance : Text, flickr : Text, instagram : Text, reddit : Text) = this {
    private let artistPrincipal = owner;
    private var artistName = name;
    private var artistCity = city;
    private var artistProvince = province;
    private var artistBehance = behance;
    private var artistFlickr = flickr;
    private var artistInstagram = instagram;
    private var artistReddit = reddit;

    public query func getName() : async Text {
        return artistName;
    };
    public query func getCity() : async Text {
        return artistCity;
    };
    public query func getProvince() : async Text {
        return artistProvince;
    };
    public query func getBehance() : async Text {
        return artistBehance;
    };
    public query func getFlickr() : async Text {
        return artistFlickr;
    };
    public query func getInstagram() : async Text {
        return artistInstagram;
    };
    public query func getReddit() : async Text {
        return artistReddit;
    };

    public shared (msg) func changeName(newName : Text) : async Text {
        if (artistPrincipal == msg.caller) {
            artistName := newName;
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
