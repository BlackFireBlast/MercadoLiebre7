const express= require('express');
const app= express();

app.use('/static',express.static(__dirname+'/public'));


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/home.html');
});


app.get('/terminado',(req,res)=>{
    res.sendFile(__dirname+'/views/home.html');
});


app.get('/Register',(req,res)=>{
    res.sendFile(__dirname+'/views/register.html');
});

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/views/login.html');
});

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Servidor funcionando en puerto:"+ PORT);
});
