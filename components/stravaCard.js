import useSWR from "swr";
import Image from "next/image";

const StravaStats = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR("/api/strava", fetcher);
  const RunDistance = (data?.countRuns.distance / 1000).toFixed(2);
  const RideDistance = (data?.countRides.distance / 1000).toFixed(2);
  const SwimDistance = (data?.countSwims.distance / 1000).toFixed(2);

  function timeConvert(num) {
    // const seconds = Math.floor(num % 60);
    const minutes = Math.floor((num % 3600) / 60);
    const hours = Math.floor((num % (3600 * 24)) / 3600);
    const days = Math.floor(num / (3600 * 24));

    return days + "d" + " " + hours + "h" + " " + minutes + "m";
  }

  return (
    <div>
      <div className="metric">
        <div className="flex flex-center metric-header">
          <Image
            src="/strava.svg"
            className="metric-logo"
            width={24}
            height={24}
            alt="npm"
          />
          <h6>Sport stats</h6>
        </div>
        <div className="flex space-between flex-center tag">
          <div className="metric-pill">
            <small>
              {" "}
              <Image
                className="metric-logo"
                src="/run.svg"
                alt="Strava logo"
                width={24}
                height={24}
              />
              Runs
            </small>
            <h6>{data?.countRuns.count} </h6>
          </div>
          <div className="metric-pill">
            <small>Distance</small>
            <h6>{RunDistance} km</h6>
          </div>
          <div className="metric-pill">
            <small>Time</small>
            <h6>{timeConvert(data?.countRuns.moving_time)} </h6>
          </div>
        </div>
        <div className="flex space-between flex-center tag">
          <div className="metric-pill">
            <small>
              {" "}
              <Image
                className="metric-logo"
                src="/bike.svg"
                alt="Strava logo"
                width={24}
                height={24}
              />
              Rides
            </small>
            <h6>{data?.countRides.count} </h6>
          </div>
          <div className="metric-pill">
            <small>Distance</small>
            <h6>{RideDistance} km</h6>
          </div>
          <div className="metric-pill">
            <small>Time</small>
            <h6>{timeConvert(data?.countRides.moving_time)} </h6>
          </div>
        </div>
        <div className="flex space-between tag flex-center">
          <div className="metric-pill">
            <small>
              {" "}
              <Image
                className="metric-logo"
                src="/swim.svg"
                alt="Strava logo"
                width={24}
                height={24}
              />
              Swims
            </small>
            <h6>{data?.countSwims.count}</h6>
          </div>
          <div className="metric-pill">
            <small>Distance</small>
            <h6>{SwimDistance} km</h6>
          </div>
          <div className="metric-pill">
            <small>Time</small>
            <h6>{timeConvert(data?.countSwims.moving_time)} </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StravaStats;
