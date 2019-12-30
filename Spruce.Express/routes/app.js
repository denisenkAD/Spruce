const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET cities page. */
router.get('/cities', (req, res) => {
   var cities = [ 
       { "name": "Minsk", "id": "minsk"}, 
  	   { "name": "San Francisco", "id": "sanfrancisco" }
  	];

    res.render('cities', 
  			{ "cities": cities}
  	);
});

router.get('/museums', (req, res) => {
    res.render('museums', 
        { "museums": [ 
           { "name": "National historic museums", "id": "byhist"}, 
           { "name": "Art gallery 1", "id": "byart1" },
           { "name": "Contemporary art", "id": "bycontemp" },
           { "name": "Design space", "id": "bydesign" }
          ]
        }
    );
});


router.get('/items', (req, res) => {
    res.render('items', 
        { "items": [ 
           { "name": "Shocking news", "id": "shock", "url":"https://miami2019.designmiami.com/images/content/channels/_JRH5464_SEGUIN_2_PS_HiRes_edited.jpg"}, 
           { "name": "Design Miami parts", "id": "miamiparts1", "url":"https://miami2019.designmiami.com/images/content/channels/_JRH4475_PEOPLE_5_PS_LoRes.jpg" },
           { "name": "Best shows design", "id": "bestshows", "url":"https://miami2019.designmiami.com/images/content/channels/_JRH6141_CARPENTERS_1_PS_hires.jpg" },
           { "name": "Design space Miami", "id": "designmiami", "url":"https://miami2019.designmiami.com/images/content/channels/_JRH4448_PEOPLE_5_PS_LoRes.jpg" }
          ]
        }
    );
});

module.exports = router;
