    import UserService from './UserService.js'

class UserController {
    async create(req, res) {
        console.log(req)
        try {
            const user = await UserService.create(req.body)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            const users = await UserService.getAll()
            console.log(typeof users[0]._id)
            res.json(users)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getOne(req, res) {
        try {
            const user = await UserService.getOne(req.params.id)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async update(req, res) {
        try {
            const updatedUser = await UserService.update(req.body)
            return res.json(updatedUser)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const user = await UserService.delete(req.params.id)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new UserController()