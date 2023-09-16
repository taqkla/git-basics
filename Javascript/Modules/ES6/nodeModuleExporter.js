export const exportedGetUserData = () => {
    return { username: "Prateek", designation: "Software Engineer", hobbies: ["Reading tech blogs", "Teaching", "Cricket: Watching and Playing"] };
}

export const userData = { username: "Ahmed", designation: "Software Engineer", hobbies: ["Vlogging", "Reaseach", "Football: Watching and Playing"] };

const exportedGetUserDataFromDB = () => {
    return { username: "Krishna", designation: "Software Engineer", hobbies: ["Vlogging", "Reaseach", "Football: Watching and Playing"] }
}

export default exportedGetUserDataFromDB;