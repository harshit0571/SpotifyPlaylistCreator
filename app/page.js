import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  console.log(session.user);
  return <h1>sd</h1>;
}
