import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET=async()=>{
    try {
        console.log("On top of api fetch")
        const categories= await prisma.Category.findMany()
        console.log(categories)
        return new NextResponse(JSON.stringify(categories,{status:200}))
        
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message:"Something went wrong"},{status:500}))
        
    }
}