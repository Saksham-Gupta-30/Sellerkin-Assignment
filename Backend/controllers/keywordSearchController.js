const Keyword = require('../mongodb/models/model.js');

const getKeywordSearchVolume = async (req, res) => {
    try {
        const { keyword } = req.query;

        const keywordSearch = await Keyword.find({ keyword: { $regex: keyword, $options: 'i' } });

        res.send(keywordSearch);
    } catch (err) {
        console.log(err);
    }
}

module.exports = getKeywordSearchVolume;