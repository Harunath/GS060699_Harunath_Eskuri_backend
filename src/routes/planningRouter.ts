import { Router } from "express";
import PlanningController from "../controllers/planningControllers";

const router = Router();

router.get("/", PlanningController.getAllPlanningReport);
router.post("/store", PlanningController.getStorePlanningReport);

export default router;
