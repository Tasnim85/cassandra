const connectToCassandra = require('./API/Connect.js');
const { createKeyspaceName, updateKeyspaceName, deleteKeyspaceName, displayKeyspaceNames } = require('./API/KeySpace.js');
const cassandra = require('cassandra-driver');

// Replace with your actual configuration
const contactPoints = ['127.0.0.1']; // IP Adress
const port = 9042; // Cassandra port (default)
const localDataCenter = 'datacenter1'; // Replace with actual data center

const client = new cassandra.Client({ contactPoints, port, localDataCenter });

connectToCassandra(client)
//createKeyspaceName(client, "isetRades")
//updateKeyspaceName(client, "isetRades", "bye")
//deleteKeyspaceName(client, "bye")
//displayKeyspaceNames(client)
