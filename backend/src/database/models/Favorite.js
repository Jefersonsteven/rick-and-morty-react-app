const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      id_api: {
         type: DataTypes.INTEGER,
         unique: true
      },
      name: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false
      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "unknown"),
         defaultValue: "Alive"
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false
      },
      gender: {
         type: DataTypes.ENUM("unknown", "Genderless", "Male", "Female"),
         allowNull: false
      },
      origin: {
         type: DataTypes.JSON,
         allowNull: false
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            isUrl: true
         }
      }
   }, { timestamps: false });
};
