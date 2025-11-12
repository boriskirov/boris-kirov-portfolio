import Image from "next/image";

export default function GithubMap({}) {
  return (
    <div className="tag">
      <Image
        src="https://ghchart.rshah.org/f06a8b/boriskirov"
        alt="Boris Github contribution chart"
        width={700}
        height={120}
        unoptimized
      />
    </div>
  );
}
