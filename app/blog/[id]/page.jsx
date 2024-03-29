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
    <div className="md:px-24">
      <div className="w-full flex flex-col bg-white shadow rounded-xl overflow-hidden">
        <Image
          src={img}
          alt="blog_img"
          height={0}
          width={0}
          className="w-full h-auto"
        />
        <div className="py-7 px-4 md:px-7">
          <div className="text-xl font-semibold">{title}</div>
          <div className="text-gray-600 flex flex-col md:flex-row gap-3">
            <div>Publish At: {moment(created_at).format("ll")}</div>
            <div>
              Updated At: {moment(updated_at).format("ll")}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl md:p-7 p-4 shadow my-3">{content}</div>
    </div>
  );
}

export default SingleBlog;
