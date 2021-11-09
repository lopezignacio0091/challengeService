const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');
const Car = require('../models/Car');
const auth = require('../middleware/auth');

//@route GET api/car
//@desc get all  car
//@access Private
router.get('/', auth, async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
    //    res.send('get all car ');
});

//@route POST api/car
//@desc add new 
//@access Private
//REMARK: aca se pasan dos middlewares
router.post('/', [auth, [check('name', 'name is required').not().isEmpty(),]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, type, patent, colour, year,user,brand } = req.body;

    try {
        const newCar = new Car({ name, type, patent, colour, year,user,brand });

        //guardamos el car en la base
        const car = await newCar.save();

        res.json(car);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
});

//@route PUT api/car/:id
//@desc update car 
//@access Private
router.put('/:id', auth, async (req, res) => {
    const { name, type } = req.body;

    // build car object
    const carFields = {};
    if (name) carFields.name = name;
    if (type) carFields.type = type;

    try {
        //INFO: de esta forma se puede consutlar los params de la copnsuilta
        let car = await Car.findById(req.params.id);
        if (!car) return res.status(400).json({ msg: 'Car not found' });

        //WARNING: asegurarse que el uyser tenga car
        if (car.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'not authorized' });
        }

        //INFO: buscamos el car por id y le seteamos carfields si no existe lo creamos
        car = await Car.findByIdAndUpdate(req.params.id, { $set: carFields }, { new: true });

        res.json(car);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }

});

//@route DELETE api/car/:id
//@desc delete car 
//@access Private
router.delete('/:id', auth, async (req, res) => {

    try {
        //INFO: de esta forma se puede consutlar los params de la copnsuilta
        let car = await Car.findById(req.params.id);
        if (!car) return res.status(400).json({ msg: 'Car not found' });

        //WARNING: asegurarse que el uyser tenga car
       

        //INFO: buscamos el car por id y le seteamos carfields si no existe lo creamos

        await Car.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Car remove' });

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;