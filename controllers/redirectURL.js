import {URL} from "../models/index.js"

export const redirectURL=async(req,res,next)=>{
     const {shorturl}=req.body;
     const longurl=await URL.findOne({shorturl:shorturl});
     if(longurl){
        longurl.clickcount+=1;
        await longurl.save();
        res.json({"longurl":longurl.originalurl});
     } else {
        res.status(404).json({"message":"URL not found"});
     }
}