import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Demo Admin',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Demo User',
    email: 'user@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  },
  {
    name: 'BK Pecho',
    email: 'bk@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  }
];

export default users;
