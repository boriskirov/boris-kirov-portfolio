import Card from "./card";

const FeedbackForm = ({ description }) => {
  return (
    <div className="contentWrapper">
      <Card
        link="https://twitter.com/sboriskirov"
        className="external mainCard"
        title="Feedback"
        description={description}
        type="Twitter"
        target="_blank"
      />
    </div>
  );
};

export default FeedbackForm;
