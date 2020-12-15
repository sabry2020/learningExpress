const express=require('express');
const bodyParser=require('body-parser');

const leaderRouter=express.Router();


leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
    
}).get((req,res,next)=>{
    res.end('Will send all the leaders to you');

})
.post((req,res,next)=>{
    res.end('Will add  '+req.body.name+
    '   with details: '+req.body.description);

})
.put((req,res,next)=>{
    res.statusCode=403//which means operation not supported 
    res.end('PUT operation not suppported on /dishes ');


    
})
.delete((req,res,next)=>{
    res.end('Deleting all the  leaders');

});

leaderRouter.route('/:leaderId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
    
}).get((req,res,next)=>{
    res.end('Will send the leader:'+ req.params.leaderId+'  to you');

})
.post((req,res,next)=>{
    res.end('Will add leader '+req.params.leaderId+'\t with details: '+req.body.description);

})
.put((req,res,next)=>{
    res.statusCode=403//which means operation not supported 
    res.end('PUT operation not suppported on /leaders ');


    
})
.delete((req,res,next)=>{
    res.end('Deleting all the leaders ');

});



module.exports=leaderRouter;