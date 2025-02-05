const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync=require('../utils/wrapAsync.js');
const {validateReview}=require('../middleware.js');
const isloggedIn = require("../middleware.js");
const {isAuthor}=require("../middleware.js");
const { postreview, deletereview } = require("../controllers/reviews.js");


  

router.post("/",isloggedIn,validateReview, wrapAsync(postreview));

router.post("/:reviewid",isloggedIn,isAuthor,wrapAsync(deletereview))

module.exports=router;