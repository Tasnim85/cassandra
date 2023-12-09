const connectToCassandra = require('./API/Connect.js');
const { createKeyspace, useKeyspace, updateKeyspace, deleteKeyspace, displayKeyspaces } = require('./API/KeySpace.js');
const { createTable, alterTable, dropTable, truncateTable, describeTable } = require('./API/DDL.js');
const cassandra = require('cassandra-driver');

// Replace with your actual configuration
const contactPoints = ['127.0.0.1']; // IP Adress
const port = 9042; // Cassandra port (default)
const localDataCenter = 'datacenter1'; // Replace with actual data center

const columns = [
    { name: 'id', type: 'UUID' },
    { name: 'nom', type: 'TEXT' },
    { name: 'prenom', type: 'TEXT' },
    { name: 'niveau', type: 'TEXT' },
    { name: 'moyenne', type: 'FLOAT' },
];

const client = new cassandra.Client({ contactPoints, port, localDataCenter });

connectToCassandra(client)
//createKeyspaceName(client, "isetRades")
//updateKeyspaceName(client, "isetRades", "bye")
//deleteKeyspaceName(client, "bye")
displayKeyspaces(client)

//createTable(client, 'hello', columns);
