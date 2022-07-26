import useSWR from "swr";
import Equalizer from "./equalizer";
import Image from "next/image";

export default function CurrentlyListening() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);
  return (
    <a
      className="ApiCard"
      target="_blank"
      rel="noreferrer"
      href={
        data?.isPlaying
          ? data.songUrl
          : "https://open.spotify.com/user/11180743946"
      }
    >
      <div className="flexCentered">
        {data?.isPlaying ? (
          <Image
            className="currentlyListeningImg"
            src={data?.albumImageUrl}
            alt={data?.album}
            width={72}
            height={72}
          />
        ) : (
          <Image
            className="currentlyListeningImg"
            src="/spotify.png"
            alt="Spotify logo"
            width={48}
            height={48}
          />
        )}
        <div className="currentlyListeningContent">
          <small>{data?.isPlaying ? data.title : ""}</small>
          <small>
            {data?.isPlaying ? data.artist : "Not listening Spotify right now"}
          </small>
        </div>
      </div>
      {data?.isPlaying ? <Equalizer /> : ""}
    </a>
  );
}
