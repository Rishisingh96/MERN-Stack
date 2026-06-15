enum Role {
  user = "user",
  admin = "admin",
}

type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Role;
};

const user1: LoginDetails = {
  email: "rishi@gmail.com",
  password: "rishi@9838",
  role: Role.admin,
};

const user2: LoginDetails = {
  email: "singh@gmail.com",
  password: "dajflk",
  role: Role.user,
};

const isAdmin: (user: LoginDetails) => string = (user) => {
  return user.role === Role.admin
    ? `${user.name} is allowed to edit the website`
    : `${user.name} is not allowed to edit the website`;
};

console.log(isAdmin(user1));