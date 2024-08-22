import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET=async(req)=>{

    const {searchParams}=new URL(req.url)
    const page=searchParams.get("page")
    const POST_PER_PAGE=4

    try {
        const posts= await prisma.Post.findMany(
            {
                take:POST_PER_PAGE,
                skip:POST_PER_PAGE*(page)
            }
        )
        return new NextResponse(JSON.stringify(posts,{status:200}))
        
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message:"Something went wrong!"},{status:500}))
        
    }
}