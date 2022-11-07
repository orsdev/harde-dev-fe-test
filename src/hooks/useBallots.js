import { useEffect, useState } from "react";

const useBallots = () => {
  const [ballots, setBallots] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /* Call getBallots function once on page load. */
  useEffect(() => {
    getBallots();
  }, []);

  const getBallots = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/getBallotData");
      const data = await response.json();

      setIsLoading(false);
      setBallots(data?.items || []);
    } catch (error) {
      setError(error?.message || "Something went wrong!");
      setIsLoading(false);
    }
  };

  return {
    ballots,
    isLoading,
    error,
  };
};

export default useBallots;
