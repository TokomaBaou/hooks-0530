import { useState } from "react";

export const ToggleButton = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    /**現在の状態の反対処理 */
    setOpen((prevState) => !prevState);
  };

  const [changeTab, setChangeTab] = useState(true);

  const countTab = () => {
    setChangeTab(true);
  };
  const inputTab = () => {
    setChangeTab(false);
  };
  return (
    <>
      <button onClick={toggle}>{open ? "OPEN" : "CLOSE"}</button>
      <button onClick={countTab}>count</button>
      <button onClick={inputTab}>input</button>
      {changeTab === true ? <CountUp /> : <Input />}
    </>
  );
};
