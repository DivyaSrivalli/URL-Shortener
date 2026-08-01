import {URL} from "../models/index.js"
export const getURLS=async (req,res,next)=>{
    const geturls=await URL.find();
    res.json({"urls":geturls});
}