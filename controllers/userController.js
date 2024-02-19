
//logiche
//metodo per creare gli utenti all'interno del db

export const createUser = async (req, res) => {
    try {
    const {name, email, password, } = req.body
    const user = {name, email, password, }
    const result = await mongoClient.db(`${process.env.DB_NAME}`).collection('users').insertOne(user)
} catch (error) {
    res.status(201).json(result)
}
}

export const modUser = async (req, res) => {
    
    try {
        const {name, email, password,} = req.body
        const user = {name, email, password, }
        const result = await mongoClient.db(`${process.env.DB_NAME}`).collection('users').updateOne({_id: new ObjectId(req.params.id)}, {$set: user})
    } catch (error) {
        res.status(201).json(result)
    }
}



export const getUserRole = async (req, res) => {
    try{
        const user = await mongoClient.db(`${process.env.DB_NAME}`).collection('users').findOne({_id: new ObjectId(req.params.id)})
        if(!user) return res.status(404).json({message: "Utente non trovato"})
        res.status(200).json(user)
    } catch(err){
        res.status(404).json({message: err.message})
    }
}

export const getAllUsers = async (req, res) => {
    try{
        const users = await mongoClient.db(`${process.env.DB_NAME}`).collection('users').find().toArray()
        if(!users) return res.status(404).json({message: "Nessun utente"})
        //rimuovo le password in modo che non vengano inviate sul front
        users.map(user => {
            user.password = undefined
        })
        res.status(200).json(users)
    } catch(err){
        res.status(404).json({message: err.message})
    }
}