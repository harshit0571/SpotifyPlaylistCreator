import { getServerSession } from "next-auth";
import AuthBTN from "./components/AuthBTN";
import axios from "axios";

export default async function Home() {
  const session = await getServerSession();
  const fun = async () => {
    // const res = await fetch('');
    // const data = await res.json();
    console.log(session.user);
  };
  fun();
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
