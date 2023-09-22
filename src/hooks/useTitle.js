import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Redux Store`;
  }, [title]);

  return null;
};
