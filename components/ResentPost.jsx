import BlogCard from "./BlogCard";

function ResentPost({postList}) {
  return (
    <div className="py-7">
        <h1 className="text-4xl font-bold pb-6 text-center">Recent Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {postList.map((post, idx) => {
                const {title, img, short, id} = post || {};
                return (
                    <BlogCard key={idx} title={title} image={img} description={short} link={`blog/${id}`}/>)
            })}
        </div>
    </div>
  )
}

export default ResentPost