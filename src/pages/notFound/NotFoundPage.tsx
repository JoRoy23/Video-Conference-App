import React, { useContext, useEffect } from "react";
import { MainHeaderContext } from "../../contexts/providers/MainHeaderProvider";

const NotFoundPage = () => {
  const { setMainHeaderTitle } = useContext(MainHeaderContext)!;

  useEffect(() => {
    setMainHeaderTitle("404");
  }, [setMainHeaderTitle]);

  return (
    <div>NotFoundPage</div>
  );
};

export default NotFoundPage;