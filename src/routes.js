import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Cleyton Santos',
        email: 'cleyton.a.santos@gmail.com',
        password_hash: '123123123'
    });

    res.json(user);
});

export default routes;
