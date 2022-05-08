const express = require('express');
const router = express.Router();
const User = require('../models/usersModel');


//get all users
router.get('/', (req, res) => {
    User.find()
        .then(users => {
            res.json(users);
        }
        ).catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
}
);


//get one user
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            res.json(user);
        }
        ).catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
}
);

//create user
router.post('/', (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar
    });
    user.save()
        .then(() => {
            res.json({
                message: 'User added successfully'
            });
        }
        ).catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
}
);

//update user
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.json({
                message: 'User updated successfully'
            });
        }
        ).catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
}
);


//delete user
router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json({
                message: 'User deleted successfully'
            });
        }
        ).catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
}
);


//get user by username
router.get('/username/:username', (req, res) => {
    User.findOne({ username: req.params.username })
        .then(user => {
            res.json(user);
        }
        ).catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
}
);


//get user by email
router.get('/email/:email', (req, res) => {
    User.findOne({ email: req.params.email })
        .then(user => {
            res.json(user);
        }
        ).catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
}
);

//get user by id
router.get('/id/:id', (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => {
            res.json(user);
        }
        ).catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
}
);



//export router
module.exports = router;