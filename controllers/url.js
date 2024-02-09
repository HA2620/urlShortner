const ShortUniqueId = require('short-unique-id');
const { randomUUID } = new ShortUniqueId({ length: 8 });

const URL = require("../models/url")


async function generateNewShortUrl(req, res) {

    const body = req.body;
    if (!body.url)
        return res.status(400).json({
            error: "No URL Entered | Bad request"
        });

    const shortID = randomUUID();
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
    })
    return res.json({
        id: shortID
    });
}

module.exports = {
    generateNewShortUrl
}