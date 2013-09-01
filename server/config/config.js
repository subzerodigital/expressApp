module.exports = {
  root: require('path').normalize(__dirname + '/..'),
  app: {
    name: 'server'
  },
  port: 3000,
  db: 'mongodb://localhost/users',
  mysql:{
       host: 'localhost',
       user: 'web',
       password: 'password'
  }

};