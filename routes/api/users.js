const router = require('express').Router();
// const {User} = require('../../models');
const userController = require('../../controllers/UserController.js');
// Encriptador
const bcrypt = require('bcryptjs');

// //api/user/
// router.get('/', async(req,res)=>{
//     const user = await User.findAll();
//     // 200 indica que la respuesta fue correcta
//     res.status(200).json(user);
// });

// //api/user/register
// router.post('/register', async(req,res)=>{
//     //Encriptar contraseña. El 10 indica la cantidad de veces que se encripta. Ese es el valor recomendado.
//     req.body.password = bcrypt.hashSync(req.body.password,10);
//     const user = await User.create(req.body);
//     res.status(200).json(user);
// });

router.get('/', userController.listar);
router.post('/register', userController.register);
router.post('/signin', userController.signin);




module.exports = router;

