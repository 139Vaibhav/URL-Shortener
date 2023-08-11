const shortid = require("shortid");
const URL = require("../models/url");

const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Shorten the URL
exports.generateShortUrl = catchAsyncErrors(async (req, res) => {

    const body = req.body;
    if (!body.URL) {
        return res.status(400).json({
            error: "URL is required"
        })
    }
    const shortId = shortid();

    await URL.create({
        shortUrl: shortId,
        longUrl: body.URL,
    });

    return res.status(200).json({ id: shortId });
})

// Redirect it to the original URL

exports.redirectUrl = catchAsyncErrors(async (req, res) => {

    const { shortUrl } = req.params;
    const url = await URL.findOne({ shortUrl });
    console.log("Passed url is ", url);
    if (url) {
        res.status(200).redirect(
            url.longUrl
        )
    }
    else {
        res.status(400).json({
            message: "URL not found"
        });
    }
})

// Get Information about the URL

exports.getInfo = catchAsyncErrors(async (req, res) => {

    const { shortUrl } = req.params;
    const url = await URL.findOne({ shortUrl });
    console.log("Passed url is ", url);
    if (url) {
        res.status(200).json({
            shortUrl: url.shortUrl,
            longUrl: url.longUrl
        })
    }
    else {
        res.status(400).json({
            message: "URL not found"
        });
    }
})

// Update the existing short Url to point to another long Url

exports.updateUrl = catchAsyncErrors(async (req, res) => {

    const { shortUrl } = req.params;
    const longUrl = req.body.URL;

    // console.log("the entered long url is ", longUrl);

    const url = await URL.findOneAndUpdate({ shortUrl }, { longUrl });
    if (url) {
        res.status(200).json({
            shortUrl: url.shortUrl,
            newlongUrl: longUrl
        })
    }
    else {
        res.status(400).json({
            message: "URL not found"
        })
    }

})

// Delete a short url

exports.deleteUrl = catchAsyncErrors(async (req, res) => {

    const { shortUrl } = req.params;

    await URL.findOneAndDelete({ shortUrl });
    res.status(200).json({
        message: "Url Deleted Successfully"
    })
})
