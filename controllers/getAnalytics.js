const URL = require("../models/url")

async function getAnalytics(req, res) {

    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });

    return res.json({
        totalCLicks: result.visitHistory.length,
        analytic: result.visitHistory });

}

module.exports = {getAnalytics};
