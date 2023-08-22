import Header from "@/components/Header";
import ResentPost from "@/components/ResentPost";
import TakeBuisness from "@/components/TakeBuisness";
import fetchResentPost from "@/lib/fetchResentPost";

export default async function Home() {
  const resentPost = await fetchResentPost()
  return (
    <main className="">
      <Header />
      <div className="py-7"><TakeBuisness /></div>
      <ResentPost postList={resentPost}/>

      {/* </main> */}
    </main>
  );
}
