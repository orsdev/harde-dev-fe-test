import useBallots from "../../hooks/useBallots";
import { ErrorAlert } from "../../shared/alert/Alert";
import Card from "../../shared/card/Card";
import Spinner from "../../shared/spinner/Spinner";

const Ballot = () => {
  const { ballots, isLoading, error } = useBallots();
  console.log(ballots);
  return (
    <>
      {isLoading && <Spinner />}
      {error && <ErrorAlert message={error} />}

      <div className="ballot">
        {ballots &&
          ballots.map(({ id, title, items }) => (
            <div key={id}>
              <header className="ballot__header">
                <h3>{title}</h3>
              </header>

              <div className="ballot__grid">
                {items &&
                  items.map((item, index) => (
                    <Card ballot={item} key={item.id} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Ballot;
