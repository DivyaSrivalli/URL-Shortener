import mongoose from "mongoose";
import {Schema,model} from "mongoose";

const urlSchema=new Schema({
    originalurl:{
        type:String,
        required:true
    },
    shorturl:{
        type:String,
        required:true
    },
    clickcount:{
        type:Number,
        default:0
    }

},{
    timestamps:true
})
const URL=model("url",urlSchema);
export {URL};