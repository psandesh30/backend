import bcrypt from "bcryptjs";

let password = "pass";

let hashedPassword = await bcrypt.hash(password, 10);

console.log(hashedPassword);

// let loginPassword = "pass";
// let validPassword = await bcrypt.compare(loginPassword, hashedPassword);

// console.log(validPassword);
