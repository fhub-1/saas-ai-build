import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const { name, userId } = await req.json();

  try {
    const user = await prisma.user.create({
      data: {
        clerkId: userId,
        name,
        email: "", // You should fetch this from Clerk
      },
    });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create user" }, { status: 500 });
  }
}