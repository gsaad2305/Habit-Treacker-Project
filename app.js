const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

const path = require('path')
const PORT = 3000

const app = express();

let name = 'admin';
let password =  '123456';

app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:'121aa213121'}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, '/public')))
app.set( 'views', path.join(__dirname, '/frontend'));

app.post('/', (req,res)=>{
    if(req.body.password == password && req.body.name == name){
        req.session.name = name
        res.render('task', {name:name});
    }else{
        res.render('index')
    }
})
app.get('/',(req,res)=>{
    if(req.session.name){
        res.render('task', {name:name})
    }else{
        res.render('index')
    }
})

app.listen(PORT, () => {
    console.log(`O servidor está rodando em:  http://localhost:${PORT}`);
  });
  