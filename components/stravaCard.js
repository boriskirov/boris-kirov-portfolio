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
      <div className="strava">
        <div className="flexCentered">
          <div className="flexCentered">
            <Image
              src="/strava.png"
              className="Logo"
              alt="Strava logo"
              width={48}
              height={48}
            />
            <h6 className="stravaStats">My Strava stats</h6>
          </div>
          <small className="tag stravaTag">
            <a
              href="https://www.strava.com/athletes/40093533"
              target="_blank"
              rel="noreferrer"
            >
              <small>Follow</small>
            </a>
          </small>
        </div>

        <div className="flexCentered flexDirectionColumn">
          <div className="flexCentered justContentBetween strava">
            <Image
              className="stravaIcon"
              src="/run.svg"
              alt="Strava logo"
              width={48}
              height={48}
            />
            <div className="stravaPil">
              <small>Distance</small>
              <p className="distance">{RunDistance} km</p>
            </div>
            <div className="stravaPil">
              <small>Count</small>
              <p className="count">{data?.countRuns.count} runs</p>
            </div>
            <div className="stravaPil">
              <small>Moving time</small>
              <p className="distance">
                {timeConvert(data?.countRuns.moving_time)}
              </p>
            </div>
          </div>

          <div className="flexCentered justContentBetween strava">
            <Image
              className="stravaIcon"
              src="/bike.svg"
              alt="Strava logo"
              width={48}
              height={48}
            />
            <div className="stravaPil">
              <small>Distance</small>
              <p className="distance">{RideDistance} km</p>
            </div>
            <div className="stravaPil">
              <small>Count</small>
              <p className="count">{data?.countRides.count} rides</p>
            </div>
            <div className="stravaPil">
              <small>Moving time</small>
              <p className="distance">
                {timeConvert(data?.countRides.moving_time)}
              </p>
            </div>
          </div>

          <div className="flexCentered justContentBetween strava">
            <Image
              className="stravaIcon"
              src="/swim.svg"
              alt="Strava logo"
              width={48}
              height={48}
            />

            <div className="stravaPil">
              <small>Distance</small>
              <p className="distance">{SwimDistance} km</p>
            </div>
            <div className="stravaPil">
              <small>Count</small>
              <p className="count">{data?.countSwims.count} swims</p>
            </div>
            <div className="stravaPil">
              <small>Moving time</small>
              <p className="distance">
                {timeConvert(data?.countSwims.moving_time)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StravaStats;
