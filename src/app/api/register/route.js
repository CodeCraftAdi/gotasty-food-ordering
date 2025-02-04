import { User } from "@/app/models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGO_URL);
    }
};

export async function POST(req) {
    try {
        const body = await req.json();
        await connectDB();  // Ensure MongoDB is connected
        const pass = body.password;
        if (!pass?.length || pass.length < 5) {
            new Error('password must be at least 5 characters');
        }

        const notHashedPassword = pass;
        const salt = bcrypt.genSaltSync(10);
        body.password = bcrypt.hashSync(notHashedPassword, salt);

        const createdUser = await User.create(body);
        return Response.json(createdUser);
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
