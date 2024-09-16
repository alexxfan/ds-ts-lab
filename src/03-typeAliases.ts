import {
    ColleagueV2,
    Friend,
    Buddy,
    BuddyList,
    Administrator,
  } from "./myTypes";
  import { friends } from "./01-basics";

  const colleague1: ColleagueV2 = {
    name: "Jardan Flynn",
    department: "Engineering",
    contact: {
        email: "jayfly@setu.ie",
        extension: 121,
    },
};

const colleague2: ColleagueV2 = {
    name: "Gjorgi Gjorgiev",
    department: "Finance",
    contact: {
      email: "ggjorgiev@company.com",
      extension: 132,
    },
};
  
const colleague3: ColleagueV2 = {
    name: "Dean Doyle",
    department: "HR",
    contact: {
      email: "ddo@company.com",
      extension: 125,
    },
};

function getBuddyListFriends(list: BuddyList): Friend[] {
    return list.members.reduce((friends: Friend[], buddy) => {
        if ('phone' in buddy) {
            friends.push(buddy as Friend); // Type narrowing for Friend
        }
        return friends;
    }, []); // Initialize empty array
}


function makeBuddyList(
    name: string,
    buddies: Buddy[],
    admin?: Administrator
  ): BuddyList {
    return {
      name,
      members: buddies,
      administrator: admin,
    } as BuddyList;
    // The as operator above casts an object to a specific type.
  }
  // Tests for makeBuddyList
  const myFootballBuddies = makeBuddyList(
    "Football team",
    [colleague1, friends[0], colleague2],
    colleague1
  )
  
  const myBandBuddies = makeBuddyList(
      "Band name",
      [colleague1, friends[1]]
      // No administrator
    )
  
  console.log(myFootballBuddies)
  console.log(myBandBuddies)
  //--------------------------------------
  function findBuddyContact(list: BuddyList, name: string): string | undefined {
    for (const buddy of list.members) {
      if (buddy.name === name) {
        if ("phone" in buddy) {
          return buddy.phone;
        }
        else {
          return buddy.contact.email;
        }
      }
      return undefined;
    }
  }
  // Test for findBuddyContact.
  console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Jardan Flynn"))

  // Expected output when testing the function:
  console.log("Football team friends: ", getBuddyListFriends(myFootballBuddies));
  console.log("Band friends: ", getBuddyListFriends(myBandBuddies));
