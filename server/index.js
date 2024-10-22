import Express from "express";
import {criarTabelas, User} from "./db.js";
import bcryptjs from "bcryptjs"

const app = Express()
app.use(Express.json())
//criarTabelas()

app.post('/registro', async (req, res) =>{
    const{nome,sobrenome,email,senha,dataNascimento, cpf} =req.body
    if(!nome|| !sobrenome|| !email || !senha || !dataNascimento || !cpf){
        res.send('todos os campos devem ser preenchidos')
        return
    }
    const userExiste = await User.findAll({email:email})
    if(userExiste){
        res.send('usuario já existe')
        return
    }
    const senhaCriptografada = bcryptjs.hashSync(senha,10)

    const teste = await User.create({nome, sobrenome, email, senha: senhaCriptografada, dataNascimento, cpf})
    if (userExiste){
        res.send('Este usuario nao existe')
        return
    }

    res.send('ok usuario criado')
})

app.post('/login', (req, res) =>{ 
    const{email,senha} =req.body
    if(!email || !senha){
        res.send('todos os campos devem ser preenchidos')
        return
    }
    res.send('ok usuario logado')
})

app.listen(8000)