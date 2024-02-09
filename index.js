const express = require('express');
const urlRoute = require('./routes/url')
const { connectToMongoDB } = require("./connect")
const URL = require("./models/url");

const app = express();
const PORT = 3000;

connectToMongoDB('mongodb://localhost:27017/url-shortner').then(() => {
    console.log("Connected to MongoDB");
});

app.use(express.json());
app.use("/", urlRoute);

app.get("/:shortId", async function (req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({ shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                }
            }
        });

    res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => {

    console.log(`Running on port 3000`);
})
