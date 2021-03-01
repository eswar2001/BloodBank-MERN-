const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')

router.get('/getdata', (req, res) => {
    User.find().then((data) => { res.json({ data }) })
        .catch((e) => { res.status(422).status({ msg: e }) })
})
router.post('/signup', (req, res) => {
    const { name,
        email,
        contact,
        bloodGroup,
        city,
        DOB,
        state,
        country,
        zip, } = req.body;
    console.log(req.body)
    if (!email || !name || !contact || !bloodGroup || !city || !DOB || !state || !country || !zip) {
        res.status(422).json({ error: "Please add all the fields" })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User already exists with the email" })
            }
            const user = new User({
                name,
                email,
                contact,
                bloodGroup,
                city,
                DOB,
                state,
                country,
                zip,
            })
            user.save()
                .then((user) => {
                    res.status(200).json({ message: user })
                })
                .catch((err) => {
                    res.status(422).json({ error: err })
                })
        })
})
module.exports = router