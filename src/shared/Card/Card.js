const Card = ({ ballot, selected, id, onSelected }) => {
  return (
    <div
      className="card"
      onClick={onSelected}
      style={{
        backgroundColor:
          ballot?.id === selected[id]?.id ? "#009B86" : "#43c6b5",
        borderColor: ballot?.id === selected[id]?.id ? "#fff" : "#000",
      }}
    >
      <h4 className="card__title">{ballot?.title}</h4>
      <div className="card__avatar">
        <img src={ballot?.photoUrL} alt={ballot?.title} />
      </div>

      <button className="card__button" onClick={onSelected}>
        Select
      </button>
    </div>
  );
};

export default Card;
