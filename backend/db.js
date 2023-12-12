
require('dotenv').config();
const mongoose = require("mongoose");
const mongoURI =process.env.MONGODB;

// const mongoDB = async()  => {
// await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
//         if(err) console.log("---",err)
//         else {
//           console.log('Database is connected');

//         const fetched_data=await mongoose.connection.db.collection('GoFruits');
//         fetched_data.find({}).toArray(function (err,data){
//                 if(err) console.log(err);
//                 else{
//                 console.log();
//                       }

//                     })

//                     }
// });

// }

//    module.exports=mongoDB;

// async function mongoDB() {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true });
//     console.log('Database is connected');
//     const fetched_data = await mongoose.connection.db.collection('food_items');
//     fetched_data.find({}).toArray(function (err, data) {
//       if (err)
//         console.log(err);
//       else
// global.food_items=data
//      console.log(global.food_items)

//   });
//   } catch (err) {
//     console.log('Error:', err);
//   }
// }

// module.exports = mongoDB;

// const mongoDB = async () => {
//   // try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true }),async (err,result)=>{

//       if(err) console.log("---", err)
//       else{
//         console.log('Database is connected');
//         const fetched_data = await mongoose.connection.db.collection("food_items");
//         fetched_data.find({}).toArray(function (err, data) {
//           if (err) {
//             console.log(err);
//           } else {
//             global.food_items =data
//             console.log(global.food_items);
//           }
//       })}}
//     }

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true });
//     console.log("Database is connected");

//     const fetched_data = mongoose.connection.db.collection("food_items");
//     const data = await fetched_data
//       .find({})
//       .toArray(async function (err, data) {
//         const Category = await mongoose.connection.db.collection("Category");
//         Category.find({}).toArray(function (err, catData) {
//           if (err) {
//             console.log(err);
//           } else {
//             global.food_items = data;
//             global.Category = catData;
//           }
//         });
//       });
//       global.food_items = data;
      
//     }
//    catch (err) {
//     console.log("---", err);
//   }
// };

// module.exports = mongoDB;


const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Database is connected");

    const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();
    const categoryData = await mongoose.connection.db.collection("Category").find({}).toArray();

    global.food_items = fetchedData;
    global.Category = categoryData;

    return { food_items: fetchedData, Category: categoryData };
  } catch (err) {
    console.log("---", err);
    return { error: err };
  }
};

module.exports = mongoDB;
