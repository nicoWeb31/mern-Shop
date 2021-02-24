import admin from "../firebase/index.js";
import User from "../models/user.js";

export const authCheck = async (req, res, next) => {
    console.log(req.headers); //token?
    try {
        const firbaseUser = await admin
            .auth()
            .verifyIdToken(req.headers.authtoken);
        // console.log("🚀 ~ file: auth.js ~ line 8 ~ authCheck ~ firbaseUser", firbaseUser)

        //add in req
        req.user = firbaseUser;
        next();
    } catch (error) {
        res.status(401).json({ err: "invalid or expoired token" });
    }
};

export const authAdminCheck = async (req, res, next) => {
    const { email } = req.user;

    const adminUser = await User.findOne({ email: email });

    if (adminUser.role !== "admin") {
        return res.status(401).json({ err: "Admin Ressource, access denied" });
    }

    next();
};
