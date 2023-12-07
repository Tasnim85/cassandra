function connectToCassandra(cl) {
  return cl.connect().then(() => {
    console.log('Connected to Cassandra database!');
  }).catch((error) => {
    console.error('Error connecting to Cassandra database:', error);
  });
}

module.exports = connectToCassandra;
