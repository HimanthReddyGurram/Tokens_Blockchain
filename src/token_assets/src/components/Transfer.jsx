import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token } from "../../../declarations/token";
import MoveDownIcon from '@mui/icons-material/MoveDown';
import MoveUpIcon from '@mui/icons-material/MoveUp';

function Transfer() {
  const [recipientId, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [isHidden, setHidden] = useState(true);
  const [feedback, setFeedback] = useState("");
  const [isDisabled, setDisable] = useState(false);

  async function handleClick() {
    setHidden(true);
    setDisable(true);
    const recipient = Principal.fromText(recipientId);
    const amountToTransfer = Number(amount);

    const result = await token.transfer(recipient, amountToTransfer);
    setFeedback(result);
    setHidden(false);
    setDisable(false);
  }

  return (
    <div className="window white">
      <h1><MoveDownIcon /> Transfer <MoveUpIcon /></h1>
      <div className="transfer">
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientId}
                onChange={(e) => {setHidden(true); setId(e.target.value)}}
              />
            </li>
          </ul>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => {setHidden(true); setAmount(e.target.value)}}
              />
            </li>
          </ul>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
