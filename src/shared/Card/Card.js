const Card = ({ ballot }) => {
  return (
    <div className="card">
      <h4 className="card__title">{ballot?.title}</h4>
      <div className="card__avatar">
        <img src={ballot?.photoUrL} alt={ballot?.title} />
      </div>

      <button className="card__button">Select Button</button>
    </div>
  );
};

export default Card;
