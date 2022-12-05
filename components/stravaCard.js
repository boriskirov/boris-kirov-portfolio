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

    return days + "d" + " " + hours + "h" + " " + minutes + "min";
  }

  return (
    <div>
      <div className="metric tag">
        <div className="flex flex-center metric-header">
          <Image
            src="/strava.png"
            className="metric-logo"
            width={24}
            height={24}
            alt="npm"
          />
          <h6>Sport stats</h6>
        </div>
        <div className="flex space-between tag">
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
              Distance
            </small>
            <h5>{RunDistance} km</h5>
          </div>
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
              Count
            </small>
            <h5>{data?.countRuns.count} runs</h5>
          </div>
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
              Moving time
            </small>
            <h5>{timeConvert(data?.countRuns.moving_time)} </h5>
          </div>
        </div>
        <div className="flex space-between tag">
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
              Distance
            </small>
            <h5>{RideDistance} km</h5>
          </div>
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
              Count
            </small>
            <h5>{data?.countRides.count} rides</h5>
          </div>
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
              Moving time
            </small>
            <h5>{timeConvert(data?.countRides.moving_time)} </h5>
          </div>
        </div>
        <div className="flex space-between tag">
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
              Distance
            </small>
            <h5>{SwimDistance} km</h5>
          </div>
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
              Count
            </small>
            <h5>{data?.countSwims.count} swims</h5>
          </div>
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
              Moving time
            </small>
            <h5>{timeConvert(data?.countSwims.moving_time)} </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StravaStats;
