export default async function fetchPost(id) {
  const res = await fetch(process.env.API_URL + `/post-list/1`);

  if (!res.ok) {
    throw new Error("Failed to fetch surah list");
  }

  return res.json();
}
