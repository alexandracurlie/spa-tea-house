import React from "react";
import { Button } from "./Button";

export const IncDecBTNs = ({ count, onClick }) => {
  return (
    <React.Fragment>
      <Button className="btn count-btn" onClick={onClick[1]} name={"-"} />
      <p className="count">{count}</p>
      <Button className="btn count-btn" onClick={onClick[0]} name={"+"} />
    </React.Fragment>
  );
};
