import { draftMode } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== process.env.SECRET_TOKEN) {
    return new Response("Invalid secret token", { status: 401 });
  }

  draftMode().enable();
  return new Response("Draft mode is enabled");
}
