import { useEffect } from "react";

const useTitle = (record) => {
  useEffect(() => {
    document.title = `Record ${record}`;
  }, [record]); // re-run effect only if `record` changes
};

export default useTitle;