import { db } from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await db
      .selectFrom("Page")
      .selectAll()
      // .where("Page.handle", "=", "AAPL")
      .execute();

    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, { status: 500 });
    }
  }
}
