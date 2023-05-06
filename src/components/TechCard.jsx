import "../App.css";

const TechCard = ({ icon, name }) => {
  return (
    <div className="card" data-name={name}>
      <img src={icon} width="80"/>
    </div>
  );
};

export default TechCard;
