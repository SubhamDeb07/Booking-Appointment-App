const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const User = sequelize.define('User',{
 id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
 },
 Name: {
    type: Sequelize.STRING,
    allowNull: false
 },
 Email: {
    type: Sequelize.STRING,
    nique: true,
    allowNull: false
 },
 Phonenumber: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
 }     
})

module.exports = User