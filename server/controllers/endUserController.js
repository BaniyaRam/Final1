const EndUser = require("../models/end-user");

// Display All ENDUSER Data
const enduser_index = (req, res) => {
	EndUser.find(function (err, endusers) {
		res.json(endusers);
	});
};

// Create New ENDUSER
const enduser_create_post = (req, res) => {
	let enduser = new EndUser(req.body);
	enduser
		.save()
		.then((enduser) => {
			res.send(enduser);
		})
		.catch(function (err) {
			res.status(422).send("EndUser add failed");
		});
};

// Show a particular ENDUSER Detail by Id
const enduser_details = (req, res) => {
	EndUser.findById(req.params.id, function (err, enduser) {
		if (!enduser) {
			res.status(404).send("No result found");
		} else {
			res.json(enduser);
		}
	});
};

// Update ENDUSER Detail by Id
const enduser_update = (req, res) => {
	EndUser.findByIdAndUpdate(req.params.id, req.body)
		.then(function () {
			res.json("EndUser updated");
		})
		.catch(function (err) {
			res.status(422).send("EndUser update failed.");
		});
};

// Delete ENDUSER Detail by Id
const enduser_delete = (req, res) => {
	EndUser.findById(req.params.id, function (err, enduser) {
		if (!enduser) {
			res.status(404).send("EndUser not found");
		} else {
			EndUser.findByIdAndRemove(req.params.id)
				.then(function () {
					res.status(200).json("EndUser deleted");
				})
				.catch(function (err) {
					res.status(400).send("EndUser delete failed.");
				});
		}
	});
};

module.exports = {
	enduser_index,
	enduser_details,
	enduser_create_post,
	enduser_update,
	enduser_delete,
};
