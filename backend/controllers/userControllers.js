const registerUser = async (req, res) => {
  const { name, email, password, course } = req.body;

  res.json({
    name,
    email,
  });
};

module.exports = { registerUser };
