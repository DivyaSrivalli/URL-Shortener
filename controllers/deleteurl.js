import {URL} from "../models/index.js"

export const deleteURL=async(req,res,next)=>{
    const {shorturl}=req.params;
    const deleteurl=await URL.findOneAndDelete({shorturl:shorturl});
    if(!deleteurl){
        res.status(404).json({"message":"URL not found"});
    } else {
        res.json({"message":"URL deleted successfully"});
    }
}