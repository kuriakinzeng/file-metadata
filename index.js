'use strict'
const app = require('express')();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' })

app.set('view engine', 'pug');

app.get('/',function(req,res){
   res.render('index',{});
});

app.post('/',upload.single('file'), function(req,res,next){
  res.json({size:req.file.size});
});

app.listen(process.env.PORT || 8080, ()=>{
  console.log('Be listening')
});