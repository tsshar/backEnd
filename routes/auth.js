const express = require('express');
const router = express.Router(); 
const User = require('../models/User');
const { body, validationResult } = require('express-validator');






// Creating a user using : POST "/api/auth/createuser". Doesn't require Auth
router.post('/createuser',[body('name','Enter valid name').isLength({ min: 3 }), 
body('email', 'Enter valid email').isEmail(),
body('password', 'password must be of length 5 or greater').isLength({ min: 5 }),
 ],  async (req,res)=> {   //req = input , res = output  //post is used instead of get bc get transfer all data in form of link which will vernarable to data
    

    //creating a user - code : from express validator website
   

      // for error validation code: from express validator website
      //it will return errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
   
      try {
        
      
      //check weather if user with same email exists already

    let user = await User.findOne({email: req.body.email});
      if(user){
        return res.status(400).json({error: "Use with this email already exists"})
      }

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
      
    //   .then(user => res.json(user))

    //   .catch(err=> {console.log(err)   //it will log the error
    //   res.json({error : 'Email already registered'})}); //err msg ( and you will work in loop)

    res.json({user});

} catch (error) {
    console.error(error.message);
        
}
})

module.exports = router