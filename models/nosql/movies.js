const mongoose = require("mongoose");

const MovieScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    summary: {
      type: String,
    },
    genre: {
      type: String,
    },
    poster: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
      },
    },
    director: {
      type: String,
    },
    date_release: {
      type: String,
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true, //TODO: createdAt, updatedAt
    versionKey: false,
  }
);

module.exports = mongoose.model("movies", MovieScheme);

const moviesModel = mongoose.model("movies", MovieScheme);

module.exports = { moviesModel };
