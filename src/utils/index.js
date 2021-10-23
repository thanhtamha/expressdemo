const { v4: uuidV4 } = require("uuid");

const uuid = () => {
  let newUUID = uuidV4();
  return newUUID.replace(/-/g, "");
};

const getNewOtp = () => {
  const otpObj = {
    otp: Math.random().toString().substring(2, 8),
    timeout: 5,
    otpTime: Date.now(),
  };

  return otpObj;
};

module.exports = { uuid, getNewOtp };
