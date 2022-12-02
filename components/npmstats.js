import useSWR from "swr";
import Image from "next/image";

const Npmstats = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/npm", fetcher);

  const totalDownloads = data?.fluiditypeDownloads;

  return (
    <div className="ApiCard">
      <div className="flex">
        <Image
          src="/npm.png"
          className="stack-card-img"
          width={48}
          height={48}
          alt="npm"
        />
        <small className="npm-downloads">{totalDownloads} downloads</small>
      </div>
    </div>
  );
};

export default Npmstats;
