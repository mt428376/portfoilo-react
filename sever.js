const express = require(express);
const mongoose = require("mongoose");
const { threadId } = require("worker_threads");
const app = express();

const PORT = process.env.PORT || 3001;




app.use(express.urlencoded({extended: true }));
app.use(express.json());

Mongoose.connect
(process.env.MONGODB_URI,"mongonb://localhost/mern-starter",
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex: true,
    
})

.then((result) => {
    console.log("Successfully connected to MongoDB");

}).catch((err) => {
    console.log("Error connecting to MongoDB",err);
});

app.get("api/config",(req,res) => {
    res.json({
        success:true,
    });
});

app.listen(PORT, () => {
    console.log('Sever running on http://localhost:${PORT}');

});
