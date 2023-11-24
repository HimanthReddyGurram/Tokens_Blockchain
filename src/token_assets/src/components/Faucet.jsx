import React, { useState } from "react";
import { token } from "../../../declarations/token";
import TokenIcon from '@mui/icons-material/Token';

function Faucet(props) {
  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setText] = useState("Get free tokens");

  async function handleClick(event) {
    setDisable(true);
    const result = await token.payOut();
    console.log("payout: " + result);
    setText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <TokenIcon /> Free tokens
      </h2>
      <label>
        Get your free Heddy tokens here, Claim 10,000 HEDDY tokens to 2vxsx-fae
      </label>
      <p className="trade-buttons">
        <button onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
