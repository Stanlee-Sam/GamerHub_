import { Router} from 'express'

const router = Router();

router.post('/register', (req, res) => {
    res.send("Registering new user")
})

export default router