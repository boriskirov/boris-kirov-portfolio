import useSWR from "swr";
import Image from "next/image";

export default function StravaStats() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/strava", fetcher);
  const RunDistance = (data?.countRuns.distance / 1000).toFixed(2);
  const RideDistance = (data?.countRides.distance / 1000).toFixed(2);
  const SwimDistance = (data?.countSwims.distance / 1000).toFixed(2);
  return (
    <a className="ApiCard" href="https://www.strava.com" target="_blank">
      <div className="flexCentered">
        <Image src="/strava.png" alt="Strava logo" width={48} height={48} />
        <div className="flexCentered">
          <small className="tag dark-text">
            {data?.countRuns.count} runs {""}
            {RunDistance} km
          </small>
          <small className="tag dark-text">
            {data?.countRides.count} rides {""}
            {RideDistance} km
          </small>
          <small className="tag dark-text">
            {data?.countSwims.count} swims {""} {SwimDistance} km
          </small>
        </div>
      </div>
    </a>
  );
}
