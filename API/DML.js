async function selectItem(cl, table_name, columns) {
    const selectQuery = `
      SELECT ${columns}
      FROM ${table_name};
    `;

    try {
        const result = await cl.execute(selectQuery);
        console.log(`Table "${table_name}" data:`);
        console.table(result.rows);
    } catch (error) {
        console.error(`Error selecting data from table "${table_name}":`, error);
    }
}

async function selectItemInOrder(cl, table_name, columns, column, Order) {
    const selectQuery = `
      SELECT ${columns}
      FROM ${table_name}
      ORDER BY ${column} ${Order};
    `;

    try {
        const result = await cl.execute(selectQuery);
        console.log(`Table "${table_name}" data:`);
        console.table(result.rows);
    } catch (error) {
        console.error(`Error selecting data from table "${table_name}":`, error);
    }
}

async function selectSpecificItem(cl, table_name, columns, item, op, condition) {
    const selectQuery = `
      SELECT ${columns}
      FROM ${table_name}
      WHERE ${item} ${op} ${condition};
    `;

    try {
        const result = await cl.execute(selectQuery);
        console.log(`Table "${table_name}" data:`);
        console.table(result.rows);
    } catch (error) {
        console.error(`Error selecting data from table "${table_name}":`, error);
    }
}

async function selectSpecificItemInOrder(cl, table_name, columns, item, op, condition, column, Order) {
    const selectQuery = `
      SELECT ${columns}
      FROM ${table_name}
      WHERE ${item} ${op} ${condition}
      ORDER BY ${column} ${Order};
    `;

    try {
        const result = await cl.execute(selectQuery);
        console.log(`Table "${table_name}" data:`);
        console.table(result.rows);
    } catch (error) {
        console.error(`Error selecting data from table "${table_name}":`, error);
    }
}

async function insertItem(cl, table_name, columns, data) {
    const insertQuery = `
      INSERT INTO ${table_name} (${columns}) VALUES (${data});
    `;

    try {
        await cl.execute(insertQuery);
        console.log(`Successfully inserted data into table "${table_name}".`);
    } catch (error) {
        console.error(`Error inserting data into table "${table_name}":`, error);
    }
}

async function deleteItem(cl, table_name, columns, op, condition) {
    const insertQuery = `
      DELETE FROM ${table_name} WHERE ${columns} ${op} ${condition};
    `;

    try {
        await cl.execute(insertQuery);
        console.log(`Successfully deleted data from table "${table_name}".`);
    } catch (error) {
        console.error(`Error deleting data from table "${table_name}":`, error);
    }
}

async function displayAverage(cl, table_name, column) {
    const insertQuery = `
    SELECT AVG(${column}) FROM ${table_name};
    `;

    try {
        await cl.execute(insertQuery);
        console.log(`Successfully displayed data from table "${table_name}".`);
    } catch (error) {
        console.error(`Error displaying data from table "${table_name}":`, error);
    }
}

async function displayMax(cl, table_name, column) {
    const insertQuery = `
    SELECT MAX(${column}) FROM ${table_name};
    `;

    try {
        await cl.execute(insertQuery);
        console.log(`Successfully displayed max from table "${table_name}".`);
    } catch (error) {
        console.error(`Error displaying max from table "${table_name}":`, error);
    }
}

async function displayMin(cl, table_name, column) {
    const insertQuery = `
    SELECT MIN(${column}) FROM ${table_name};
    `;

    try {
        await cl.execute(insertQuery);
        console.log(`Successfully displayed min from table "${table_name}".`);
    } catch (error) {
        console.error(`Error displaying min from table "${table_name}":`, error);
    }
}

async function countItems(cl, table_name, columns) {
    const selectQuery = `
      SELECT COUNT(${columns})
      FROM ${table_name};

    `;

    try {
        const result = await cl.execute(selectQuery);
        console.log(`Table "${table_name}" data:`);
        console.table(result.rows);
    } catch (error) {
        console.error(`Error selecting data from table "${table_name}":`, error);
    }
}

async function countSpecificItem(cl, table_name, columns, item, op, condition) {
    const selectQuery = `
      SELECT COUNT(${columns})
      FROM ${table_name}
      WHERE ${item} ${op} ${condition};
    `;

    try {
        const result = await cl.execute(selectQuery);
        console.log(`Table "${table_name}" data:`);
        console.table(result.rows);
    } catch (error) {
        console.error(`Error selecting data from table "${table_name}":`, error);
    }
}

module.exports = {
    selectItem,
    selectItemInOrder,
    selectSpecificItem,
    selectSpecificItemInOrder,
    insertItem,
    deleteItem,
    displayAverage,
    displayMax,
    displayMin,
    countItems,
    countSpecificItem
};
