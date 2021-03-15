import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { config } from '../config/config'

module.exports = (req: Request, res: Response, next: NextFunction ) => {
    
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).json({ error: 'No token provided' });

    const parts: string[] = authHeader.split(' ');

    // Bearer dnasnd82h9en8h2ne21ne912n98ndas
    if (parts.length !== 2)
    return res.status(401).json({ error: 'Token error' });

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).json({ error: 'Token malformatted' });

    jwt.verify(token, config.SECRET, (err, decoded) => {

        if(err)
            return res.status(401).json({ error: 'Token invalid' });

        //req.user = { id: decoded.id };
        console.log('----------------------\n',decoded , '\n----------------------');

        return next();
    })

}

