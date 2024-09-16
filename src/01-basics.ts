import {Friend, Colleague, ColleagueHistory } from './myTypes'

const friend1 : Friend = {
    name: "Paul Fleming",
    phone: "087-12345",
    age: 25,
    dob: new Date("1998-11-20") ,
  };
  
  const friend2 : Friend = {
    name: "Jane Costello",
    phone: "086--12345",
    age: 31,
    interests: ['Music', 'Sport']
  };

export const friends = [friend1, friend2];
// console.log(friends[1]);

//   -------------------

const colleague1 = {
    name: "Jardan Flynn",
    department: "Engineering",
    contact: {
        email: "jayfly@setu.ie",
        extension: 121,
    },
};

const colleague2 = {
    name: "Gjorgi Gjorgiev",
    department: "Finance",
    contact: {
      email: "ggjorgiev@company.com",
      extension: 132,
    },
};
  
const colleague3 = {
    name: "Dean Doyle",
    department: "HR",
    contact: {
      email: "ddo@company.com",
      extension: 125,
    },
};

export const colleagues : ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
};

// console.log(colleagues.current[0]);