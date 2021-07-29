const Puppy = require('../../models/Puppy')

module.exports = {
    create,
    index,
    show
}

async function create(req,res) {
    const puppy = await Puppy.create(req.body);
    res.status(201).json(puppy);
}

async function index(req, res) {
	const puppies = await Puppy.find({});
	res.json(puppies);
}

async function show(req,res){
    const puppy = await Puppy.findById(req.params.id)
    res.json(puppy)
}