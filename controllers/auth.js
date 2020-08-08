const express = require('express');
const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'interns'
  });
  exports.view = (req,res) =>{
   console.log(req.body);
   const {employee_id} = req.body;
   db.query('SELECT * FROM member WHERE id = ?' , [employee_id],(error,results) =>{
       if(error){
           console.log(error)
       }else{
           
         res.json(results);
       }
   })
  }
  exports.register = (req,res) => {
    console.log(req.body);
    const {id,ten, ho, lop, msv, sdt, email} = req.body;
    db.query('INSERT INTO member SET ?' , {id : id ,ten: ten, ho:ho ,lop:lop ,msv:msv,sdt:sdt,email:email} ,(error,results) => {
    if(error){
        console.log(error)
    }else{
        console.log(results);
        return res.render('register', {
            message: 'Insert successfull'
        });
    }
    })
    
    }
    exports.update = (req,res) => {
        console.log(req.body);
   const {employee_id} = req.body;
   db.query('SELECT * FROM member WHERE id = ?' , [employee_id],(error,results) =>{
       if(error){
           console.log(error)
       }else{
           
         res.json(results);
       }
   })
    }
    exports.xuli_update = (req,res) => {
        console.log(req.body);
       var param = [
           req.body,
           req.body.id
       ]
       
        db.query('UPDATE member SET ? WHERE id = ?', param ,(error,results) => {
        if(error){
            console.log(error)
        }else{
            console.log(results);
            return res.render('update_thongbao', {
                message: 'Update successfull'
            });
            
        }
        })
        
        }