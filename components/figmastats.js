import useSWR from "swr";
import Image from "next/image";

const Figmastats = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/figma", fetcher);

  const totalRuns = data?.figmaRuns.toLocaleString("en-US");
  const totalViews = data?.figmaViews.toLocaleString("en-US");
  const dateCreated = new Date(data?.figmaDateCreated).toLocaleDateString(
    "en-US"
  );
  const totalLikes = data?.figmaLikes.toLocaleString("en-US");

  return (
    <div className="ApiCard">
      <div className="flex">
        <Image
          src="/figma.png"
          className="stack-card-img"
          width={48}
          height={48}
          alt="npm"
        />
        <small className="npm-downloads">{totalRuns} runs</small>
        <small className="npm-downloads">{totalViews} views</small>
        <small className="npm-downloads">{dateCreated} Date created</small>
        <small className="npm-downloads">{totalLikes} likes</small>
      </div>
    </div>
  );
};

export default Figmastats;
