const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables from .env file


const isAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
            if(decoded.role === 'admin') {
                next();
            } else
            {
                res.status(403).json({ message: 'Forbidden: Requires admin role' });
            }
        } catch (error) {
            res.status(403).json({ message: 'Invalid token' });
        }
    } else{
        res.status(401).json({ message: 'Unauthorized: No token provided' });
    }


  


}


module.exports = isAdmin 