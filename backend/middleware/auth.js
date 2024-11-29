import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    const {token} =  req.headers;

    if (!token) {
        return res.json({success : false, message : "Not authorized. Login again."});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.body.userId = decoded.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success : false, message : error.message, here : "Hea ekhan thekei"})
    }
}


export default authUser;
