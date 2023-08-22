import BlogCard from "@/components/BlogCard";
import fetchPost from "@/lib/fetchPost";

async function Blog() {
  const blogPost = await fetchPost();
  return (
    <div className="py-5">
      <h1 className="text-4xl font-semibold text-center pb-5">Blog List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPost.map((post, idx) => {
                const {title, img, short, id} = post || {};
                return (
                    <BlogCard key={idx} title={title} image={img} description={short} link={`blog/${id}`}/>)
            })}
        </div>
    </div>
  );
}

export default Blog;
