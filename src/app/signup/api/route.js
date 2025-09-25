const { connectDB } = require("@/lib/connectDB");
import bcrypt from "bcrypt";


export const POST = async (request) => {

    const newUser = await request.json();

    try {
        const db = await connectDB();
        const userCollection = db.collection("users");
        const exist = await userCollection.findOne({ email: newUser.email });
        if (exist) {
            return Response.json({ message: "This email already exist" });
        }
        const hashedPass = bcrypt.hashSync(newUser.password, 14);
        const result = await userCollection.insertOne({ ...newUser, password: hashedPass });
        return Response.json(result);

    } catch (error) {
        return Response.json({ message: "Error from user posting route" });
    }

}