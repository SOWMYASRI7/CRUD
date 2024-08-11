const express = require('express')
const router = express.Router()
const Alien = require('../models/student')


router.get('/', async(req,res) => 
{
    try
    {
           const students = await Alien.find()
           res.json(students)
    }
    catch(err)
    {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => 
{
    try
    {
           const student = await Alien.findById(req.params.id)
           res.json(student)
    }

catch(err)
{
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => 
{
    const student = new Alien
   ({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
        rollno: req.body.rollno,
        placement: req.body.placement
    })

    try
   {
        const a1 =  await student.save() 
        res.json(a1)
    }
catch(err)
   {
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> 
{
    try
   {
        const student = await Alien.findById(req.params.id) 
        student.sub = req.body.sub
        const a1 = await student.save()
        res.json(a1)   
    }
catch(err)
   {
        res.send('Error')
    }

})
//////////////
router.put('/students/:id', async (req, res) => {
    try {
        const student = await Alien.findById(req.params.id);
        if (!student) {
            return res.status(404).send('Alien not found');
        }
        // Update all fields
        student.name = req.body.name;
        student.tech = req.body.tech;
        student.sub = req.body.sub;
        student.rollno = req.body.rollno;
        student.placement = req.body.placement;

        const a1 = await student.save();
        res.json(a1);
    } catch (err) {
        res.status(400).send('Error: ' + err);
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const student = await Alien.findById(req.params.id);
        if (!student) {
            return res.status(404).send('Alien not found');
        }
        await student.remove();
        res.json({ message: 'Alien deleted' });
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});



module.exports = router
