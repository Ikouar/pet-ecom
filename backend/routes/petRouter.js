const express = require("express");
const router = express.Router();
const {
  createPet,
  updatePet,
  deletePet,
  getPet,
  getPets,
  searchPets,
} = require("../controllers/PetsController");
// const validatePet = require("../middlewares/PetMiddleware/validation");
// const {
//   ensureAuthenticated,
// } = require("../middlewares/Costu");

router.post(
  "/",
  [
    /* ensureAuthenticated , validatePet */
  ],
  createPet
);
router.get("/", getPets);
router.get("/:petId", getPet);
router.put("/:petId", /* ensureAuthenticated , validatePet,*/ updatePet);
router.delete("/:petId", /* ensureAuthenticated ,*/ deletePet);
router.post('/search', searchPets);

module.exports = router;
