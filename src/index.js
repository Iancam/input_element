import React, { useRef } from "react";

export const InpElem = ({ node, stateManager, styles }) => {
  const { id, copy, type, parent } = node;
  !copy && console.warn("copy undefined, defaulting to id");
  const divClass = styles.container || "block mt6";
  const labelClass = styles.label || "db mb1";
  const inpClass =
    styles.input || "br2 ba pv2 ph3 black-50 b--light-yellow glow";
  const ref = useRef(null);
  stateManager(node, { ref });
  return (
    <div className={divClass} key={_cursor}>
      <label htmlFor="name" className={labelClass}>
        {copy}
      </label>
      <input type={type} ref={ref} className={inpClass} name={copy || id} />
    </div>
  );
};
