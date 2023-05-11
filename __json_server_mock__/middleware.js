module.exports = (req, res, next) => {
  console.log(1);
  if (req.method === "POST" && req.path === "/login") {
    console.log(12);
    if (req.body.username === "jack" && req.body.password === "123456") {
      console.log(13);
      return res.this.status(200).json({
        user: {
          token: "123",
        },
      });
    }
  }
};
