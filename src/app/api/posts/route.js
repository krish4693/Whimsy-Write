import prisma from "@/utils/connect"
import { NextResponse } from "next/server"
import { getAuthSession } from "@/utils/auth"

export const GET = async (req) => {
    // console.log("Hello")
    const { searchParams } = new URL(req.url)
    let page = parseInt(searchParams.get("page"), 10)
    let cat = searchParams.get("cat")
    console.log("category", cat)
    // console.log("Page ",page)
    const POST_PER_PAGE = 4

    try {
        if (cat == "" || cat === undefined) {
            const totalPosts = await prisma.Post.count()
            console.log("totalPosts", totalPosts)
            const posts = await prisma.Post.findMany(
                {
                    take: POST_PER_PAGE,
                    skip: POST_PER_PAGE * (page - 1),
                   

                }
            )
            // console.log(posts)
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


export const POST = async (req) => {
    const session = await getAuthSession();
  
    if (!session) {
      return new NextResponse(
        JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
      );
    }
  
    try {
      const body = await req.json();
      const post = await prisma.post.create({
        data: { ...body, userEmail: session.user.email },
      });
  
      return new NextResponse(JSON.stringify(post, { status: 200 }));
    } catch (err) {
      // console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      );
    }
  };
   