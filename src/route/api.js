import express from "express"
import ApiController from "../controllers/ApiController"
const router = express.Router()

const initApiRoute = (app) => {

    router.get('/users', ApiController.getAllUser) // method GET -> READ data

    router.post('/post', ApiController.createUser) // method POST -> CREAD data

    router.put('/update/:id', ApiController.updateUser) // method POST -> CREAD data

    router.delete('/delete/:id', ApiController.deleteUser) // method POST -> CREAD data

   
    return app.use("/api/v1/", router)
}

module.exports = initApiRoute