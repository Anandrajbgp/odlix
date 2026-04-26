import { NextRequest, NextResponse } from "next/server";
import { verifyToken, verifyPassword, hashPassword } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const token = req.cookies.get("odlix-token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = await verifyToken(token);
  if (!payload) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const body = await req.json();
  const { currentPassword, newPassword } = body;

  const user = await prisma.user.findUnique({ where: { id: payload.userId } });
  if (!user || !user.password) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const valid = await verifyPassword(currentPassword, user.password);
  if (!valid) {
    return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 });
  }

  const hashed = await hashPassword(newPassword);
  await prisma.user.update({
    where: { id: payload.userId },
    data: { password: hashed },
  });

  return NextResponse.json({ success: true });
}

