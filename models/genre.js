const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 100}
});

// Virtuelles Attribut für die URL des Buches
GenreSchema.virtual("url").get(function () {
  // Wir verwenden keine Pfeilfunktion, da wir das this-Objekt benötigen
  return `/catalog/genre/${this._id}`;
});

// Modell exportieren
module.exports = mongoose.model("Genre", GenreSchema);


// Das Modell sollte einen String-SchemaType namens name haben, um das Genre zu beschreiben.