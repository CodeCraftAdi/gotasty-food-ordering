// src/app/utils/authUtils.js
import { getServerSession } from "next-auth";
import { UserInfo } from "@/app/models/UserInfo";
import { authOptions } from "@/app/libs/authOptions"; // Update import

export async function isAdmin() {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;
    if (!userEmail) return false;

    const userInfo = await UserInfo.findOne({ email: userEmail });
    return userInfo?.admin || false;
}