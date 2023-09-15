import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';
import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config( {path:"./.env"})
import cors from 'cors';
import axios from 'axios';
const router = express();
const MONGO_USERNAME = "Ciczau";
const MONGO_PASSWORD = "Majkelek1234";

    const connectionString = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@wiar.223fven.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });
    const connectionWithDB = await client.connect();
    const db = await connectionWithDB.db();
    const Users = db.collection("users");
    const Orders = db.collection("orders");
    const Questions = db.collection("questions");


    const refreshToken = async(req, res) => {
        try {
            const { refreshToken } = req.body;
            if(!refreshToken) return res.sendStatus(401);
            const user = await Users.findOne({
                refresh_token: refreshToken
            });
            if(!user) return res.sendStatus(403);
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
                if(err) return res.sendStatus(405);
                const userId = user.id;
                const name = user.name;
                const email = user.email;
                const firstName = user.firstName;
                const surName = user.surName;
                const role = user.role;
                const accessToken = jwt.sign({userId, name, email, firstName, surName, role}, process.env.ACCESS_TOKEN_SECRET,{
                    expiresIn: '15s'
                });
                res.json({ accessToken });
            });
        } catch (error) {
            res.json(error);
            console.log(error);
        }
    }
    const verifyToken = (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        console.log(authHeader, token)
        if(token == null) return res.sendStatus(401);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            req.name = decoded.name;
            next();
        })
    }
    const getCaptcha = async(req, res) => {
        const token = req.body;
        await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${"6LeerQYkAAAAAM56hhAPapdppYynOZ2e1FjDgRH0"}&response=${token}`);
        if(res.status(200)){
            res.send("Success")
        }else{ 
            res.send("Robot  ")
        }
    }

    const getUsers = async(req, res) => {
        try {
            const users = await Users.find({}).toArray();
            res.json(users);
        } catch (error) {
            console.log(error);  
        }
    }
    
    const Register = async(req, res) => {
        const { name, email, password, role} = req.body;
        const salt = await bcrypt.genSalt();
        const encryptedPassword = await bcrypt.hash(password, salt);
        const userCheck = await Users.findOne({name: name});
        if(userCheck) return res.status(400).json({msg: "User already registered"});
        const mailCheck = await Users.findOne({email: email});
        if(mailCheck) return res.status(400).json({msg: "Mail already registered"}); 
        try {
            await Users.insertOne({
                name: name,
                email: email,
                password: encryptedPassword,
                role: role,
                firstName: '',
                surName: '',
                refresh_token: ''
            });
            res.json({msg: "Registration Successful"});
        } catch (error) {
            
            console.log(error);
        }
    }
    
    const Login = async(req, res) => {
        try {
            const user = await Users.findOne({name: req.body.name});
            const match = await bcrypt.compare(req.body.password, user.password);
            if(!match) return res.status(400).json({msg: "Wrong Password"});
            
            const userId = user._id;
            const name = user.name;
            const email = user.email;
            const firstName = user.firstName;
            const surName = user.surName;
            const role = user.role;
            const accessToken = jwt.sign({userId, name, email, firstName, surName, role}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            const refreshToken = jwt.sign({userId, name, email, firstName, surName, role}, process.env.REFRESH_TOKEN_SECRET,{
                expiresIn: req.body.remember ? '365d' : '1d'
            });
        
            await Users.updateOne({name: user.name},{
                    $set: {refresh_token: refreshToken}
            });        
            const expire = req.body.remember ? 24 * 60 * 60 * 1000 * 365 : 24 * 60 * 60 * 1000;
            res.json({ accessToken, refreshToken, expire }); 
        } catch (error) {
            res.status(404).json({msg:"User not found"});
            console.log(error)
        }
    }
    
    const changeUser = async(req, res) => {
        try {
            const user = await Users.findOne({
                name: req.body.name
            });
            const userId = user._id;
            await Users.updateOne({_id: userId},{
            $set: {firstName: req.body.firstName, surName: req.body.surName, email: req.body.email}
            });
            res.json({msg: "User changed!"});
        } catch (error) {
            res.status(404).json({msg:"User not found"});
        }
    }

    const changePwd = async(req, res) => {
        try {
            const user = await Users.findOne({
                    name: req.body.name
            });
            const match = await bcrypt.compare(req.body.oldPwd, user.password);
            if(!match) return res.status(400).json({msg: "Wrong password"});
            const userId = user._id;
            const salt = await bcrypt.genSalt();
            const encryptedPassword = await bcrypt.hash(req.body.newPwd, salt);
            await Users.updateOne({_id: userId},{
                $set: { password: encryptedPassword}
            });
            res.json({msg: "User changed!"});
        } catch (error) {
            res.status(404).json({msg:"User not found"});
        }
    }

    const Logout = async(req, res) => {
        try{
            const { refreshToken } = req.body;
            if(!refreshToken) return res.sendStatus(204);
            const user = await Users.findOne({
                    refresh_token: refreshToken
            });

            if(!user) return res.sendStatus(205);
            await Users.updateOne({name: user.name},{
                $set: { refresh_token: "null"}
            });
            
            return res.sendStatus(200);
        }catch(err){
            res.status(404).json({msg: "Logout error"});
            console.log(err);
        }
    }
    /////////////////////////////ORDERS
    const getOrders = async(req, res) => {
        try {
            const orders = await Orders.find().toArray();
            res.json(orders);
        } catch (error) {
            console.log(error);  
        }
    }

    const getUserOrders = async(req, res) => {
        try {
            
            const orders = await Orders.find({
                name: req.body.name
            }).toArray();
            res.json(orders);
        } catch (error) {
            console.log(error);
        }
    }

    const addOrder = async(req,res) => {
        const { user, email, type, text, period, status} = req.body;
        let date = new Date();
        try {
            await Orders.insertOne({
                name: user,
                email: email,
                type: type,
                text: text,
                period: period,
                time: date,
                status: status,
            });
            res.json({msg: "Ordered successfully"});
        } catch (error) {
            console.log(error);
        }
    }

    const getQuestions = async(req, res) => {
        try {
            const questions = await Questions.find().toArray();
            res.json(questions);
        } catch (error) {
            console.log(error);  
        }
    }

    const addQuestion = async(req,res) => {
        const { name, email, text} = req.body;
        try {
            await Questions.insertOne({
                name: name,
                email: email,
                message: text
            });
            res.json({msg: "Ordered successfully"});
        } catch (error) {
            console.log(error);
        }
    }

    router.get('/users', verifyToken, getUsers);
    router.get('/orders', getOrders);
    router.get('/questions', getQuestions);
    router.post('/userOrders', getUserOrders);
    router.post('/orders', addOrder);
    router.post('/users', Register);
    router.post('/questions', addQuestion);
    router.post('/login', Login);
    router.post('/change', changeUser);
    router.post('/changePwd', changePwd);
    router.post('/captcha', getCaptcha);
    router.post('/token', refreshToken);
    router.post('/logout', Logout);
    router.use(cors());
    router.listen(5000, () => {
        console.log('Working');
    })