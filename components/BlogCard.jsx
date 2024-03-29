import Image from "next/image";
import Link from "next/link";

function BlogCard({ image, title, description, link }) {
  return (
    <Link href={link}>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full relative h-56">
          <Image
            className="rounded-t-lg w-full h-auto object-cover "
            src={image}
            alt=""
            fill={true}
          />
        </div>
        <div className="p-5">
          <Link href={link}>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <Link
            href={link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
