const express = require('express')
var validUrl = require('valid-url');

const shortner = require('./db')
const shortid = require('shortid')


const router = express.Router()



router.get('/',(req,res)=>{
    res.status(200).send('no')
    console.log('nono')
})


router.post('/short',async(req,res)=>{
   try {
    if (validUrl.isUri(req.body.url)){
        console.log('Looks like an URI');
    
     let url = new shortner({
        pointing_to: req.body.url,
        url: shortid(),
     })
     let savedTask = await url.save();
     res.status(200).json(url)
     console.log(url)}
     else{
        console.log('not an uri')
        res.status(400).send('not an uri')
     }
   } catch (error) {
        res.status(500).send(error)
        console.log(error)
   }
})

router.get('/short/:id',async(req,res)=>{
    try {
        const url = req.params.id;
        let find = await shortner.findOne({url:url})
        if(find){
            res.set('location', find.pointing_to);

            res.status(301).send()
            console.log(find.pointing_to)

        }
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
})

module.exports = router