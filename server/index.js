const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const db = require('./mysql.js')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'mySecretKey', resave: false, saveUninitialized: false }));


// Configurar CORS
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(cookieParser('keyboard')); 

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('epa')
});


/////////////////////////////////////////////////////////////// 

// Rutas de tu aplicación
app.post('/register', (req, res) => {
    const username = req.body.username;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const termAndCondition = req.body.termAndCondition;

    const query = "INSERT INTO account (`username`, `lastname`, `email`, `phone`, `password`, `termAndCondition`) VALUES (?, ?, ?, ?, ?, ?)";
    const query2 = "SELECT * FROM account WHERE email = ?";

    const values = [username, lastname, email, phone, password, termAndCondition];

    db.query(query2, [email], (err, result) => {
        if (err) { 
            throw err; 
}
        if (result.length > 0) {
            res.send({ message: "email already exists" });
        }
        if(result.length === 0){
            const hashedPassword = bcrypt.hashSync(password, 10);
            db.query(query, [username, lastname, email, phone, hashedPassword, termAndCondition], (err, result) => {
                if (err){throw err;}
                res.send({message: "User created"});
            });
        }
    });
});

const PORT = 3001;
app.listen(3001, () => {
    console.log('Server started on port 3001')
})