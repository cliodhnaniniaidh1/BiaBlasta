const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema({
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Recipe",
  },
});

const Favourite = mongoose.model("Favourites", favouriteSchema);

module.exports = Favourite;