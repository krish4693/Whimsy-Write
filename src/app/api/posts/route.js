import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET=async(req)=>{
    console.log("Hello")
    const {searchParams}=new URL(req.url)
    let page=parseInt(searchParams.get("page"),10)~
    console.log("Page ",page)
    const POST_PER_PAGE=4

    try {
        const posts= await prisma.Post.findMany(
            {
                take:POST_PER_PAGE,
                skip:POST_PER_PAGE*(page-1)
            }
        )
        return new NextResponse(JSON.stringify(posts,{status:200}))
        
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message:"Something went wrong!"},{status:500}))
        
    }
}