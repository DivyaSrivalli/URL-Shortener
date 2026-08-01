import { nanoid } from "nanoid";
import {URL} from "../models/index.js"

export const urlController=async (req,res,next)=>{
    const {longurl}=req.body;
    if(await URL.findOne({originalurl:longurl})){
        res.status(400).json({"message":"url already exists"});
    }
    const shorturl=await nanoid(6);
    const newURL=await URL.create(
        {
            originalurl:longurl,
            shorturl:shorturl
        }
    )
    res.json({"message":"url created successfully","shorturl":newURL.shorturl})
}
