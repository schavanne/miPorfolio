
const controller = {
	home: (req, res) => {
		return res.render("home");
	  },
	about: (req, res) => {
		return res.render("about");
	  }
};

module.exports = controller;