import User from "../models/user.js";

export const createOrUpdateUser = async (req, res) => {
    console.log(req.user);
    const { name, picture, email } = req.user;
    const user = await User.findOneAndUpdate(
        { email },
        { name, picture },
        { new: true }
    );

    if (user) {
        res.status(200).json({
            status: "success",
            message: "user updated successfully",
            user,
        });
    } else {
        const newUser = await User.create({ email, name, picture });
        res.status(201).json({
            status: "success",
            message: "user create successfully",
            user: newUser,
        });
    }
};

export const currentUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user.email });

        res.status(200).json({
            status: "success",
            user,
        });
    } catch (error) {
        console.log(error)
    }
};
