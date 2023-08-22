export default async function fetchResentPost() {
  const res = await fetch(process.env.API_URL + `/post-newest`);

  if (!res.ok) {
    throw new Error("Failed to fetch surah list");
  }

  return res.json();
}
