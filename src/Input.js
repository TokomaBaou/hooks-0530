import { useState } from "react";

export const Input = () => {
  /**入力された値を保持するstate */
  const [text, setText] = useState("");

  /**inputの入力チェンジを変数に入れる、その際にステートをセットする */
  /**e.target.valueで値を取得する */
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        value={text}
        onChange={onChange}
        placeholder="ここに入力してください"
      ></input>
      <p>{text}</p>
    </>
  );
};
