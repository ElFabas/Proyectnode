const express = require("express");
const cors =require("cors");
const fs= require('fs');



class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.listen();
    }
    
    middlewares(){
        //paginas estaticas
        this.app.use(express.static('public'));
        //agregar cors
        this.app.use(cors());

    }

    listen(){
        /*https.createServer({
            key: fs.readFileSync('cert.key'),
            cert: fs.readFileSync('cert.crt'),
           // passphrase:'1234',
        },*/ 
        this.app.listen(this.port, ()=>{
            console.log('http://127.0.0.1:' + this.port);
        });
        
    }
}
module.exports = Server;
