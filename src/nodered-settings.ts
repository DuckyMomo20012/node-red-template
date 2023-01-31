import bcryptjs from 'bcryptjs';

const settings = {
  httpAdminRoot: '/red',
  httpNodeRoot: '/api',
  userDir: './.node-red/',
  flowFile: 'flows.json',
  functionGlobalContext: {}, // enables global context
  adminAuth: {
    type: 'credentials',
    users: [
      // This is admin user credentials
      {
        username: process.env.NODERED_USERNAME || 'admin',
        password: bcryptjs.hashSync(
          process.env.NODERED_PASSWORD || 'password',
          8,
        ),
        permissions: '*',
      },
    ],
  },
};

export default settings;
