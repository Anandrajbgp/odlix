import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email } = body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ success: true });
  }

  // In production, send actual email with reset link
  return NextResponse.json({ success: true, message: "If this email exists, a reset link has been sent" });
}
