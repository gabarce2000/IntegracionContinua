const express= require('express');
const routes = express();

routes.get('/servidor',(req, res)=>{
    res.send('Bienvendios a mi servidor');
})
routes.post('/aplicacion',(req, res)=>{
    res.send('Bienvendios a mi aplicacion');
})

routes.listen(3000, (req, res)=>{
    console.log("HELLO WORLD....")
})
module.exports = routes;