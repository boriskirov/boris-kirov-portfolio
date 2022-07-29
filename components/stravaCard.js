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
            <Image src="/strava.png" alt="Strava logo" width={48} height={48} />
            <h4 className="stravaStats">My Strava stats</h4>
          </div>
          <small className="tag stravaTag">
            <a
              href="https://www.strava.com/athletes/40093533"
              target="_blank"
              rel="noreferrer"
            >
              Follow
            </a>
          </small>
        </div>
        <div className="flexCentered flexDirectionColumn">
          <div className="flexCentered justContentBetween">
            <Image src="/run.svg" alt="Strava logo" width={64} height={64} />
            <div className="stravaPil">
              <small>Distance</small>
              <p className="distance">
                <h5>{RunDistance} km</h5>
              </p>
            </div>
            <div className="stravaPil">
              <small>Count</small>
              <div className="distance">
                <h5 className="count">{data?.countRuns.count} runs</h5>
              </div>
            </div>
            <div className="stravaPil">
              <small>Moving time</small>
              <p className="distance">
                <h5>{timeConvert(data?.countRuns.moving_time)}</h5>
              </p>
            </div>
          </div>
          <hr />
          <div className="flexCentered justContentBetween">
            <Image src="/bike.svg" alt="Strava logo" width={64} height={64} />
            <div className="stravaPil">
              <small>Distance</small>
              <div className="distance">
                <p className="distance">
                  <h5> {RideDistance} km</h5>
                </p>
              </div>
            </div>
            <div className="stravaPil">
              <small>Count</small>
              <div className="distance">
                <h5 className="count">{data?.countRides.count} runs</h5>
              </div>
            </div>
            <div className="stravaPil">
              <small>Moving time</small>
              <p className="distance">
                <h5>{timeConvert(data?.countRides.moving_time)}</h5>
              </p>
            </div>
          </div>
          <hr />
          <div className="flexCentered justContentBetween">
            <Image src="/swim.svg" alt="Strava logo" width={48} height={48} />
            <div className="stravaPil">
              <small>Distance</small>
              <div className="distance">
                <p className="distance">
                  <h5>{SwimDistance} km</h5>
                </p>
              </div>
            </div>
            <div className="stravaPil">
              <small>Count</small>
              <div className="distance">
                <h5 className="count">{data?.countSwims.count} runs</h5>
              </div>
            </div>
            <div className="stravaPil">
              <small>Moving time</small>
              <p className="distance">
                <h5>{timeConvert(data?.countSwims.moving_time)}</h5>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StravaStats;
