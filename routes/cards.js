const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/:id', (req, res) => {
    
    try {
        let { side } = req.query;
        if (!side){
            side = 'question';
        }
        const username = req.cookies.username;
        const { id } = req.params;
        const text = cards[id][side];
        const hintbase = `./${id}?side=`;
        
        const { hint } = cards[id];
        
        const templateData = {text, hint, side, hintbase, username};
        if (side === 'question'){
            templateData.hintText = 'answer'
        }else {
            templateData.hintText = 'question'
        }
        selected_card = cards[req.params.id];
        if (selected_card === undefined) {
            throw 404;
        }
        res.render('card', templateData);
    }
    catch(err) {
        console.log('caught error ' + err);
        if (err === 404) {
            res.sendStatus(404);
        }
    }
});

router.get('/', (req, res) => {
    const tempID = Math.floor(Math.random() * cards.length)
    res.redirect(`/cards/${tempID}?side=question`)
});
module.exports = router;