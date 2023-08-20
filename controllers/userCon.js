const { User } = require('../models');

// fix the catches ????

const userControl = {
    getAllUsers(req, res); {
        User.find({})
            .then(dbUserData => res.json(dbUserData));
            .catch(err => res.status(400).json(err))
        console.error('Error Finding All Users');
    
},
getUserById(req, res); {
    User.findById({ _id: params.id })
        .then(dbUserData => res.json(dbUserData));
            .catch (err => res.status(400).json(err));
        console.error('Error Finding User');
        
    },
        createUserById(req, res); {
        User.create(req.body)
            .then(dbUserData => res.json(dbUserData));
            .catch (err => res.status(400).json(err));
    console.error('Error Creating User');
}
updateUserById(req, res); {
    User.findOneAndUpdate(req.params.id, req.body { new: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json(err);
                console.error('Error Updating User');
                return;
            }
            res.json(dbUserData);
        })
    .catch(err => res.status(400).json(err));
}

deleteUserById(req, res); {
    User.findOneAndDelete(req.params.id)
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        }
        .catch (err => res.status(400).json(err);
}


// remember to add friends and remove friends!!!!! 


addFriends(req, res); {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { friends: req.params.friendId } },
        { new: true }
    )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        }
        .catch (err => res.status(400).json(err);
}

removeFriends(req, res); {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
    )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'User is no longer your friend!' });
                return;
            }
            res.json(dbUserData);
        }
    )
    
    module.exports = userControl;
