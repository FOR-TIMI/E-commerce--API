const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
try{
    // find all tags
    const tags = await Tag.findAll({
   // be sure to include its associated Product data
   include: [
    {
        model: Product,
        through: ProductTag,
        as: 'products'
    }
  ]
  
  })

   if(!tags.length){
     res.status(404).json({message: "There are no Tags yet"});
     return;
   }

   res.json(tags);
  
}
catch(err){
  res.status(500).json({message: "Something went wrong with our server",err})
}
});

router.get('/:id', async(req, res) => {
  try{
    // find all tags
    const tags = await Tag.findOne({

    where : {
      id : req.params.id
    },
   // be sure to include its associated Product data
   include: [
    {
        model: Product,
        through: ProductTag,
        as: 'products'
    }
  ]
  
  })

   if(!tags){
     res.status(404).json({message: "There are no Tags yet"});
     return;
   }

   res.json(tags);
  
}
catch(err){
  res.status(500).json({message: "Something went wrong with our server",err})
}
});

router.post('/', async(req, res) => {
try{
    // create a new tag
    const {tag_name} = req.body
    const tag = await Tag.create({tag_name});
    res.json(tag)
 }
catch(err){
  res.status(500).json({message: "Something went wrong with our server", err})
}

});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
try{
  const {tag_name} = req.body;
  const tag = await Tag.update({tag_name},
    {
    where : {
      id : req.params.id
    }
  })

  if(!tag){
    res.status(404).json({message : "Cannot find that Tag"});
    return;
  }
  
  res.json(tag)
}
catch(err){
  res.status(500).json({message : "Something went wrong with our server", err})
}
});

router.delete('/:id', async(req, res) => {
try{
   // delete on tag by its `id` value
   const tag = await Tag.destroy({
    where : {
     id : req.params.id
    }
  })

  if(!tag){
    res.status(404).json({message : "Could not find that tag"});
    return;
  }

  res.json(tag)
}
catch(err){
  res.status(500).json({message: "Something went wrong with our server"})
}

});

module.exports = router;
