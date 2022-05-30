import { useState } from "react";

export const ToggleButton = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    /**現在の状態の反対処理 */
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <button></button>
    </>
  );
};
