import admin from "../firebase/index.js";

export const authCheck = async(req, res, next) => {
    console.log(req.headers)//token?
    try {

        const firbaseUser = await admin.auth().verifyIdToken(req.headers.authtoken);
        // console.log("🚀 ~ file: auth.js ~ line 8 ~ authCheck ~ firbaseUser", firbaseUser)

        //add in req
        req.user = firbaseUser;
        next();


    } catch (error) {
        console.log("🚀 ~ file: auth.js ~ line 8 ~ authCheck ~ error", error);
        res.status(401).json({ err: "invalid or expoired token" });
    }

};
