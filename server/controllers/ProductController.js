//get connection 
var connection = require('../db/db-connection');

const addProduct = (req, res) =>{
    console.log('controller is getting called')
    if(!req.file){
        console.log('No files were uploaded')
    }else{
        console.log(req.file.filename)
    }

    connection.query('insert into products (img_name, name, quantity, price, description) values (?,?,?,?,?);', [req.file.filename, req.body.name, req.body.quantity, req.body.price, req.body.description],(err, result)=>{
        if(err){
            console.log("error")
        }else{
            res.status(200).send(result);
            console.log('File Uploaded!')
        }
    })
}


module.exports = {addProduct}