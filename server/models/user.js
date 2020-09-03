'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt')
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
    email:{
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Email is not valid"
        }
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
        user.password = bcrypt.hashSync(user.password, 10);
      }
    }
  });
  return User;
};