const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  try{
  // find all categories
  const categories = await Category.findAll({  
    // be sure to include its associated Products
    include: [
    {
        model: Product,
    }
   ]
  })
  
  if(!categories){
    res.status(400).json({message: 'No Categories yet'})
    return;
  }
  
   res.json(categories);
  }
  catch(err){
    res.status(500).json({message: 'Something went wrong', err})
  }

});

router.get('/:id', async (req, res) => {

  try{
        // find one category by its `id` value
    const category = await Category.findOne({
      where: {
        id : req.params.id
      },
      include: [
      {
        model : Product,
      }
      ]
    
    })

    if(!category){
      res.status(404).json({message: 'Cannot find that category'})
      return;
    }

    // be sure to include its associated Products
    res.json(category)

    }

  catch(err){
      res.status(500).json({message: 'Something went wrong', err})
  }

});

router.post('/', async(req, res) => {
  try{
    
  const {category_name} = req.body
  // create a new category
  const category = await Category.create({category_name})
  //To return new category
  res.json(category)
  }
  catch(err){
    res.status(500).json({message: 'Could not create that category',err})
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try{
   const {category_name} = req.body
   const newCategory = await Category.update(
      {category_name},
      {
     where: {
        id : req.params.id
        }
      }
    )

   if(!newCategory){
      res.status(404).json({message: 'Cannot find that category'});
      return
   }
  
   res.json(newCategory);

    }
    catch(err){
      res.status(500).json({message : 'Something went wrong', err})
    }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try{
    const category = await Category.destroy({
      where: {
        id : req.params.id
      }
    })

    if(!category){
    res.status(404).json({message: "Category not found"})
    return;
    }

    res.json(category)
  }
  catch(err){
    res.status(500).json({message: "Something went wrong", err})
  }

});

module.exports = router;
