import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { hashPassword, createToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, password, referral } = await req.json();

    if (!name || !email || !phone || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        role: "USER",
      },
    });

    // Create affiliate record with referral code
    const affiliateCode = "ODL" + Math.random().toString(36).substring(2, 8).toUpperCase();
    await prisma.affiliate.create({
      data: {
        userId: user.id,
        code: affiliateCode,
      },
    });

    // Handle referral if provided
    if (referral) {
      const referrer = await prisma.affiliate.findUnique({
        where: { code: referral.toUpperCase() },
      });
      if (referrer) {
        await prisma.affiliate.update({
          where: { id: referrer.id },
          data: { conversions: { increment: 1 } },
        });
      }
    }

    const token = await createToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    const response = NextResponse.json(
      { message: "User registered successfully", user: { id: user.id, name: user.name, email: user.email } },
      { status: 201 }
    );

    response.cookies.set("odlix-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
