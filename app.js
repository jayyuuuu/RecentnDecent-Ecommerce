if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();

}




const express= require('express');
const app = express();
const mongoose = require ('mongoose');
const path = require('path');
const seedDB = require('./seed');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');

// razorpay
// const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const Razorpay = require("razorpay");



const instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});


// Razor middlewere
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());






//Routes
const productRoutes = require('./routes/product');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');


mongoose.connect(process.env.DB_URL,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(()=>{
      console.log("DB Connected");
    })
    .catch((err)=> {
        console.log("OH NOO ERROR!!!");
        console.log(err);
    })

// seedDB();



app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
app.set('views',path.join(__dirname,'./views'))

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

const sessionConfig = {
    secret: 'weneedsomebettersecret',
    resave: false,
    saveUninitialized: true
}

app.use(session(sessionConfig));
app.use(flash());

// Initilising the passport and sessions for storing the users info 
app.use(passport.initialize());
app.use(passport.session());


//Configuring the passport to use local strategy
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
})

app.get('/', (req, res) => {
    
    res.render('home');
})

app.get('/contact', (req, res) => {
    
  res.render('products/contact.ejs');
})



app.use(productRoutes);
app.use(cartRoutes);
app.use(authRoutes);

//Razorrouts
app.get("/cart/payment", (req, res) => {
    res.render('payment/payment', { key: process.env.KEY_ID });
  });
  app.post("/api/payment/order", (req, res) => {
    params = req.body;
    instance.orders
      .create(params)
      .then((data) => {
        res.send({ sub: data, status: "success" });
      })
      .catch((error) => {
        res.send({ sub: error, status: "failed" });
      });
  });
  
  app.post("/api/payment/verify", (req, res) => {
    body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
  
    var expectedSignature = crypto
      .createHmac("sha256", process.env.KEY_SECRET)
      .update(body.toString())
      .digest("hex");
    console.log("sig" + req.body.razorpay_signature);
    console.log("sig" + expectedSignature);
    var response = { status: "failure" };
    if (expectedSignature === req.body.razorpay_signature)
      response = { status: "success" };
    res.send(response);
  });










app.listen(process.env.PORT || 3000, ()=>{
    console.log("server running at port 3000");
})