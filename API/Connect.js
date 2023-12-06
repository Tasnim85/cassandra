const cassandra = require('cassandra-driver');

// Replace with your actual configuration
const contactPoints = ['292b57e81cda6c86294a9a6c6f4eb9b69eb02e47979a2386502defafedc6ce80']; // Container reference
const port = 9042; // Cassandra port (default)
const localDataCenter = 'datacenter1'; // Replace with actual data center
const keyspace = 'IsetRades'; // Replace with your keyspace

const client = new cassandra.Client({ contactPoints, port, localDataCenter });

function connectToCassandra() {
  return client.connect().then(() => {
    console.log('Connected to Cassandra database!');
  }).catch((error) => {
    console.error('Error connecting to Cassandra database:', error);
  });
}

module.exports = connectToCassandra;
