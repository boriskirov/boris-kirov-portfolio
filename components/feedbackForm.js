import Card from "./card";

const FeedbackForm = ({ description }) => {
  return (
    <div className="contentWrapper">
      <hr />
      <Card
        link="https://twitter.com/sboriskirov"
        className="external main-card"
        title="Feedback"
        description={description}
        type="Twitter"
        target="_blank"
      />
    </div>
  );
};

export default FeedbackForm;
