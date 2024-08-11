import { NextResponse } from "next/server"

import { sleep } from "@/lib/sleep";

export const GET = async () => {
  try {
    await sleep(8000);

    return NextResponse.json({
      message: "Hello, Next.js! Page 1",
      timestamp: new Date().toISOString(),
    }, { status: 200 });
  } catch (error) {
    return NextResponse.error();
  }
}