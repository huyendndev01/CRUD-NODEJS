import express from "express"
import homeController from "../controllers/homeController"
const router = express.Router()

const initWebRoute = (app) => {

    router.get("/", homeController.getHomePage)

    router.get("/abc" , (req, res) => {
        res.render('home.ejs')
    })

    router.get("/detail/user/:id", homeController.getDetailPage )

    router.post('/create-user', homeController.postCreateUser)

    router.post("/delete-user", homeController.deleteUser)

    router.get("/update-user/:id", homeController.updateUser)

    router.post('/updated', homeController.updatedUser)

    return app.use("/", router)
}

module.exports = initWebRoute