async function createKeyspace(cl, newName) {
    // Create keyspace query
    const query = `CREATE KEYSPACE ${newName} WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};`;

    try {
        await cl.execute(query);
        console.log(`Keyspace "${newName}" created successfully!`);
    } catch (err) {
        console.error(`Error creating keyspace: ${err.message}`);
    }
}

async function useKeyspace(cl, keyname) {
    // Create keyspace query
    const query = `USE ${keyname};`;

    try {
        await cl.execute(query);
        console.log(`Keyspace "${keyname}" is being used successfully!`);
    } catch (err) {
        console.error(`Error using keyspace: ${err.message}`);
    }
}

async function deleteKeyspace(cl, oldName) {
    // Delete keyspace query
    const query = `DROP KEYSPACE ${oldName};`;

    try {
        await cl.execute(query);
        console.log(`Keyspace "${oldName}" successfully deleted!`);
    } catch (err) {
        console.error(`Error deleting keyspace: ${err.message}`);
    }
}

async function updateKeyspace(cl, oldName, newName) {
    // Separate drop and create queries
    const dropQuery = `DROP KEYSPACE ${oldName};`;
    const createQuery = `CREATE KEYSPACE ${newName} WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};`;

    try {
        await cl.execute(dropQuery);
        await cl.execute(createQuery);
        console.log(`Keyspace "${oldName}" successfully renamed to "${newName}"!`);
    } catch (err) {
        console.error(`Error renaming keyspace: ${err.message}`);
    }
}

async function displayKeyspaces(cl) {
    const query = 'SELECT * FROM system_schema.keyspaces;';

    try {
        const result = await cl.execute(query);

        if (result.rows.length > 0) {
            console.log('List of keyspaces:');
            result.rows.forEach(row => {
                console.log(row.keyspace_name);
            });
        } else {
            console.log('No keyspaces found.');
        }
    } catch (err) {
        console.error(`Error retrieving keyspaces: ${err.message}`);
    }
}


module.exports = {
    createKeyspace,
    useKeyspace,
    deleteKeyspace,
    updateKeyspace,
    displayKeyspaces
};
