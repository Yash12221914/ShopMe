//const { Result } = require('express-validator');
const mongoose = require('mongoose');

//const mongoURI = 'mongodb+srv://ShoopMe:shopmemern@cluster.hzmk2.mongodb.net/Shopmemern?retryWrites=true&w=majority&appName=Cluster';
const mongoURI = 'mongodb+srv://ShoopMe:shopmemern@cluster.hzmk2.mongodb.net/Shopmemern?retryWrites=true&w=majority&appName=Cluster';

// const mongoDB=()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("Connected");
//     })
// }

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB successfully");
        const fetched_data = await mongoose.connection.db.collection("cloth_items")
        fetched_data.find({}).toArray( function( err,data){
            if(err) console.log(err);
            else {
                global.cloth_items = data;
                console.log(global.cloth_items);
            }

        })
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};

module.exports = mongoDB();