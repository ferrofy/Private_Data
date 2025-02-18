const passwords = ["team_ferrofy", "vpx_login", "tanav_login", "member_login"];
let Redirect_Link = "https://ferrofy.github.io/Private_Data";
let speed = 1;
let new_Line_Speed = 1;
let wrongPasswordSpeed = 7;
let wrongPasswordAttempts = 0;
let lengthErrorAttempts = 0;
const maxPasswordAttempts = 5;
const maxLengthAttempts = 5;
const maxPasswordLength = 30;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const important_dates = [
  {
    FerroFy_Origin: "3 Dec 2024",
    Plan_Pool_0xt: "7 Dec 2024",
    Plan_Farm_0xt: "16 Feb 2025"
  }
]
const investments = [
  {
    date: "17 Feb 2025",
    person: "VPX",
    amount: 29.2,
    source: "Investments",
    title: "VPX ---> Investments"
  }
];
const transactions = [
  {
    date: "17 Feb 2025",
    person: "VPX",
    amount: 30.1,
    company_deduction_percentage: 3 / 100,
    get company_deduction_amount() {
      return (this.amount * this.company_deduction_percentage).toFixed(2);
    },
    get final_amount() {
      return (this.amount - this.company_deduction_amount).toFixed(2);
    },
    action: "Invested",
    reaction: "Investment"
  }
];
const holdings = [
  {
    date: "14 Feb 2025",
    person: "ATX & VPX",
    amount: (0.09 * 2).toFixed(2),
    source: "Exchange",
    title: "ATX ---> Server ---> VPX"
  },
  {
    date: "17 Feb 2025",
    person: "ATX & VPX",
    amount: (0.01 * 2).toFixed(2),
    source: "Exchange",
    title: "ATX ---> Server ---> VPX"
  },
  {
    date: "17 Feb 2025",
    person: "VPX",
    amount: 0.90.toFixed(2),
    source: "Investments",
    title: "VPX ---> Company Commission"
  }
];
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

const daily_profit = {
  "14_Feb_2025": parseFloat(
    (Exchange_Trx[0].company_profit() + Exchange_Trx[1].company_profit()).toFixed(2)
  ),
  "17_Feb_2025": parseFloat(
    (Exchange_Trx[2].company_profit() + Exchange_Trx[3].company_profit()).toFixed(2)
  )
};
const planInvestments = [
  {
    date: "Not Yet",
    amount: 0
  }
];

const Gold_Tax = 3 / 100;

const GoldInvestments = [
  {
    date: "17 Feb 2025",
    amount: 30.1,
    get givenTax() {
      return (this.amount * Gold_Tax).toFixed(2);
    },
    get finalAmount() {
      return (this.amount - this.givenTax).toFixed(2);
    }
  }
];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const total_Investments = investments.reduce((sum, investment) => sum + parseFloat(investment.amount), 0);
const total_Holdings = holdings.reduce((sum, holding) => sum + parseFloat(holding.amount), 0);
const total_Gold_Investments = GoldInvestments.reduce((sum, investment) => sum + parseFloat(investment.finalAmount), 0);
const total_Gold_Tax = GoldInvestments.reduce((sum, investment) => sum + parseFloat(investment.givenTax), 0);
const total_Plan_Investments = planInvestments.reduce((sum, plan) => sum + parseFloat(plan.amount), 0);
const total_profit = Object.values(daily_profit).reduce((acc, profit) => acc + profit, 0);

let Company_Net_Usable = (total_Holdings + total_Investments - total_Gold_Investments - total_Gold_Tax - total_Plan_Investments).toFixed(2);
let Company_Net = (total_Holdings + total_Investments - total_Plan_Investments).toFixed(2);
let Company_Spent_Balance = (total_Gold_Investments + total_Gold_Tax + total_Plan_Investments).toFixed(2);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Text_To_Display = [

  `[hr] [br] ---- FerroFy History ---- [br]`,
  `>>> FerroFy Start - ${important_dates[0].FerroFy_Origin} [br]`,

  `[hr] [br] ---- Pool 0xt ---- [br]`,
  `>>> Start Plan 'Pool 0xt' : ${important_dates[0].Plan_Pool_0xt} [br] `,
  `>>> Investments - {VPX:510 , Tanav:610 , AKX:20 , KMX:20} [br] `,
  `>>> Shares in % - {VPX:44 , Tanav:53 , AKX:1.5 , KMX:1.5} [br] `,
  `>>> Reselling AKX ---1.5%---> VPX Just for 30 Rs On 13 Dec 2024 [br] `,
  `>>> New Shares in % {VPX:45.5 , Tanav:53 , KMX:1.5} [br] `,
  `>>> Reselling VPX ---1%---> Angel Just for 20 Rs On 16 Dec 2024 [br] `,
  `>>> New Shares in % {VPX:44.5 , Tanav:53 , KMX:1.5 , Angel:1} [br] `,

  `[hr] [br] ---- Farm 0xt ----`,
  `>>> Start Plan 'Farm 0xt' : ${important_dates[0].Plan_Farm_0xt} [br] `,
  `>>> Investments - {VPX:725 , Tanav:725 , PPX:500 , AKX:80 , Angel:70} [br] `,
  `>>> Shares in % - {VPX:35.4 , Tanav:35.4 , PPX:22.5 , AKX:3.6 , Angel:3.1} [br] `,

  `[hr] [br] ---- Investments Logs ---- [br]`,
  `>>> ${transactions[0].person} ${transactions[0].action} - ₹ ${transactions[0].amount} Where , Company Got - ₹ ${transactions[0].company_deduction_amount} and ${transactions[0].person} ${transactions[0].reaction} - ₹ ${transactions[0].final_amount} on ${transactions[0].date}`,

  `[hr] [br] ---- Exchange Logs ---- [br]`,
  `>>> On ${Exchange_Trx[0].date} '${Exchange_Trx[0].name}' ${Exchange_Trx[0].action} ${Exchange_Trx[0].amount} '${Exchange_Trx[0].item}' for ₹ ${(Exchange_Trx[0].purchased_price * Exchange_Trx[0].amount).toFixed(2)} But, Original Price was ₹ ${(Exchange_Trx[0].original_price * Exchange_Trx[0].amount).toFixed(2)} Hence Profit ==> ₹ ${Exchange_Trx[0].company_profit().toFixed(2)} [br][br]`,
  `>>> On ${Exchange_Trx[1].date} '${Exchange_Trx[1].name}' ${Exchange_Trx[1].action} ${Exchange_Trx[1].amount} '${Exchange_Trx[1].item}' for ₹ ${(Exchange_Trx[1].sold_price * Exchange_Trx[1].amount).toFixed(2)} But, Original Price was ₹ ${(Exchange_Trx[1].original_price * Exchange_Trx[1].amount).toFixed(2)} Hence Profit ==> ₹ ${Exchange_Trx[1].company_profit().toFixed(2)} [br][br]`,
  `>>> On ${Exchange_Trx[2].date} '${Exchange_Trx[2].name}' ${Exchange_Trx[2].action} ${Exchange_Trx[2].amount} '${Exchange_Trx[2].item}' for ₹ ${(Exchange_Trx[2].purchased_price * Exchange_Trx[2].amount).toFixed(2)} But, Original Price was ₹ ${(Exchange_Trx[2].original_price * Exchange_Trx[2].amount).toFixed(2)} Hence Profit ==> ₹ ${Exchange_Trx[2].company_profit().toFixed(2)} [br][br]`,
  `>>> On ${Exchange_Trx[3].date} '${Exchange_Trx[3].name}' ${Exchange_Trx[3].action} ${Exchange_Trx[3].amount} '${Exchange_Trx[3].item}' for ₹ ${(Exchange_Trx[3].sold_price * Exchange_Trx[3].amount).toFixed(2)} But, Original Price was ₹ ${(Exchange_Trx[3].original_price * Exchange_Trx[3].amount).toFixed(2)} Hence Profit ==> ₹ ${Exchange_Trx[3].company_profit().toFixed(2)} [br][br]`,
  `>>> Profit Of 14 Feb 2025 is : ₹ ${daily_profit["14_Feb_2025"].toFixed(2)} [br]`,
  `>>> Profit Of 17 Feb 2025 is : ₹ ${daily_profit["17_Feb_2025"].toFixed(2)} [br]`,
  `>>> Total Profit Of Company is : ₹ ${total_profit.toFixed(2)} [br]`,
  
  `[hr] [br] ---- Holdings Logs ---- [br]`,
  ...holdings.map(holding => `>>> On ${holding.date} Company Got ₹ ${holding.amount} from ${holding.person} ${holding.source} with title ${holding.title} [br] [br]`),
  
  `[hr] [br] ---- Investments Logs ---- [br]`,
  ...investments.map(investment => `>>> On ${investment.date} Company Got ₹ ${investment.amount} from ${investment.person} ${investment.source} with title ${investment.title} [br] [br]`),
  
  `[hr] [br] ---- Gold Investments Logs ---- [br]`,
  ...GoldInvestments.map(investment => `>>> On ${investment.date} Company Got ₹ ${investment.finalAmount} from which ₹ ${(investment.amount - investment.finalAmount).toFixed(2)} is tax [br] [br]`),
  
  `[hr] [br] ---- Actual Stats ---- [br]`,
  `>>> Total Holdings - ₹ ${total_Holdings.toFixed(2)} [br]`,
  `>>> Total Investments - ₹ ${total_Investments.toFixed(2)} [br]`,
  `>>> Total Gold Investments - ₹ ${total_Gold_Investments.toFixed(2)} [br]`,
  
  `[hr] [br] ---- Current Stats ---- [br]`,
  `>>> Total Balance - ₹ ${Company_Net} [br]`,
  `>>> Total Spent Balance - ₹ ${Company_Spent_Balance} [br]`,
  `>>> Total Usable Balance - ₹ ${Company_Net_Usable} [br]`,

  `[hr] [br] ---- Contact Team ----`,  
  `[hr]>>> Any Error? Contact At team.ferrofy@gmail.com or vpx.ferrofy@gmail.com [br][br]`,
  `>>> It's Last Line Of Program. Thank You User For Your Time. Nothing Further :) [br][br]`
];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
                log.innerHTML += `<div style="text-align: center; font-size: 2em;">${midText}</div>`;
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
