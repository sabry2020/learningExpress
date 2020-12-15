const express=require('express');
const bodyParser=require('body-parser');

const promotionRouter=express.Router();


promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
    
}).get((req,res,next)=>{
    res.end('Will send all the promotions to you');

})
.post((req,res,next)=>{
    res.end('Will add the promotions'+req.body.name+
    'with details: '+req.body.description);

})
.put((req,res,next)=>{
    res.statusCode=403//which means operation not supported 
    res.end('PUT operation not suppported on /promotions ');


    
})
.delete((req,res,next)=>{
    res.end('Deleting all the promotions ');

});

promotionRouter.route('/:promotionId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
    
}).get((req,res,next)=>{
    res.end('Will send the promotion:'+ req.params.promotionId+'  to you');

})
.post((req,res,next)=>{
    res.end('Will add the promotion'+req.params.promotionId+
    'with details: '+req.body.descriptions);

})
.put((req,res,next)=>{
    res.statusCode=403//which means operation not supported 
    res.end('PUT operation not suppported on /promotions ');


    
})
.delete((req,res,next)=>{
    res.end('Deleting all the promotions');

});



module.exports=promotionRouter;