const users = [
  { name: 'Reuben',
    username: '@blood_pressure_killa',
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege."
  },
  { name: 'Laisha',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  },
  { name: 'Anne',
    username: '@i_love_bambas',
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend"
  },
  { name: 'Steph',
    username: '@queen_of_the_kew',
    followers: 1200,
    verified: false,
    bio: "✌🏼"
  },
  { name: 'Carmen',
    username: '@omar_apollo_fanclub',
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
  }
]

function logAllNames(arrayOfUsers) {
  arrayOfUsers.forEach(({name}) => console.log(name));
}

// logAllNames(users);

function getAllTags(arrayOfUsers) {
  arrayOfUsers.forEach(({name, username}) => console.log(`Hi my name is ${name}, and my tag is ${username}`));
}

// getAllTags(users);

function sumAllFolowers(arrayOfUsers) {
  return arrayOfUsers.reduce((accumulator, {followers}) => accumulator + followers, 0);
}

// console.log(sumAllFolowers(users));

function searchUsername(arrayOfUsers, searchUser) {
  return arrayOfUsers.filter(({username}) => username === searchUser);
}

// console.log(searchUsername(users, "@passaic_papi"));

function longWinded(arrayOfUsers) {
  return arrayOfUsers.find(({bio}) => bio.length === Math.max(...arrayOfUsers.map(({bio}) => bio.length)));
}

console.log(longWinded(users));

function follower(arrayOfUsers) {
  return arrayOfUsers.toSorted(({followersA}, {followersB}) => followersA - followersB);
}

// console.log(follower(users));