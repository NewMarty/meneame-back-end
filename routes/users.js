const express = require('express')
const router = express.Router()
const sha512 = require('js-sha512')
let User = require('../models/users')

router.route('/')
    .get(function (req, res){
        User.find().exec(function (err, results){
            if(err){
                throw err
            }

            res.json(results);
        })
    })
    .post(function (req, res) {
        let userData = req.body
        let userObj = new User({
            name: userData.name,
            email: userData.email,
            password: sha512(userData.password),
            createdAt: userData.createdAt
        })

        userObj.save(function (err){
            if (err){
                throw err
            }

            res.status(201)
            res.send(userObj.toJSON())
        })
    })

    router.route('/:id')
        .get(function (req, res){
            let userId = req.params.id

            if (!res){
                res.status(404)
                res.send('Recurso no encontrado')
            }

            if (res){
                User.findById(userId).exec(function (err, result){
                    if (err){
                        throw err
                    }

                    res.json(result.toJSON());
                })
            }
        })
        .put(function (req, res){
            let userId = req.params.id
            let userData = req.body

            User.findById(userId).exec(function (erro, result){
                if (err) {
                    throw err
                }

                if (!result) {
                    res.status(404)
                    res.send('Recurso no encontrado')
                }

                if (result) {
                    result.name = userData.name
                    result.email = userData.email
                    result.password = sha512(userData.password)
                    result.createdAt = userData.createdAt

                    result.save(function (err) {
                        if (err) {
                            throw err
                        }

                        res.json(result.toJSON())
                    })
                }
            })
        })


        module.exports = router;