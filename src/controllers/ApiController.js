import pool from "../config/connectDB"
let getAllUser = async (req, res) => {
    //http 
    //404 501 
    //Json
    let [users] = await pool.execute('select * from users')
    return res.status(200).json({
        meg: 'susccess',
        data: users
    })
}

let createUser = async (req, res) => {

    const {firstName, lastName, email, address} = req.body
    if(!firstName || !lastName || !email || !address) {
         res.status(200).json({
            meg: "required body"
    })
    }
    
    await pool.execute(
        `INSERT INTO users (firstName, lastName, email, address)
        VALUES (?, ?, ?, ?);`, [firstName, lastName, email, address]
    )

    return res.status(200).json({
        meg: "ok"
    })

}

let deleteUser = async (req, res) => {
    let id = req.params.id;
    if(!id) {
        return res.status(404).json({
            meg: "Not ok"
        })
    }
    await pool.execute('DELETE FROM users WHERE id = ?', [id])

    return res.status(200).json({
        meg: "Ok"
    })
}

let updateUser = async(req,res) => {
    const {firstName, lastName, email, address} = req.body
    const id = req.params.id
    if(!firstName || !lastName || !email || !address || !id) {
         res.status(200).json({
            meg: "required body"
    })
    }

    await pool.execute('UPDATE users set firstName = ?, lastName=?, email=?,address=? where id = ?',
    [firstName,lastName,email,address,id]);

    return res.status(200).json({
        meg: "o so ke"
    })
}

module.exports = {
    getAllUser,createUser,deleteUser,updateUser
}