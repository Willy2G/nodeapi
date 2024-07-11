'use strict';
const {
  Model, DataTypes, Sequelize
} = require('sequelize');

const bcrypt = require('bcrypt');
const sequelize = require('../../config/database');
const AppError = require('../../utils/appError');
module.exports = sequelize.define('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  userType: {
    type: DataTypes.ENUM('0', '1', '2'),
    allowNull: false,
    validate: {
      notNull: {
        msg: "userType can't be null"
      },
      notEmpty: {
        msg: "userType can't be empty"
      }
    }
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "firstName can't be null"
      },
      notEmpty: {
        msg: "firstName can't be empty"
      }
    }
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: "lastName can't be null"
      },
      notEmpty: {
        msg: "lastName can't be empty"
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Contrainte d'unicité
    validate: {
      notNull: {
        msg: "email can't be null"
      },
      notEmpty: {
        msg: "email can't be empty"
      },
      isEmail: {
        msg: 'Invalid email id',
    }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        notNull: {
            msg: 'password cannot be null',
        },
        notEmpty: {
            msg: 'password cannot be empty',
        },
    },
  },
  ConfirmPassword: {
    type: DataTypes.VIRTUAL,
    set(value) {
      if (this.password.length < 7) {
          throw new AppError(
              'Password length must be grater than 7',
              400
          );
      }
      if (value === this.password) {
          const hashPassword = bcrypt.hashSync(value, 10);
          this.setDataValue('password', hashPassword);
      } else {
          throw new AppError(
              'Password and confirm password must be the same',
              400
          );
      }
  },
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  deletedAt : {
    type: DataTypes.DATE,
  }
}, {
  paranoid: true,
  freezeTableName: true,
  modelName: 'user'
});