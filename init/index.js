const mongoose = require("mongoose");
const InData = require("./data.js")
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("Connect To DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL)
}

const initDB = async() => {
  await Listing.deleteMany({});
  InData.data = InData.data.map((obj) => ({...obj , owner : "6766c289811f1af273c0bff4"}));
  await Listing.insertMany(InData.data);
  console.log("Delte was initilized");
};

initDB();