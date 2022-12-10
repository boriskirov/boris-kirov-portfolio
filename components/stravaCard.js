import useSWR from "swr";
import Image from "next/image";
import Metric from "./metric";

const StravaStats = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR("/api/strava", fetcher);
  const RunDistance = (data?.countRuns.distance / 1000).toFixed(2);
  const RideDistance = (data?.countRides.distance / 1000).toFixed(2);
  const SwimDistance = (data?.countSwims.distance / 1000).toFixed(2);

  function timeConvert(num) {
    // const seconds = Math.floor(num % 60);

    const hours = Math.floor((num % (3600 * 24)) / 3600);
    const days = Math.floor(num / (3600 * 24));

    return days + "d" + " " + hours + "h";
  }

  const totalRuns = timeConvert(data?.countRuns.moving_time);
  const totalRides = timeConvert(data?.countRides.moving_time);
  const totalSwims = timeConvert(data?.countSwims.moving_time);

  const AverageRun = (
    data?.countRuns.distance /
    1000 /
    data?.countRuns.count
  ).toFixed(2);

  const AverageRide = (
    data?.countRides.distance /
    1000 /
    data?.countRides.count
  ).toFixed(2);

  const AverageSwim = (
    data?.countSwims.distance /
    1000 /
    data?.countSwims.count
  ).toFixed(2);

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
        <div className="flex space-between flex-center metric">
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
            </small>
            <Metric metric={data?.countRuns.count} />
          </div>
          <div className="metric-pill">
            <small>Distance (km)</small>
            <Metric metric={RunDistance} />
          </div>
          <div className="metric-pill">
            <small>Distance avg</small>
            <Metric metric={AverageRun} />
          </div>
          <div className="metric-pill">
            <small>Time</small>
            <h6>{totalRuns}</h6>
          </div>
        </div>
        <div className="flex space-between flex-center metric">
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
            </small>
            <Metric metric={data?.countRides.count} />
          </div>
          <div className="metric-pill">
            <small>Distance (km)</small>
            <Metric metric={RideDistance} />
          </div>
          <div className="metric-pill">
            <small>Distance avg</small>
            <Metric metric={AverageRide} />
          </div>
          <div className="metric-pill">
            <small>Time</small>
            <h6>{totalRides}</h6>
          </div>
        </div>
        <div className="flex space-between flex-center metric">
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
            </small>
            <Metric metric={data?.countSwims.count} />
          </div>
          <div className="metric-pill">
            <small>Distance (km)</small>
            <Metric metric={SwimDistance} />
          </div>
          <div className="metric-pill">
            <small>Distance avg</small>
            <Metric metric={AverageSwim} />
          </div>
          <div className="metric-pill">
            <small>Time</small>
            <h6>{totalSwims}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StravaStats;
