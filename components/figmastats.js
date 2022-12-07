import useSWR from "swr";
import Image from "next/image";
import Metric from "./metric";

const Figmastats = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/figma", fetcher);

  const totalRuns = data?.figmaRuns;
  const totalViews = data?.figmaViews;
  const totalLikes = data?.figmaLikes;
  const totalInstalls = data?.figmaInstalls;

  return (
    <div className="metric">
      <div className="flex flex-center metric-header">
        <Image
          src="/figma.svg"
          className="metric-logo"
          width={24}
          height={24}
          alt="npm"
        />
        <h6>Plugin stats</h6>
      </div>
      <div className="flex space-between">
        <div className="metric-pill">
          <small>Runs</small>
          <Metric metric={totalRuns} />
        </div>
        <div className="metric-pill">
          <small>Views</small>
          <Metric metric={totalViews} />
        </div>
        <div className="metric-pill">
          <small>Likes</small>
          <Metric metric={totalLikes} />
        </div>
        <div className="metric-pill">
          <small>Installs</small>
          <Metric metric={totalInstalls} />
        </div>
      </div>
    </div>
  );
};

export default Figmastats;
