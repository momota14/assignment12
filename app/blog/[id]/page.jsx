import fetchSingleBlog from "@/lib/fetchSingleBlog";
import moment from "moment/moment";
import Image from "next/image";
import { notFound } from "next/navigation";

async function SingleBlog({ params }) {
  const { id } = params || {};
  const blog = await fetchSingleBlog(id);
  const { postDetails } = blog || {};
  const { title, img, content, created_at, updated_at } = postDetails || {};

  if (postDetails === null) {
    notFound();
  }

  return (
    <div>
      <div className="w-full flex flex-col bg-white shadow rounded-xl overflow-hidden">
        <Image
          src={img}
          alt="blog_img"
          height={0}
          width={0}
          className="w-full h-auto"
        />
        <div className="py-4 px-3">
          <div className="text-xl font-semibold">{title}</div>
          <div className="text-gray-600">
            <span>Publish At: {moment(created_at).format("ll")}</span>
            <span className="ml-4">
              Updated At: {moment(updated_at).format("ll")}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow my-3">{content}</div>
    </div>
  );
}

export default SingleBlog;
