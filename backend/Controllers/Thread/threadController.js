const Thread = require("../../Models/Thread");

const getAllThreads = async (req, res) => {
  try {
    const threads = await Thread.find({});
    return res
      .status(200)
      .json({ success: true, data: threads, total: threads.length });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

const deleteAllThreads = async (req, res) => {
  try {
    const threads = await Thread.deleteMany({});
    return res.status(200).json({
      success: true,
      total: threads.deletedCount,
      message: `Deleted all threads`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error occured" });
  }
};

module.exports = { getAllThreads, deleteAllThreads };
