export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-[9rem] font-bold text-red-500">404</div>
      <div className="flex flex-col items-center justify-center font-semibold">
      <h2 className="text-xl">Not Found</h2>
      <p className="text-gray-500">May the blog is deleted or an invalid link</p></div>
    </div>
  );
}
