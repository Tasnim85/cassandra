const connectToCassandra = require('./API/Connect.js');

connectToCassandra().then(() => {
  // Perform your desired operations on the connected database
  console.log('Connected to Cassandra database!');
}).catch((error) => {
  console.error('Error connecting to Cassandra database:', error);
});