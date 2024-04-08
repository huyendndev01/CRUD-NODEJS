import pool from "../config/connectDB"


let getHomePage = async (req,res) => {

    const [results, fildes] = await pool.execute(
        'SELECT * from users'
    )

    return res.render("test/index.ejs", {dataUser: results})
}

const getDetailPage = async (req, res) => {
    let {id} = req.params;
    let [user, fildes] = await pool.execute('select * from users where `id` = ?', [id])
    res.send(JSON.stringify(user))
}

const postCreateUser = async(req, res) => {
    const {firstName, lastName, email, address} = req.body
    await pool.execute(
        `INSERT INTO users (firstName, lastName, email, address)
        VALUES (?, ?, ?, ?);`, [firstName, lastName, email, address]
    )
    return res.redirect("/")
}

const deleteUser = async (req, res) => {

    let id = req.body.id;
    await pool.execute('DELETE FROM users WHERE id = ?', [id])
    return res.redirect('/')
}

const updateUser = async (req, res) => {

    let userId = req.params.id;
    let [user] = await pool.execute("Select * from users where id = ?", [userId])
    res.render("update.ejs", {dataUser: user[0]})
}

const updatedUser = async (req, res) => {

    const {firstName,lastName,email,address,id} = req.body
    await pool.execute('UPDATE users set firstName = ?, lastName=?, email=?,address=? where id = ?',
    [firstName,lastName,email,address,id])
    res.redirect("/")
}

module.exports = {
    getHomePage,getDetailPage,postCreateUser, deleteUser,updateUser,updatedUser
}