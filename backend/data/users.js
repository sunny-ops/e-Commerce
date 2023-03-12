import bcrypt from "bcryptjs";

const users = [
  {
    name: "AdminUser",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Joy Lee",
    email: "joy@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
