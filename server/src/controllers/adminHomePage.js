const {db,userTableName} = require("../config/mysqlConnection");

const tableName = userTableName;

const status = (req,res) => {
    
    const sql = `select status from ${tableName}`

    db.query(sql, (err,data) => {
        if(err){
            res.status(404).send("Not Found")
        }

        res.send(data)
    })
}

module.exports = {status}