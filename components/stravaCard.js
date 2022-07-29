import useSWR from "swr";
import Image from "next/image";

const StravaStats = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR("/api/strava", fetcher);
  const RunDistance = (data?.countRuns.distance / 1000).toFixed(2);
  const RideDistance = (data?.countRides.distance / 1000).toFixed(2);
  const SwimDistance = (data?.countSwims.distance / 1000).toFixed(2);
  return (
    <div>
      <div className="strava">
        <div className="flexCentered">
          <div className="flexCentered">
            <Image src="/strava.png" alt="Strava logo" width={48} height={48} />
            <h5 className="stravaStats">My Strava stats</h5>
          </div>
          <small className="tag stravaTag">
            <a href="www.strava.com" target="_blank" rel="noreferrer">
              Follow
            </a>
          </small>
        </div>
        <div className="flexCentered flexDirectionColumn">
          <div className="flexCentered justContentBetween">
            <Image src="/run.svg" alt="Strava logo" width={48} height={48} />
            <div className="stravaPil">
              <p>Distance</p>
              <p className="distance">
                <strong>{RunDistance} km</strong>
              </p>
            </div>
            <div className="stravaPil">
              <p>Count</p>
              <div className="distance">
                <strong className="count">{data?.countRuns.count} runs</strong>
              </div>
            </div>
          </div>
          <hr />
          <div className="flexCentered justContentBetween">
            <Image src="/bike.svg" alt="Strava logo" width={48} height={48} />
            <div className="stravaPil">
              <p>Distance</p>
              <div className="distance">
                <p className="distance">
                  <strong> {RideDistance} km</strong>
                </p>
              </div>
            </div>
            <div className="stravaPil">
              <p>Count</p>
              <div className="distance">
                <strong className="count">{data?.countRides.count} runs</strong>
              </div>
            </div>
          </div>
          <hr />
          <div className="flexCentered justContentBetween">
            <Image src="/swim.svg" alt="Strava logo" width={48} height={48} />
            <div className="stravaPil">
              <p>Distance</p>
              <div className="distance">
                <p className="distance">
                  <strong>{SwimDistance} km</strong>
                </p>
              </div>
            </div>
            <div className="stravaPil">
              <p>Count</p>
              <div className="distance">
                <strong className="count">{data?.countSwims.count} runs</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StravaStats;
