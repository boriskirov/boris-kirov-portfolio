const Metric = ({ metric }) => {
  return <h6>{metric > 0 ? metric.toLocaleString() : "---"}</h6>;
};
export default Metric;
