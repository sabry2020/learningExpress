const express=require('express');
const bodyParser=require('body-parser');

const dishRouter=express.Router();


dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
    
}).get((req,res,next)=>{
    res.end('Will send all the dishes to you');

})
.post((req,res,next)=>{
    res.end('Will add the dish'+req.body.name+
    'with details: '+req.body.description);

})
.put((req,res,next)=>{
    res.statusCode=403//which means operation not supported 
    res.end('PUT operation not suppported on /dishes ');


    
})
.delete((req,res,next)=>{
    res.end('Deleting all the dishes ');

});

dishRouter.route('/:dishId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
    
}).get((req,res,next)=>{
    res.end('Will send the dish:'+ req.params.dishId+'  to you');

})
.post((req,res,next)=>{
    res.end('Will add the dish'+req.params.dishId+
    'with details: '+req.body.name);

})
.put((req,res,next)=>{
    res.statusCode=403//which means operation not supported 
    res.end('PUT operation not suppported on /dishes ');


    
})
.delete((req,res,next)=>{
    res.end('Deleting all the dishes ');

});



module.exports=dishRouter;
