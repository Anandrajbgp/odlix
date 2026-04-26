import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function PATCH(req: NextRequest) {
  const token = req.cookies.get("odlix-token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = await verifyToken(token);
  if (!payload) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  const body = await req.json();
  const { name, phone } = body;

  try {
    await prisma.user.update({
      where: { id: payload.userId },
      data: { name, phone },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

