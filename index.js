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
//createKeyspace(client, "isetRades")
//updateKeyspace(client, "isetRades", "bye")
//deleteKeyspace(client, "bye")
//displayKeyspaces(client)
useKeyspace(client, "isetRades")
//createTable(client, "etudiant", columns);
//describeTable(client, "etudiant")
dropTable(client, "etudiant")