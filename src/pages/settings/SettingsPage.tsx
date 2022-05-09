import React, { useContext, useEffect } from "react";
import { MainHeaderContext } from "../../contexts/providers/MainHeaderProvider";

const SettingsPage = () => {
  const { setMainHeaderTitle } = useContext(MainHeaderContext)!;

  useEffect(() => {
    setMainHeaderTitle("Settings")
  }, [setMainHeaderTitle]);

  return (
    <div>SettingsPage</div>
  );
};

export default SettingsPage;