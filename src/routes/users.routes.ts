import { Router, Request, Response  } from "express";

const userRoute = Router()

userRoute.get('signin', (req: Request, res: Response) => {
    res.send('Login Screen')
});

userRoute.post('signup', (req: Request, res: Response) => {
    //catch values in body
    //validation
    //save in database
    res.send('Create accout Screen')
});


module.exports = userRoute;