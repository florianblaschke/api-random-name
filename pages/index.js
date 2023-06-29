import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR("/api/random-character", fetcher);

  if (isLoading || error) return null;
  return (
    <h1>
      <p>{data.firstName}</p>
      <p>{data.lastName}</p>
      <p>{data.twitter}</p>
      <p>{data.geohash}</p>
    </h1>
  );
}
