const {
    createPool
} = require('mysql');

const pool = createPool({
    host:"localhost",
    port:"4306",
    user:"root",
    password:"",
    database:"people"
})

//Fetch
pool.query(`select * from ages`, (err, result)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result)
})
//Create
pool.query(`INSERT INTO AGES(name,age) VALUES ('Lea', 24)`, (err, result)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result)
})
//UPDATE
pool.query(`UPDATE ages SET age=15 WHERE name='Diarmid'`, (err, result)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result)
})
//DELETE
pool.query(`DELETE FROM ages WHERE name='Lea'`, (err, result)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result)
})


