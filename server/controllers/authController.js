const bcrypt = require('bcryptjs')

module.exports={

    registerClient: (req, res) => {
        console.log(req.body)
        const {username, password} = req.body
        const db = req.app.get('db')
        db.findClient(username).then(clients => {
            if(clients.length ===0) {
                const salt = bcrypt.genSalt(12)
                bcrypt.hash(password, salt).then(hash => {
                    db.addClient(username, hash).then(() => {
                        req.session.user = username;
                        res.status(200).json(req.session.user)
                    })
                })
            } else {
                res.status(409).json({error: 'Username Taken'});
            }
        })
        
    },
    loginClient: (req, res) => {

    },
    logoutClient: (req, res) => {

    },
    getClient: (req, res) => {

    }
}