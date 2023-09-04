import { Router } from "express";
import { PruebaController } from "../../app/Http/Controllers/PruebaController";

const obj = new PruebaController();
const router = Router();

router.get("/notification", obj.getEvent);


export default router;
