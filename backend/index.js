

// const express=require ('express');

// const app=express();

// const port=5000;
// const cors = require('cors');
// const mongoDB=require('./db.js');
// app.use(cors());

// mongoDB();
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:5000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin","X-Requested-With","Content-Type","Accept"
//     );
//     next();
// });

// app.use(express.json());
// app.use('/api', require('./routes/CreateUser.js'));
// app.get('/',(req,res)=>{

//     res.send('Hello world')
// });


// app.use('/create',require('./routes/CreateUser.js'))
// app.use('/create',require('./routes/DisplayData.js'))
// app.listen(port,()=>{
//     console.log("Server is listening on port 5000");
// })


const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const mongoDB = require('./db.js');

app.use(cors()); // Allow CORS

mongoDB(); // Connect to MongoDB

// Use express.json() middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Custom middleware to set headers for CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next()
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/api', require('./routes/CreateUser.js'));

app.use('/api',require('./routes/DisplayData.js'))
app.use('/api', require('./models/routes/OrderData.js'));

app.listen(port, () => {
  console.log('Server is listening on port');
});

