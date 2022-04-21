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

/**Implementar metodo propio con relacion a storage */
MovieScheme.statics.findAllData = function (name) {
  const joinData = this.aggregate([
    {
      $lookup : {
        from: "storages", // TODO Movies -> Storage 
        localField: "mediaId", //Donde en la tabla padre Movies el mediaId
        foreignField: "_id", //Storage._id Donde Movies.mediaId = Storage._id
        as: "poster" //Alias de la relacion
      }
    },
    {
      $unwind : "$poster"
    },
  ])
  return joinData;
}


MovieScheme.statics.findOneData = function (id) {
  const joinData = this.aggregate([
    {
      $match : {
        _id: mongoose.Types.ObjectId(id)
      }
    },
    {
      $lookup : {
        from: "storages", // TODO Movies -> Storage 
        localField: "mediaId", //Donde en la tabla padre Movies el mediaId
        foreignField: "_id", //Storage._id Donde Movies.mediaId = Storage._id
        as: "poster" //Alias de la relacion
      }
    },
    {
      $unwind : "$poster"
    },
    
  ])
  return joinData;
}


module.exports = mongoose.model("movies", MovieScheme);

const moviesModel = mongoose.model("movies", MovieScheme);

module.exports = { moviesModel };
