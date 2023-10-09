const Workshop = require("../models/workshopModel");

// Display All WORKSHOP Data
const workshop_index = (req, res) => {
	Workshop.find(function (err, workshops) {
		res.json(workshops);
	});
};

// Create New WORKSHOP
const workshop_create_post = (req, res) => {
	let workshop = new Workshop(req.body);
	workshop
		.save()
		.then((workshop) => {
			res.send(workshop);
		})
		.catch(function (err) {
			res.status(422).send("Workshop add failed");
		});
};

// Show a particular WORKSHOP Detail by Id
const workshop_details = (req, res) => {
	Workshop.findById(req.params.id, function (err, workshop) {
		if (!workshop) {
			res.status(404).send("No result found");
		} else {
			res.json(workshop);
		}
	});
};

// Update WORKSHOP Detail by Id
const workshop_update = (req, res) => {
	Workshop.findByIdAndUpdate(req.params.id, req.body)
		.then(function () {
			res.json("Workshop updated");
		})
		.catch(function (err) {
			res.status(422).send("Workshop update failed.");
		});
};

// Delete WORKSHOP Detail by Id
const workshop_delete = (req, res) => {
	Workshop.findById(req.params.id, function (err, workshop) {
		if (!workshop) {
			res.status(404).send("Workshop not found");
		} else {
			Workshop.findByIdAndRemove(req.params.id)
				.then(function () {
					res.status(200).json("Workshop deleted");
				})
				.catch(function (err) {
					res.status(400).send("Workshop delete failed.");
				});
		}
	});
};

module.exports = {
	workshop_index,
	workshop_details,
	workshop_create_post,
	workshop_update,
	workshop_delete,
};
