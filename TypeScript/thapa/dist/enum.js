"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
})(Role || (Role = {}));
const user1 = {
    email: "rishi@gmail.com",
    password: "rishi@9838",
    role: Role.admin,
};
const user2 = {
    email: "singh@gmail.com",
    password: "dajflk",
    role: Role.user,
};
const isAdmin = (user) => {
    return user.role === Role.admin
        ? `${user.name} is allowed to edit the website`
        : `${user.name} is not allowed to edit the website`;
};
console.log(isAdmin(user1));
//# sourceMappingURL=enum.js.map