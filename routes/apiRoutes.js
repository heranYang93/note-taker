const router = require("express").Router();
const DBClass = require("../db/DBClass");

router.get("/notes", (req, res) => {
  DBClass.getNote()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
  DBClass.addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

router.delete("/notes/:id", (req, res) => {
  const idToBeDeleted = req.params.id.match(/[a-zA-Z0-9-]/g).join("");
  console.log(idToBeDeleted);
  DBClass.deleteNote(idToBeDeleted)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
