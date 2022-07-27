import useSWR from "swr";
import Image from "next/image";

const StravaStats = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR("/api/strava", fetcher);
  const RunDistance = (data?.countRuns.distance / 1000).toFixed(2);
  const RideDistance = (data?.countRides.distance / 1000).toFixed(2);
  const SwimDistance = (data?.countSwims.distance / 1000).toFixed(2);
  return (
    <a
      className="ApiCard"
      href="https://www.strava.com"
      target="_blank"
      rel="noreferrer"
    >
      <Image src="/strava.png" alt="Strava logo" width={48} height={48} />
      <div className="flexCentered">
        <div className="flexCentered">
          <div>
            <p className="distance">
              <strong>{RunDistance} km</strong>
            </p>
            <small className="count">{data?.countRuns.count} runs</small>
          </div>
          <div>
            <p className="distance">
              {" "}
              <strong> {RideDistance} km</strong>
            </p>
            <small className="count">{data?.countRides.count} rides</small>
          </div>
          <div>
            <p className="distance">
              {" "}
              <strong>{SwimDistance} km</strong>
            </p>
            <small className="count">{data?.countSwims.count} swims</small>
          </div>
        </div>
      </div>
    </a>
  );
};

export default StravaStats;
