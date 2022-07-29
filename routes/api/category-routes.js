const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
  const categoryData = await Category.findAll(
   {include: [{model: Category}, {model: Product}]

    });
    res.status(200).json(categoryData);
  }catch(error){
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try{
    const categoryData = await Category.findByPk(req.params.id,
     {include: [{model: Category}, {model: Product}]
  
      });
      res.status(200).json(categoryData);
    }catch(error){
      res.status(500).json(err);
    }
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const categoryData = await Category.create(req.body);
      res.status(200).json(categoryData);
    }catch(error){
      res.status(500).json(err);
    }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try{
    const categoryData = await Category.update(req.body);
      res.status(200).json(categoryData);
    }catch(error){
      res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const categoryData = await Category.destroy({
      where: req.params.id});
      res.status(200).json(categoryData);
    }catch(error){
      res.status(500).json(err);
    }
});

module.exports = router;
