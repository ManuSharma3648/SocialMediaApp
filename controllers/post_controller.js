module.exports.post = function (req, res) {
  return res.render("posts", {
    title: "posts Title",
  });
};
