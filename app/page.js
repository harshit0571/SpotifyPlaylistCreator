import { getServerSession } from "next-auth";
import AuthBTN from "./components/AuthBTN";

export default async function Home() {
  const session = await getServerSession();
  console.log(session?.user);
  return (
    <main className="flex flex-col justify-center items-center">
      {session && (
        <button className="py-2 px-4 bg-green-500 rounded-lg mt-5">
          Create A Playlist
        </button>
      )}
    </main>
  );
}
