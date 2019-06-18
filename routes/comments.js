const express = require('express')
const router = express.Router()
let Comment = require('../models/comments')

router.route('/')
    .get(function (req, res){
        Comment.find().exec(function (err, results){
            if(err){
                throw err
            }

            res.json(results);
        })
    })
    .post(function (req, res) {
        let commentData = req.body
        let commentObj = new Comment({
            message: commentData.message
        })

        commentObj.save(function (err){
            if (err){
                throw err
            }

            res.status(201)
            res.send(commentObj.toJSON())
        })
    })

    router.route('/:id/comment')
        .get(function (req, res){
            let commentId = req.params.id

            if (!res){
                res.status(404)
                res.send('Recurso no encontrado')
            }

            if (res){
                Comment.findById(commentId).exec(function (err, result){
                    if (err){
                        throw err
                    }

                    res.json(result.toJSON());
                })
            }
        })
        .put(function (req, res){
            let commentId = req.params.id
            let commentData = req.body

            Comment.findById(commentId).exec(function (erro, result){
                if (err) {
                    throw err
                }

                if (!result) {
                    res.status(404)
                    res.send('Recurso no encontrado')
                }

                if (result) {
                    result.user = commentData.user
                    result.date = commentData.date
                    result.message = commentData.message

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