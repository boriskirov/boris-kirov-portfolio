import useSWR from "swr";
import Image from "next/image";

const GitStats = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/github", fetcher);

  const publicRepos = data?.githubRepos;
  return (
    <div className="ApiCard">
      <div className="flex">
        <Image
          src="/github.png"
          className="Logo"
          width={48}
          height={48}
          alt="github"
        />
        <small className="github-repos">{publicRepos} repos</small>
      </div>
    </div>
  );
};

export default GitStats;
