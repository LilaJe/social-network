const { User } = require('../models');

const userControl = {
    getAllUsers(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData));
            .catch(err => res.status(400).json(err))
},
    getUserById(req, res) {
        User.findById({ _id: params.id })
            .then(dbUserData => res.json(dbUserData));
            .catch (err => res.status(400).json(err));
    },
    createUserById(req, res) {
        User.create(req.body)
            .then(dbUserData => res.json(dbUserData));
            .catch (err => res.status(400).json(err));
}
updateUserById(req, res) {
    User.findOneAndUpdate(req.params.id, req.body { new: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
    .catch(err => res.status(400).json(err));
}

deleteUserById(req, res) {
    User.findOneAndDelete(req.params.id)
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        }
        .catch (err => res.status(400).json(err));
}
}



