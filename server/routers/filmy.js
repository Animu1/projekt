
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.json([
        {
            tytuł: 'Harry Potter i Komnata Tajemnic',
            premiera: 2002 
        },
        {
            tytuł: 'Gwiezdne wojny: część I  Mroczne widmo',
            premiera: 1999
        },
        {
            tytuł: 'Rambo – Pierwsza krew',
            premiera: 1982
        }
        
    ])
    
});

module.exports = router;