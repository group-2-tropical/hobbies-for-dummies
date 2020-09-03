'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate : {
        isEmail: {
          args: true,
          msg : 'Invalid email format'
        },
        notEmpty:true
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      validate : {
        len : {
          args: [6,15],
          msg : 'password minimum 6 maximum 15 characters'
        }
      },
      notEmpty: true
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};