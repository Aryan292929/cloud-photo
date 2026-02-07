
const userProfile = async (req, res) => {
  
  res.status(200).json({
      success: true,
      message: "Profile fetched",
      profile: req.user,
    });
  
};

export default userProfile