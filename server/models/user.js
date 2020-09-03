'use strict';
const {
  Model
} = require('sequelize');
const { createHash } = require('../helpers/bcrypt')

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
    username: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate : {
        isEmail: {
          args: true,
          msg : 'Email format is not valid'
        },
        notEmpty:true
      },
      unique: true,
    },
    password: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6],
          msg: "Password minimum six character"
        }
      },
      notEmpty: true
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks : {
      beforeCreate(user) {
        user.password = createHash(user.password);
      }
    }
  });
  return User;
};