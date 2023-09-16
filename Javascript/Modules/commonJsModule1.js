// get the data from the database


const getUserData = () => {
    return { username: "Prateek", designation: "Software Engineer", hobbies: ["Reading tech blogs", "Teaching", "Cricket: Watching and Playing"] };
}

const getUserDataFromDB = () => {
    return { username: "Krishna", designation: "Software Engineer", hobbies: ["Vlogging", "Reaseach", "Football: Watching and Playing"] }
}

const userObject = { username: "Ahmed", designation: "Software Engineer", hobbies: ["Vlogging", "Reaseach", "Football: Watching and Playing"] }

// api file - handler

// logic - service

// data/mod - get/set data

module.exports = { getUserData: getUserData, getUserDataFromDB: getUserDataFromDB, userObject: userObject };
// module.exports = { getUserData, getUserDataFromDB, userObject };

// module.exports = getUserDataFromDB;

// module.exports = userObject;
// module.exports = getUserData;