import exportedGetUserDataFromDB, { exportedGetUserData, userData } from "./nodeModuleExporter.js";

console.log(exportedGetUserData());
console.log(exportedGetUserDataFromDB());
console.log(userData);