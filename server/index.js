import Express from "express";

const app = Express()
app.use(Express.json())

app.post('/registro', (req, res) =>{
    const{nome,sobrenome,email,senha,dataNascimento} =req.body
    if(!nome|| !sobrenome|| !email || !senha || !dataNascimento){
        res.send('todos os campos devem ser preenchidos')
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