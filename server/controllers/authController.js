const bcrypt = require('bcryptjs')

module.exports={

    registerClient: (req, res) => {
        console.log(req.body)
        const {name, email, password} = req.body
        const db = req.app.get('db')
        
    },
    loginClient: (req, res) => {

    },
    logoutClient: (req, res) => {

    },
    getClient: (req, res) => {

    }
}