const generateCode = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

generateCode.get("/get-code", (req, res) => {
  const code = generateCode();
  res.send(`Your verification code is ${code}`);
});
