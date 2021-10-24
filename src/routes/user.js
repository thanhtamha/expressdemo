const express = require("express");
const router = express.Router();

const { Config } = require("../configs");
const { getNewOtp } = require("../utils");

// Model Data
const { v4: uuid } = require("uuid");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Sample DAO
// Select -> const dataObj = await prisma['user'].findUnique({ where: { id: userId } });
// Save -> const dataObj = await prisma['user'].create({ data: addData });
// Update -> const dataObj = await prisma['user'].update({where: { id: data.id }, data: updData});
// Delete -> const dataObj = await prisma['user'].delete({ where: { id: dataId } });

// Search ->
// const searchResults = await prisma['user'].findMany({
//   where: query,
//   orderBy: sort,
//   skip: pageSize * (pageNo - 1),
//   take: pageSize,
// });

// Example
// URL -> http://localhost:3001/user/saveUser
// Body -> {
//   "username": "ttha",
//   "password": "123",
//   "fullName": "Ha Thanh Tam",
//   "emailAdd": "hathanhtam.03@gmail.com"
// }

router.post("/saveUser", async (req, res) => {
  const data = req.body;

  try {
    console.log("Request -> ", data);

    let newUser = {
      id: uuid(),
      username: data.username,
      password: data.password,

      fullName: data.fullName,
      emailAdd: data.emailAdd,
      dtUpdate: new Date(),
    };

    const dataObj = await prisma["user"].create({ data: newUser });
    const response = {
      detail: dataObj,
    };

    console.log("Response -> ", response);

    res.json(response);
  } catch (error) {
    console.log("Error -> ", error);
  }
});

router.post("/apiUser", async (req, res) => {
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
