var Sequelize=require('sequelize');
var Db=require('./bassDb.js');
var User=Db.define('users',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        unique:true,
        allowNull:false,
        type:Sequelize.INTEGER
    },
    username:{
        allowNull:false,
        type:Sequelize.STRING
    },
    password:{
        allowNull:false,
        type:Sequelize.STRING
    },
    nickname:{
        allowNull:false,
        type:Sequelize.STRING
    }
});
module.exports=User;