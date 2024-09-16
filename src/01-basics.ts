interface Friend {
    name: string;
    phone: string;
    age: number
}

const friend1 = {
    name: "Jay Langford",
    phone: "0863758394",
    age: "21",
};

const friend2 = {
    name: "Dylan Chai",
    phone: "0834723648",
    age: "21",
};

const friends = [friend1, friend2];
console.log(friends[1]);

//   -------------------

const colleague1 = {
    name: "Jay Fly",
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

const colleagues = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };

console.log(colleagues.current[0]);