const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js"); // EXPORTED FROM LISTING JS SO HAS TO REQUIRE HERE

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()   //FUNCTION CALL
    .then(() => {
        console.log("connected to DB");

    })
    .catch((err) => {
        console.log(err);

    });

async function main() {      //FUNCTION CREATED HERE
    await mongoose.connect(MONGO_URL);

}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj, owner: "65aab83b05765f378f617c94",


    }));

    await Listing.insertMany(initData.data);
    console.log("data was Initialized");

};

initDB();

