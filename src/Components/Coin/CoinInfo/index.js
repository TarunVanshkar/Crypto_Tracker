import React, { useState } from "react";
import "./style.css";

const CoinInfo = ({ heading, desc }) => {
  const shortDesc =
    desc.slice(0, 350) + " <p style='color:var(--grey)'> Read More...</p>";
  const longDesc = desc + " <p style='color:var(--grey)'> Read less...</p>";
  const [flag, setFlag] = useState(false);
  return (
    <div className="wrapper" style={{ padding: "0rem 1rem" }}>
      <h2 className="coin-heading">{heading}</h2>
      {desc.length > 350 ? (
        <p
          onClick={() => setFlag(!flag)}
          className="coin-desc"
          dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
        />
      ) : (
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      )}
    </div>
  );
};

export default CoinInfo;
