// app/api/record/route.ts
import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export const GET = async () => {
  const file = path.join(process.cwd(), "public", "record.json");
  const json = JSON.parse(await readFile(file, "utf-8"));
  return NextResponse.json(json);
};