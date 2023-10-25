import { db } from "@/db/db";
import { NextResponse } from "next/server";
import zod, { string } from "zod";

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

const schema = zod.object({
  handle: string().max(64).min(1),
});

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const { handle } = schema.parse(body);

    const response = await db
      .insertInto("Page")
      .values({ handle })
      .returning("handle")
      .executeTakeFirstOrThrow();

    console.log("response", response);

    return NextResponse.json(response);
  } catch (error: any) {
    // console.log("err", typeof error.code);
    if (error.code === "23505") {
      return NextResponse.json({ message: error.detail }, { status: 409 });
    }

    return NextResponse.json(error, { status: 500 });
  }
}
