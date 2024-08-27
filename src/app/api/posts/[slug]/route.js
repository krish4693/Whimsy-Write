import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

//GET SINGLE POST
export const GET = async (req, { params }) => {
    // console.log("Hello")

    const { slug } = params;
    try {
        const post = await prisma.Post.findUnique({
            where: { slug },
            include:{user:true}
        })
        console.log(post)

        return new NextResponse(JSON.stringify(post, { status: 200 }))

    }

    catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }, { status: 500 }))

    }
}