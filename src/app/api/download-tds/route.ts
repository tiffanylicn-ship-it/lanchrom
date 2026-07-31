import { NextRequest } from "next/server";
import { handleDocumentRequest } from "@/lib/inquiries/documents";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  return handleDocumentRequest(request, "tds");
}
