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
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcollegian.com%2Fwp-content%2Fuploads%2F2017%2F08%2Fspotify-1759471_1280.jpg&f=1&nofb=1"
            alt="Spotify logo"
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
