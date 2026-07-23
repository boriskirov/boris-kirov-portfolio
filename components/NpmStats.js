import useSWR from "swr";
import Image from "next/image";
import Metric from "./Metric";

const Npmstats = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/npm", fetcher);

  const totalDownloads =
    data?.fluiditypeDownloads + data?.mirotoneDownloads + data?.borisDownloads;

  return (
    <div className="metric">
      <div className="flex items-center metric-header">
        <Image
          src="/npm.svg"
          className="metric-logo"
          width={18}
          height={18}
          alt="npm"
        />
        <h6>NPM Download Stats</h6>
      </div>
      <div className="flex justify-between">
        <div className="metric-pill">
          <small>Downloads</small>
          <Metric metric={totalDownloads} />
        </div>
        <div className="metric-pill">
          <small>Packages</small>3
        </div>
      </div>
    </div>
  );
};

export default Npmstats;
