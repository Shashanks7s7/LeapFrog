const PlayerRecords = require("../model/playermodel");
const postData = async (req, res) => {
  const data = req.body;
  const newPlayerRecord = new PlayerRecords(data);

  try {
    await newPlayerRecord.save();
    res.status(200).json({
      message: "message send",
    });
  } catch (e) {
    res.status(404).json({
      message: e.message,
    });
  }
};
const getData = async (req, res) => {
  try {
    const playerList = await PlayerRecords.find();
    res.status(200).json(playerList);
  } catch (e) {
    res.status(404).json({
      message: e.message,
    });
  }
};

module.exports = { postData, getData };
