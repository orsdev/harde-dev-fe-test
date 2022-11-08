import { useState } from "react";
import useBallots from "../../hooks/useBallots";
import { ErrorAlert } from "../../shared/alert/Alert";
import Card from "../../shared/card/Card";
import Spinner from "../../shared/spinner/Spinner";

const Ballot = () => {
  const { ballots, isLoading, error } = useBallots();
  const [selected, setSelected] = useState({});

  /**
   * When the user selects a nominee, update the state of the selected object with the category and the
   * item.
   * @param item - {
   * @param category - string
   */
  const onSelectNominee = (item, category) => {
    setSelected((prevState) => ({
      ...prevState,
      [category]: item,
    }));
  };

  return (
    <>
      {isLoading && <Spinner />}
      {error && <ErrorAlert message={error} />}

      <div className="ballot">
        {ballots &&
          ballots.map(({ id, title, items }, index) => (
            <div key={id}>
              <header className="ballot__header">
                <h3>{title}</h3>
              </header>

              <div className="ballot__grid">
                {items &&
                  items.map((item) => (
                    <Card
                      ballot={item}
                      key={item.id}
                      selected={selected}
                      id={id}
                      onSelected={() => onSelectNominee(item, id)}
                    />
                  ))}
                {/* Show submit button on last card row */}
                {index === ballots.length - 1 && (
                  <button type="button" className="ballot__submit__button">
                    Submit Ballot
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Ballot;
