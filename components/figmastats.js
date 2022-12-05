import useSWR from "swr";
import Image from "next/image";

const Figmastats = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/figma", fetcher);

  const totalRuns = data?.figmaRuns.toLocaleString("en-US");
  const totalViews = data?.figmaViews.toLocaleString("en-US");
  const totalLikes = data?.figmaLikes.toLocaleString("en-US");

  return (
    <div className="metric tag">
      <div className="flex flex-center metric-header">
        <Image
          src="/figma.png"
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
          <h5>{totalRuns}</h5>
        </div>
        <div className="metric-pill">
          <small>Views</small>
          <h5>{totalViews}</h5>
        </div>
        <div className="metric-pill">
          <small>Likes</small>
          <h5>{totalLikes}</h5>
        </div>
      </div>
    </div>
  );
};

export default Figmastats;
