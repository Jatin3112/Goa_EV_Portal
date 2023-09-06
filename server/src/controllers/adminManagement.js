const {db,adminTableName} = require('../config/mysqlConnection')

const tableName = adminTableName

const  adminManagement=  (req, res) => {
    const sql = `SELECT id,email, password,role FROM ${tableName}`;
    db.query(sql, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while fetching data" });
      } else {
        res.send(data);
      }
    }); 
  }

  const adminDelete = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM ${tableName} WHERE id = ${id}`;
    db.query(sql, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while deleting data" });
      } else {
        res.sendStatus(200);
      }
    });
  }

  const adminUpdate = (req, res) => {
    const id = req.params.id;
    const { password, email, role } = req.body;
    const sql = `UPDATE ${tableName} SET email = ?, password = ?, role= ? WHERE id = ${id}`;
    db.query(sql, [email, password,role], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while updating data" });
      } else {
        res.sendStatus(200);
      }
    });
  }

  const addAdmin = (req, res) => {
    // Extract the data from the request body
    const { email, password, role } = req.body;
    const values=[[email,password,role]]
    // Perform any necessary validation or processing
  
    // Create the SQL query to insert the data into the admin_login table
    const query = `INSERT INTO ${tableName} (email, password, role) VALUES ?`;
  
    // Execute the query
    db.query(query,[values], (error, results) => {
      if (error) {
        console.error('Error adding new admin', error);
        res.status(500).json({ message: 'Failed to add new admin' });
      } else {
        res.status(200).json({ message: 'New admin added successfully' });
      }
    });
  }

  module.exports = {adminManagement, adminDelete,adminUpdate,addAdmin}