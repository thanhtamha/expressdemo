const getNewOtp = () => {
  const otpObj = {
    otp: Math.random().toString().substring(2, 8),
    timeout: 5,
    otpTime: Date.now(),
  };

  return otpObj;
};

module.exports = { getNewOtp };
