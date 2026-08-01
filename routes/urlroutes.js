import express from "express";
import {urlController} from "../controllers/urlcontroller.js";
import {getURLS} from "../controllers/geturls.js";
import {redirectURL} from "../controllers/redirectURL.js";
import {deleteURL} from "../controllers/deleteurl.js";

const router=express.Router();

router.post('/create',urlController);

router.get('/getall',getURLS);

router.post('/geturl',redirectURL);

router.delete('/deleteurl/:shorturl',deleteURL);
export default router ;