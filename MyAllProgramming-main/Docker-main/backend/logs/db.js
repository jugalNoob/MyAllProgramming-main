const mongoose = require("mongoose");
let db = "mongodb+srv://jugal786:jugal786@cluster0.sgg8t.mongodb.net/ones?retryWrites=true&w=majority";


mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((result) => {
  console.log("Connected to MongoDB" );
}).catch((err) => {
  console.error("MongoDB connection error:" ,err);
});
