import { NextResponse } from "next/server";
import { newsItems } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({ items: newsItems });
}


