import { postController } from "../controllers/post.controller.js";
import { Router } from "express";

const router = Router();

router.get("/", postController.read);
router.post("/", postController.create);
router.get("/:id", postController.readById);
router.put("/:id", postController.update);
router.put("/like/:id", postController.updateLike);
router.delete("/:id", postController.remove);
router.all("*", postController.notFound);

export default router;

