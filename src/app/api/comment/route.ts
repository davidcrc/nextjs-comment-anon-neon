// import { db } from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ response: "success" });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, { status: 500 });
    }
  }
}
