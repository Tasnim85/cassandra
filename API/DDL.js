async function createTable(cl, table_name, columns) {
    const columnDefinitions = columns.map(column => `${column.name} ${column.type}`).join(', ');

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS ${table_name} (
        ${columnDefinitions},
        PRIMARY KEY (${columns[0].name})
      );
    `;

    try {
        await cl.execute(createTableQuery);
        console.log(`Table "${table_name}" created successfully.`);
    } catch (error) {
        console.error(`Error creating table "${table_name}":`, error);
    }
}

async function alterTable(cl, table_name, column_name, column_type) {
    const alterTableQuery = `
    ALTER TABLE ${table_name}
    ADD ${column_name} ${column_type};
  `;

    try {
        await cl.execute(alterTableQuery);
        console.log('Table "', table_name, '" altered successfully.');
    } catch (error) {
        console.error('Error altering table:', error);
    }
}

async function dropTable(cl, table_name) {
    const dropTableQuery = `DROP TABLE IF EXISTS ${table_name};`;

    try {
        await cl.execute(dropTableQuery);
        console.log('Table "', table_name, '" dropped successfully.');
    } catch (error) {
        console.error('Error dropping table:', error);
    }
}

async function truncateTable(cl, table_name) {
    const truncateTableQuery = `TRUNCATE ${table_name};`;

    try {
        await cl.execute(truncateTableQuery);
        console.log('Table "', table_name, '" truncated successfully.');
    } catch (error) {
        console.error('Error truncating table:', error);
    }
}

async function describeTable(cl, table_name) {
    const describeTableQuery = `DESCRIBE TABLE ${table_name};`;

    try {
        const result = await cl.execute(describeTableQuery);
        console.log('Table description:', result.rows);
    } catch (error) {
        console.error('Error describing table:', error);
    }
}

module.exports = {
    createTable,
    alterTable,
    dropTable,
    truncateTable,
    describeTable,
};
