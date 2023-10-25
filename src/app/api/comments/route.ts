import { db } from "@/db/db";
import { NextRequest, NextResponse } from "next/server";
import zod, { z } from "zod";
import { v4 as uuidv4 } from "uuid";

interface Params {
  params: { id: string };
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");

  if (!page) {
    return NextResponse.json(
      { message: "page not found" },
      {
        status: 404,
      }
    );
  }

  try {
    const response = await db
      .selectFrom("Comment")
      .select(["id", "comment", "createdAt"])
      .where("pageHandle", "=", page)
      .orderBy("createdAt", "desc")
      .execute();

    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, { status: 500 });
    }
  }
}

const createCommentSchema = zod.object({
  page: z.string().max(64).min(1),
  comment: zod.string().max(256),
});

export async function POST(request: Request, { params }: Params) {
  const body = await request.json();

  try {
    const { comment, page } = createCommentSchema.parse(body);
    // const id = uuidv4();

    const response = await db
      .insertInto("Comment")
      .values({ comment, pageHandle: page })
      .returningAll()
      .executeTakeFirstOrThrow();

    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message, { status: 500 });
    }
  }
}
