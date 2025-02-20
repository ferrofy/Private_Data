const passwords = ["team_ferrofy", "vpx_login", "tanav_login", "member_login"];
let Redirect_Link = "https://ferrofy.github.io/Private_Data";
let speed = 1;
let new_Line_Speed = 1;
let wrongPasswordSpeed = 7;
let wrongPasswordAttempts = 0;
let lengthErrorAttempts = 0;
const Animation_1 = "______________________________________________________________________________________________________"
const maxPasswordAttempts = 5;
const maxLengthAttempts = 5;
const maxPasswordLength = 30;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const important_dates = [
  {
    FerroFy_Origin: "3 Dec 2024",
    Plan_Pool_0xt_Phase_1: "7 Dec 2024",
    Plan_Pool_0xt_Phase_1_Reselling_1: "13 Dec 2024",
    Plan_Pool_0xt_Phase_1_Reselling_2: "16 Dec 2024",
    Plan_Farm_0xt: "16 Feb 2025",
    Cancel_Plan_Farm_0xt: "19 Feb 2025",
    Plan_Pool_0xt_Phase_2: "19 Feb 2025"
  }
]
const Plan_Pool_0xt_Investments = [
  ////////////////////////////////////////////////////////////////////////////| Phase 1 |////////////////////////////////////////////////////////////////////////////
  {
    VPX: 510,    // 🚀📈 New Investing Journey Start 📈🚀 #1
    Tanav: 610, //  🚀📈 New Investing Journey Start 📈🚀 #2
    AKX: 20,   //   🚀📈 New Investing Journey Start 📈🚀 #3
    KMX: 20   //    🚀📈 New Investing Journey Start 📈🚀 #4
  },
  // First Reseling - AKX ----1.5%----> VPX For 30 Rs ~ 13 Dec 2024 ---- 10 Rs Extra But Not InCluded in Code
  {
    VPX: 530,     // + 20
    Tanav: 610,
    AKX: 0,     // - 20
    KMX: 20
  },
  // Second & Last Reseling - VPX ----1%----> Angel For 20 Rs ~ 16 Dec 2024 --- Actual Price
  {
    VPX: 510,    // - 20
    Tanav: 610,
    AKX: 0,
    KMX: 20,
    Angel: 20 // 🚀📈 New Investing Journey Start 📈🚀 #5
  },
  ////////////////////////////////////////////////////////////////////////////| Phase 2 |////////////////////////////////////////////////////////////////////////////
  {
    VPX: 1000,     // + 490
    Tanav: 1000,  // + 390
    AKX: 80,     // + 80
    KMX: 20,
    Angel: 60, // + 40
    PPX: 200  // 🚀📈 New Investing Journey Start 📈🚀 #6
  } // Add Comma (,) in future You Know your Errors ;D
  ////////////////////////////////////////////////////////////////////////////| Phase 3 |////////////////////////////////////////////////////////////////////////////
  // Not Yet Final Might Be Near 30 Mar 2025 Might 100% Change For the Final List :) . So Don't Concider Yet
  // {
  //   VPX: 1300 ,     // + 300
  //   Tanav: 1300 ,  // + 300
  //   AKX:80 ,
  //   KMX:30 ,
  //   Angel: 90 , // +30
  //   PPX: 500   // + 300  
  //  }
]
const Plan_Pool_0xt_Shares = [
  ////////////////////////////////////////////////////////////////////////////| Phase 1 |////////////////////////////////////////////////////////////////////////////
  {
    VPX: 44,      // 🚀📈 New Investing Journey Start 📈🚀 #1
    Tanav: 53,   //  🚀📈 New Investing Journey Start 📈🚀 #2
    AKX: 1.5,   //   🚀📈 New Investing Journey Start 📈🚀 #3
    KMX: 1.5   //    🚀📈 New Investing Journey Start 📈🚀 #4
  },
  // First Reseling - AKX ----1.5%----> VPX For 30 Rs ~ 13 Dec 2024 ---- 10 Rs Extra But Not InCluded in Code
  {
    VPX: 45.5,  // + 1.5 %
    Tanav: 53,
    AKX: 0,   // - 1.5 %
    KMX: 1.5
  },
  // Second & Last Reseling - VPX ----1%----> Angel For 20 Rs ~ 16 Dec 2024 --- Actual Price
  {
    VPX: 44.5,   // - 1 %
    Tanav: 53,
    AKX: 0,
    KMX: 1.5,
    Angel: 1 // 🚀📈 New Investing Journey Start 📈🚀 #5
  },
  ////////////////////////////////////////////////////////////////////////////| Phase 2 |////////////////////////////////////////////////////////////////////////////
  {
    VPX: 42.5,      // - 10.5 %
    Tanav: 42.5,   // - 2 %
    AKX: 3.5,     // + 3.5 %
    KMX: 0.5,    // - 0.5 %
    Angel: 2.5, // + 1.5%
    PPX: 8.5   // 🚀📈 New Investing Journey Start 📈🚀 #6
  } // Add Comma (,) in future You Know your Errors ;D
  ////////////////////////////////////////////////////////////////////////////| Phase 3 |////////////////////////////////////////////////////////////////////////////
  // Not Yet Final Might Be Near 30 Mar 2025 Might 100% Change For the Final List :) . So Don't Concider Yet So Whole Comment :)
  // {
  //   VPX: 1300 , // + 300
  //   Tanav: 1300 , // + 300
  //   AKX:80 ,
  //   KMX:30 ,
  //   Angel: 90 , // +30
  //   PPX: 500 // + 300   
  //  }
]

const Exchange_Trx = [
  {
    date: "14 Feb 2025",
    action: "Sold",
    name: "ATX",
    amount: 8.53,
    item: "SWEAT",
    original_price: 0.62,
    purchased_price: 0.61,
    company_profit: function () {
      return parseFloat(
        ((this.original_price - this.purchased_price) * this.amount).toFixed(2)
      );
    }
  },
  {
    date: "14 Feb 2025",
    action: "Purchased",
    name: "VPX",
    amount: 8.53,
    item: "SWEAT",
    original_price: 0.61,
    sold_price: 0.62,
    company_profit: function () {
      return parseFloat(
        ((this.sold_price - this.original_price) * this.amount).toFixed(2)
      );
    }
  },
  {
    date: "17 Feb 2025",
    action: "Sold",
    name: "ATX",
    amount: 1.25,
    item: "SWEAT",
    original_price: 0.61,
    purchased_price: 0.60,
    company_profit: function () {
      return parseFloat(
        ((this.original_price - this.purchased_price) * this.amount).toFixed(2)
      );
    }
  },
  {
    date: "17 Feb 2025",
    action: "Purchased",
    name: "VPX",
    amount: 1.25,
    item: "SWEAT",
    original_price: 0.60,
    sold_price: 0.61,
    company_profit: function () {
      return parseFloat(
        ((this.sold_price - this.original_price) * this.amount).toFixed(2)
      );
    }
  }
];

const Daily_Profit_Exchange = {
  "14_Feb_2025": parseFloat(
    (Exchange_Trx[0].company_profit() + Exchange_Trx[1].company_profit()).toFixed(2)
  ),
  "17_Feb_2025": parseFloat(
    (Exchange_Trx[2].company_profit() + Exchange_Trx[3].company_profit()).toFixed(2)
  )
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Total_Pofit_Exchange = Object.values(Daily_Profit_Exchange).reduce((acc, profit) => acc + profit, 0);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Text_To_Display = [
  
  `[hr]>>> FerroFy Origin : ${important_dates[0].FerroFy_Origin} [br] `,
  `${Animation_1} [br]`,
  `Investment Per Person | VPX : ₹ ${Plan_Pool_0xt_Investments[0].VPX} ~ ${Plan_Pool_0xt_Shares[0].VPX} % | `,
  ` Tanav : ₹ ${Plan_Pool_0xt_Investments[0].Tanav} ~ ${Plan_Pool_0xt_Shares[0].Tanav} % | `,
  ` AKX : ₹ ${Plan_Pool_0xt_Investments[0].AKX} ~ ${Plan_Pool_0xt_Shares[0].AKX} % | `,
  ` KMX : ₹ ${Plan_Pool_0xt_Investments[0].KMX} ~ ${Plan_Pool_0xt_Shares[0].KMX} % | [br]`,
  `${Animation_1} [br]`,
  `---->>> Start Plan 'Pool 0xt Phase 1' : ${important_dates[0].Plan_Pool_0xt_Phase_1} ---- `,
  `---->>> ReSelling 1 'Pool 0xt Phase 1' : ${important_dates[0].Plan_Pool_0xt_Phase_1_Reselling_1} ----`,
  `>>> Reselling 1 ~ AKX Gave 1.5% to VPX for ₹ 30 [br]`,
  `${Animation_1} [br]`,
  `ReSelling 1 | VPX : ₹ ${Plan_Pool_0xt_Investments[1].VPX} ~ ${Plan_Pool_0xt_Shares[1].VPX} % | `,
  ` Tanav : ₹ ${Plan_Pool_0xt_Investments[1].Tanav} ~ ${Plan_Pool_0xt_Shares[1].Tanav} % | `,
  ` AKX : ₹ ${Plan_Pool_0xt_Investments[1].AKX} ~ ${Plan_Pool_0xt_Shares[1].AKX} % | `,
  ` KMX : ₹ ${Plan_Pool_0xt_Investments[1].KMX} ~ ${Plan_Pool_0xt_Shares[1].KMX} % | [br]`,
  `${Animation_1} [br]`,
  `---->>> ReSelling 2 'Pool 0xt Phase 1' : ${important_dates[0].Plan_Pool_0xt_Phase_1_Reselling_2} ----`,
  `>>> Reselling 2 ~ VPX Gave 1% to Angel for ₹ 20 [br]`,
  `${Animation_1} [br]`,
  `ReSelling 2 | VPX : ₹ ${Plan_Pool_0xt_Investments[2].VPX} ~ ${Plan_Pool_0xt_Shares[2].VPX} % | `,
  ` Tanav : ₹ ${Plan_Pool_0xt_Investments[2].Tanav} ~ ${Plan_Pool_0xt_Shares[2].Tanav} % | `,
  ` Angel : ₹ ${Plan_Pool_0xt_Investments[2].Angel} ~ ${Plan_Pool_0xt_Shares[2].Angel} % | `,
  ` KMX : ₹ ${Plan_Pool_0xt_Investments[2].KMX} ~ ${Plan_Pool_0xt_Shares[2].KMX} % | [br]`,
  `${Animation_1} [br]`,
  `>>> Collected ₹ 2040 for 'Farm 0xt' [br]`,
  `---->>> Start Plan 'Farm 0xt' : ${important_dates[0].Plan_Farm_0xt} ---- `,
  `>>> Got 3 Days Trial Period [br]`,
  `---->>> Canceled Plan 'Farm 0xt' : ${important_dates[0].Cancel_Plan_Farm_0xt} ---- `,
  `>>> Reason For Cencelation - Plan Farm Giving Pending Payment Due to which Canceled The Plan 'Farm 0xt' [br]`,
  `>>> Recollected all ₹ 2040 And wants to Invest ₹ 1200 in 'Pool 0xt Phase 2' That Plan Gives 3 Months with 27.5k Hashes / Sec [br]`,
  `${Animation_1} [br]`,
  `Investment Per Person | VPX : ₹ ${Plan_Pool_0xt_Investments[3].VPX} ~ ${Plan_Pool_0xt_Shares[3].VPX} % | `,
  ` Tanav : ₹ ${Plan_Pool_0xt_Investments[3].Tanav} ~ ${Plan_Pool_0xt_Shares[3].Tanav} % | `,
  ` AKX : ₹ ${Plan_Pool_0xt_Investments[3].AKX} ~ ${Plan_Pool_0xt_Shares[3].AKX} % | `,
  ` PPX : ₹ ${Plan_Pool_0xt_Investments[3].PPX} ~ ${Plan_Pool_0xt_Shares[3].PPX} % | `,
  ` Angel : ₹ ${Plan_Pool_0xt_Investments[3].Angel} ~ ${Plan_Pool_0xt_Shares[3].Angel} % | `,
  ` KMX : ₹ ${Plan_Pool_0xt_Investments[3].KMX} ~ ${Plan_Pool_0xt_Shares[3].KMX} % | [br]`,
  `${Animation_1} [br]`,
  `---->>> Start Plan 'Pool 0xt Phase 2' : ${important_dates[0].Plan_Pool_0xt_Phase_2} ----`,
  `[hr]`,
  `>>> On ${Exchange_Trx[0].date} '${Exchange_Trx[0].name}' ${Exchange_Trx[0].action} ${Exchange_Trx[0].amount} '${Exchange_Trx[0].item}' for ₹ ${(Exchange_Trx[0].purchased_price * Exchange_Trx[0].amount).toFixed(2)} But, Original Price was ₹ ${(Exchange_Trx[0].original_price * Exchange_Trx[0].amount).toFixed(2)} Hence Profit ==> ₹ ${Exchange_Trx[0].company_profit().toFixed(2)} [br]`,
  `>>> On ${Exchange_Trx[1].date} '${Exchange_Trx[1].name}' ${Exchange_Trx[1].action} ${Exchange_Trx[1].amount} '${Exchange_Trx[1].item}' for ₹ ${(Exchange_Trx[1].sold_price * Exchange_Trx[1].amount).toFixed(2)} But, Original Price was ₹ ${(Exchange_Trx[1].original_price * Exchange_Trx[1].amount).toFixed(2)} Hence Profit ==> ₹ ${Exchange_Trx[1].company_profit().toFixed(2)} [br]`,
  `>>> On ${Exchange_Trx[2].date} '${Exchange_Trx[2].name}' ${Exchange_Trx[2].action} ${Exchange_Trx[2].amount} '${Exchange_Trx[2].item}' for ₹ ${(Exchange_Trx[2].purchased_price * Exchange_Trx[2].amount).toFixed(2)} But, Original Price was ₹ ${(Exchange_Trx[2].original_price * Exchange_Trx[2].amount).toFixed(2)} Hence Profit ==> ₹ ${Exchange_Trx[2].company_profit().toFixed(2)} [br]`,
  `>>> On ${Exchange_Trx[3].date} '${Exchange_Trx[3].name}' ${Exchange_Trx[3].action} ${Exchange_Trx[3].amount} '${Exchange_Trx[3].item}' for ₹ ${(Exchange_Trx[3].sold_price * Exchange_Trx[3].amount).toFixed(2)} But, Original Price was ₹ ${(Exchange_Trx[3].original_price * Exchange_Trx[3].amount).toFixed(2)} Hence Profit ==> ₹ ${Exchange_Trx[3].company_profit().toFixed(2)} [br]`,
  `${Animation_1}[br]`,
  `>>> 14 Feb Profit : ₹ ${Daily_Profit_Exchange["14_Feb_2025"]} [br] `,
  `>>> 17 Feb Profit : ₹ ${Daily_Profit_Exchange["17_Feb_2025"]} [br] ` ,
  `[hr] >>> Total Profit : ₹ ${(Total_Pofit_Exchange.toFixed(2))} [br]`,
  `[hr]`,
  `>>> Any Error? Contact At team.ferrofy@gmail.com or vpx.ferrofy@gmail.com [br][br]`,
  `>>> It's Last Line Of Program. Thank You User For Your Time. Nothing Further :) [br][br]`
];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("password").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    startLog();
  } else {
    if (event.target.value.length >= maxPasswordLength) {
      event.preventDefault();
      showLengthError();
    }
  }
});

function startLog() {
  const passwordInput = document.getElementById("password").value.toLowerCase();
  if (passwordInput.length > maxPasswordLength) {
    showLengthError();
    return;
  }

  if (passwords.includes(passwordInput)) {
    document.querySelector(".password-container").style.display = "none";
    displayText();
  } else {
    wrongPasswordAttempts++;
    showError(passwordInput);
    if (wrongPasswordAttempts >= maxPasswordAttempts) {
      window.location.href = 'Redirect_Link ';
    }
  }
}

function displayText() {
  const log = document.getElementById("log");
  log.innerHTML = "";
  let elementIndex = 0;
  let charIndex = 0;
  let currentElement = Text_To_Display[elementIndex].split("");

  function typeNextChar() {
    if (charIndex < currentElement.length) {
      if (Text_To_Display[elementIndex].substring(charIndex, charIndex + 4) === "[hr]") {
        log.innerHTML += ' <br> <hr class="neon-hr"> <br> ';
        charIndex += 4;
      } else if (Text_To_Display[elementIndex].substring(charIndex, charIndex + 4) === "[br]") {
        log.innerHTML += '<br>';
        charIndex += 4;
      } else if (Text_To_Display[elementIndex].substring(charIndex, charIndex + 4) === "----") {
        let endPos = Text_To_Display[elementIndex].indexOf("----", charIndex + 4);
        if (endPos !== -1) {
          let midText = Text_To_Display[elementIndex].substring(charIndex + 4, endPos);
          log.innerHTML += `<div style=" color:gold;">${midText}</div>`;
          charIndex = endPos + 4;
        } else {
          log.innerHTML += currentElement[charIndex];
          charIndex++;
        }
      } else {
        log.innerHTML += currentElement[charIndex];
        charIndex++;
      }
      setTimeout(typeNextChar, speed);
    } else if (elementIndex < Text_To_Display.length - 1) {
      elementIndex++;
      charIndex = 0;
      currentElement = Text_To_Display[elementIndex].split("");
      setTimeout(typeNextChar, new_Line_Speed);
    }
  }

  typeNextChar();
}

function showError(passwordInput) {
  const attemptsLeft = maxPasswordAttempts - wrongPasswordAttempts;
  const errorMessage = `Dear User, You Entered "${passwordInput}" Which Is Wrong. Please Retry.[br]Attempts Left: ${attemptsLeft}[br]Thank You For Your Time`;
  displayOverlayMessage(errorMessage, wrongPasswordSpeed);
}

function showLengthError() {
  lengthErrorAttempts++;
  const attemptsLeft = maxLengthAttempts - lengthErrorAttempts;
  const errorMessage = `Dear User, You Entered Password More Than 30 Characters Which Is Not Allowed.[br]Attempts Left: ${attemptsLeft}[br]Thank You For Your Time`;
  displayOverlayMessage(errorMessage, wrongPasswordSpeed);
  if (lengthErrorAttempts >= maxLengthAttempts) {
    window.location.href = 'Redirect_Link ';
  }
}

function displayOverlayMessage(message, speed) {
  let errorIndex = 0;
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = '#121212';
  overlay.style.color = '#00FF00';
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.fontSize = '24px';
  overlay.style.textAlign = 'center';
  overlay.style.zIndex = 1000;
  overlay.innerHTML = "";
  document.body.appendChild(overlay);

  function typeMessage() {
    if (errorIndex < message.length) {
      if (message.substring(errorIndex, errorIndex + 4) === "[br]") {
        overlay.innerHTML += '<br>';
        errorIndex += 4;
      } else {
        overlay.innerHTML += message.charAt(errorIndex);
        errorIndex++;
      }
      setTimeout(typeMessage, speed);
    } else {
      overlay.addEventListener("click", () => {
        document.body.removeChild(overlay);
      });
      setTimeout(() => {
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay);
        }
      }, 2500);
    }
  }

  typeMessage();
}

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
