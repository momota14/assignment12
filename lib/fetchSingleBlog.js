export default async function fetchSingleBlog(id) {
  const res = await fetch(process.env.API_URL + `/post-details/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch surah list");
  }

  return res.json();
}
