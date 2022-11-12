import useSWR from "swr";
import Image from "next/image";

const gitStats = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/github", fetcher);

  const publicRepos = (data?.githubRepos).toLocaleString("en-US");
  return (
    <div className="ApiCard">
      <div className="flex">
        <Image src="/github.png" width={48} height={48} />
        <small className="github-repos">{publicRepos} repos</small>
      </div>
    </div>
  );
};

export default gitStats;
