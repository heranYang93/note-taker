//import fs
//import util
//import unique ID - need to install uuid (npmjs.com uuid)

const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class DatabaseOp {
  readNote() {
    return readFileAsync("db/db.json", "utf-8");
  }

  writeNote(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }

  getNote() {
    return this.readNote().then((note) => {
      let newParsedNote;

      try {
        newParsedNote = [].concat(JSON.parse(note));
      } catch (err) {
        newParsedNote = [];
      }

      return newParsedNote;
    });
  }

  addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("write your message");
    }

    const newNote = { title, text, id: uuidv4() };

    return this.getNote()
      .then((notes) => [...notes, newNote])
      .then((updateNewNote) => this.writeNote(updateNewNote))
      .then(() => newNote);
  }

  deleteNote(id) {
    return this.getNote()
      .then((notes) => notes.filter((noteID) => noteID.id !== id))
      .then((correctNote) => this.writeNote(correctNote));
  }
}

module.exports = new DatabaseOp();
