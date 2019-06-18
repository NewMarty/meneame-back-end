const express = require('express')
const router = express.Router()
let Article = require('../models/articles')

router.route('/')
    .get(function (req, res){
        Article.find().exec(function (err, results){
            if(err){
                throw err
            }

            res.json(results);
        })
    })
    .post(function (req, res) {
        let articleData = req.body
        let articleObj = new Article({
            user: articleData.user,
            title: articleData.title,
            url: articleData.url,
            description: articleData.description,
            comment: articleData.comment,
            vote: articleData.vote
        })

        articleObj.save(function (err){
            if (err){
                throw err
            }

            res.status(201)
            res.send(articleObj.toJSON())
        })
    })

    router.route('/:id')
        .get(function (req, res){
            let articleId = req.params.id

            if (!res){
                res.status(404)
                res.send('Recurso no encontrado')
            }

            if (res){
                Article.findById(articleId).exec(function (err, result){
                    if (err){
                        throw err
                    }

                    res.json(result.toJSON());
                })
            }
        })
        .put(function (req, res){
            let articleId = req.params.id
            let articleData = req.body

            Article.findById(articleId).exec(function (erro, result){
                if (err) {
                    throw err
                }

                if (!result) {
                    res.status(404)
                    res.send('Recurso no encontrado')
                }

                if (result) {
                    result.user = articleData.user
                    result.date = articleData.date
                    result.title = articleData.title
                    result.url = articleData.url
                    result.description = articleData.description
                    result.comment = articleData.comment
                    result.vote = articleData.vote

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