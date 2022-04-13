import bcryptjs from 'bcryptjs';

const users = [
  {
    name: 'admin',
    email: 'admin@gmail.com',
    password: bcryptjs.hashSync('admin12345'),
    isAdmin: true,
  },
  {
    name: 'Tauhid',
    email: 'tauhid@gmail.com',
    password: bcryptjs.hashSync('tauhid12345'),
    isAdmin: true,
  },
  {
    name: 'Sharmin',
    email: 'sharmin@gmail.com',
    password: bcryptjs.hashSync('sharmin12345'),
    isAdmin: true,
  },
];

export default users;
