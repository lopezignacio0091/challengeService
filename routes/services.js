const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');
const Service = require('../models/Service');
const auth = require('../middleware/auth');

//@route GET api/car
//@desc get all  car
//@access Private
router.get('/', auth, async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
    //    res.send('get all car ');
});

//@route POST api/service
//@desc add new 
//@access Private
//REMARK: aca se pasan dos middlewares
router.post('/', [auth, [check('cost', 'cost is required').not().isEmpty(),]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {cost,type} = req.body;

    try {
        const newService = new Service({cost,type});
        //guardamos el car en la base
        const service = await newService.save();

        res.json(service);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
});



//@route DELETE api/transaction/:id
//@desc delete transaction 
//@access Private
router.delete('/:id', auth, async (req, res) => {

    try {
        //INFO: de esta forma se puede consutlar los params de la copnsuilta
        let service = await Service.findById(req.params.id);
        if (!service) return res.status(400).json({ msg: 'Service not found' });

       
      

        //INFO: buscamos el car por id y le seteamos carfields si no existe lo creamos

        await Service.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Service remove' });

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;