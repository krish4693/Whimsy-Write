import { NextResponse } from "next/server"

export const GET=async()=>{
    try {
        const categories= await prisma.categories.findMany()
        return new NextResponse(JSON.stringify(categories,{status:200}))
        
    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message:"Something went wrong"},{status:500}))
        
    }
}