import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje,
} from "../controllers/paginasController.js";

import { guardarTestimonial } from "../controllers/testimonialesController.js";

const router = express.Router();

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

router.get("/viajes/:slug", paginaDetalleViaje);

router.get("/testimoniales", paginaTestimoniales);

// Cuando Lleno el form
router.post("/testimoniales", guardarTestimonial);

// router.get("/contacto", (req, res) => {
//   res.send("contacto");
// });

export default router;
