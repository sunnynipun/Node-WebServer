const exp=require('express');
const hbs=require('hbs');
hbs.registerPartials(__dirname+'/views/partials');
var app=exp();
app.set('view engine','hbs');
app.get('/',(req,res)=>{
  res.render('rendom.hbs',{
    title:'Hahaha Title',
    name:'Sunny Nipun Dasu'
  });
})

app.get('/bad',(req,res)=>{
  res.send('<h1>laude</h1>');
})
app.listen(3000);
