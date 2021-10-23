const express = require("express");
const router = express.Router();

const { Config } = require("../configs");
const { getNewOtp } = require("../utils");

// Model Data
const { v4: uuid } = require("uuid");

router.post("/apiProduct", async (req, res) => {
  const data = req.body;
  const response = {
    isError: false,
    errorMessage: [],
    detail: {
      id: uuid(),
      dtUpdate: new Date(),
    },
  };

  try {
    console.log("Request -> ", data);
    console.log("Response -> ", response);
  } catch (error) {
    console.log("Error -> ", error);
  }

  res.json(response);
});

module.exports = router;
