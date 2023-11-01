import { connectToDB } from "@/app/util/database";

export const GET = async () => {
  try {
    console.log("FD");
    await connectToDB();
    return new Response("h", { status: 200 });
  } catch (error) {
    return new Response(error, { status: 501 });
  }
};
