import { NextResponse } from "next/server";

// Example API route removed dynamic export to be compatible with static export builds
export function GET() {
  return NextResponse.json({ data: "Sentry example API route disabled for static export." });
}
