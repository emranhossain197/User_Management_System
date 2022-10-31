const lib = {}
const Schema = require('../module/index')

lib.create = (req, res) => {
    if (!req.body) {
        res.status(404).send({ error: "your request there are not valid! Please valid request" })
    }

    const user = new Schema({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        job: req.body.job,
        address: req.body.address,
        phone: req.body.phone
    })

    user.save()
        .then(user => {

            res.status(200).send({ message: "user Created Successfully!" })


        })
        .catch(err => {

            res.status(404).send({ error: "your request there are not valid! Please valid request" })
        })
}
lib.findUser = (req, res) => {
    if (req.query.email && req.query.phone) {
        const email = req.query.email;
        const phone = req.query.phone;
        Schema.find({ "phone": phone, "email": email })
            .then(user => {
                console.log(user);
                res.status(200).send({ message: "user Find Successfully!" })

            })
            .catch(() => {
                res.status(500).send({ error: "Error Occurred while retriving user information" })
            })
    } else {
        Schema.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ error: "Error Occurred while retriving user information" })
            })
    }
}

// lib.FindUser = (req, res) => {
//     // if (req.query.id || req.body) {
//     if (req.query.email && req.query.phone) {
//         const email = req.query.email;
//         const phone = req.query.phone;

//         Schema.find({ phone: phone, email: email }, function (err, user) {
//             if (err) {
//                 res.send(err);
//             }
//             console.log(user);
//             res.json(user);

//         })

//             .then(user => {
//                 res.status(200).send({ message: "user Find Successfully!" })

//             })
//             .catch(() => {
//                 res.status(500).send({ error: "Error Occurred while retriving user information" })
//             })
//     } else {
//         Schema.find()
//             .then(user => {
//                 res.send(user)
//             })
//             .catch(err => {
//                 res.status(500).send({ error: "Error Occurred while retriving user information" })
//             })
//     }


// }

lib.FindUser = (req, res) => {
    console.log(req.query);
    if (req.query) {
        const phone = req.query.phone;
        const email = req.query.email;
        Schema.findOne({ email: email, phone: phone })
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
            })
    } 
    // else {
    //     Schema.find()
    //         .then(user => {
    //             res.send(user)
    //         })
    //         .catch(err => {
    //             res.status(500).send({ error: "Error Occurred while retriving user information" })
    //         })
    // }



}

lib.updateUser = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }
    const id = req.params.id;
    Schema.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!` })
            } else {
                res.send(data)
            }
        })
        .catch(() => {
            res.status(500).send({ message: "Error Update user information" })
        })

}

// Delete a user with specified user id in the request
lib.deleteUser = (req, res) => {
    const id = req.body.id;

    Schema.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
            } else {
                res.send({
                    message: "User was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}


module.exports = lib;