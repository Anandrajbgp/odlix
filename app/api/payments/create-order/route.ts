import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("odlix-token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const body = await req.json();
    const { amount, packageName, packageType } = body;

    if (!amount || !packageName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create payment record
    const payment = await prisma.payment.create({
      data: {
        userId: payload.userId,
        amount: parseFloat(amount),
        currency: "INR",
        status: "PENDING",
        provider: "cashfree",
      },
    });

    // In production, integrate with Cashfree API here
    // For now, return a mock order ID
    const orderId = `ODLIX_${Date.now()}_${payment.id.slice(-6)}`;

    await prisma.payment.update({
      where: { id: payment.id },
      data: { orderId },
    });

    return NextResponse.json({
      success: true,
      orderId,
      paymentId: payment.id,
      amount,
      currency: "INR",
      // Cashfree checkout URL would be generated here in production
      checkoutUrl: `/payments/checkout?orderId=${orderId}&amount=${amount}&package=${packageName}`,
    });
  } catch (error) {
    console.error("Payment creation error:", error);
    return NextResponse.json({ error: "Failed to create payment" }, { status: 500 });
  }
}

