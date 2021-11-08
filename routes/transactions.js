const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');
const Transaction = require('../models/Transaction');
const auth = require('../middleware/auth');

//@route GET api/car
//@desc get all  car
//@access Private
router.get('/', auth, async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
    //    res.send('get all car ');
});

router.get('/:id', auth, async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
       
        res.json(transaction);
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
router.post('/', [auth], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }

    const {total,user,service,car} = req.body;

    try {
        const newTransaction = new Transaction({total,user,service,car});
        //guardamos la transaccion en la bases
        const transaction = await newTransaction.save();

        res.json(transaction);

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
        let transaction = await Transaction.findById(req.params.id);
        if (!transaction) return res.status(400).json({ msg: 'Car not found' });

        //WARNING: asegurarse que el uyser tenga car
        if (transaction.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'not authorized' });
        }

        //INFO: buscamos el car por id y le seteamos carfields si no existe lo creamos

        await Transaction.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Transaction remove' });

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;