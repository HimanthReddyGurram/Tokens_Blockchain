import React from "react";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
function Header() {
  return (
    <header>
      <div className="box" id="logo">
        <h1>
          <AccountBalanceIcon /> Heddy Tokens
        </h1>
      </div>
    </header>
  );
}

export default Header;
