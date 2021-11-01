import useSWR from "swr";
import Equalizer from "./equalizer";
import Image from "next/image";

export default function CurrentlyListening() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);
  return (
    <a
      className="currentlyListeningCard"
      target="_blank"
      rel="noreferrer"
      href={
        data?.isPlaying
          ? data.songUrl
          : "https://open.spotify.com/user/11180743946"
      }
    >
      <div className="currentlyListeningCardInner">
        {data?.isPlaying ? (
          <Image
            className="currentlyListeningImg"
            src={data?.albumImageUrl}
            alt={data?.album}
          />
        ) : (
          <Image
            className="currentlyListeningImg"
            src="/spotify.png"
            alt="Spotify logo"
            width={96}
            height={96}
          />
        )}

        <div className="currentlyListeningContent">
          <p>
            {data?.isPlaying ? data.title : "Not listening Spotify right now"}
          </p>
          <small>{data?.isPlaying ? data.artist : ""}</small>
        </div>
      </div>
      {data?.isPlaying ? <Equalizer /> : ""}
    </a>
  );
}
