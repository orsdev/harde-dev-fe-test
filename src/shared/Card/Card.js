const Card = ({ user }) => {
  return (
    <div className="card">
      <h4 className="card__title">{user?.title}</h4>
      <div className="card__avatar">
        <img src={user?.avatar} alt={user?.title} />
      </div>

      <button className="card__button">Select Button</button>
    </div>
  );
};

export default Card;
