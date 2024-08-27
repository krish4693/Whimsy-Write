import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

//GET SINGLE POST
export const GET = async (req,{params}) => {
    // console.log("Hello")
  

    try {
        
            return new NextResponse(JSON.stringify({ posts, totalPosts }, { status: 200 }))

        }
        else{
            const totalPosts = await prisma.Post.count()

            const posts=await prisma.Post.findMany({
                where: {
                    ...(cat && { catSlug: cat }),
                },
            })
            return new NextResponse(JSON.stringify({ posts, totalPosts }, { status: 200 }))

        }

    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }, { status: 500 }))

    }
}