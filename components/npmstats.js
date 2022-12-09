import useSWR from "swr";
import Image from "next/image";
import Metric from "./metric";

const Npmstats = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/npm", fetcher);

  const totalDownloads =
    data?.fluiditypeDownloads + data?.mirotoneDownloads + data?.borisDownloads;

  return (
    <div className="metric">
      <div className="flex flex-center metric-header">
        <Image
          src="/npm.svg"
          className="metric-logo"
          width={24}
          height={24}
          alt="npm"
        />
        <h6>Package Stats</h6>
      </div>
      <div className="flex space-between">
        <div className="metric-pill">
          <small>Downloads</small>
          <Metric metric={totalDownloads} />
        </div>
      </div>
    </div>
  );
};

export default Npmstats;
