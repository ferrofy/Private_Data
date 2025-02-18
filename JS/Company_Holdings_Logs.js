const passwords = ["team_ferrofy", "vpx_login", "tanav_login", "member_login"];
let speed = 1;
let new_Line_Speed = 1;
let wrongPasswordSpeed = 10;
let wrongPasswordAttempts = 0;
let lengthErrorAttempts = 0;
const maxPasswordAttempts = 5;
const maxLengthAttempts = 3;
const maxPasswordLength = 30;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const investments = [
  {
    date: "17 Feb 2025",
    person: "VPX",
    amount: 29.2,
    source: "Investments",
    title: "VPX ---> Investments"
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

const total_Investments = investments.reduce((sum, investment) => sum + parseFloat(investment.amount), 0);
const total_Holdings = holdings.reduce((sum, holding) => sum + parseFloat(holding.amount), 0);
const total_Gold_Investments = GoldInvestments.reduce((sum, investment) => sum + parseFloat(investment.finalAmount), 0);
const total_Gold_Tax = GoldInvestments.reduce((sum, investment) => sum + parseFloat(investment.givenTax), 0);
const total_Plan_Investments = planInvestments.reduce((sum, plan) => sum + parseFloat(plan.amount), 0);

let Company_Net_Usable = (total_Holdings + total_Investments - total_Gold_Investments - total_Gold_Tax - total_Plan_Investments).toFixed(2);
let Company_Net = (total_Holdings + total_Investments - total_Plan_Investments).toFixed(2);
let Company_Spent_Balance = (total_Gold_Investments + total_Gold_Tax + total_Plan_Investments).toFixed(2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Text_To_Display = [
  `[br] ---- Holdings Logs ---- [br]`,
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
      window.location.href = 'https://ferrofy.github.io/Private_Data';
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
    window.location.href = 'https://ferrofy.github.io/Private_Data';
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
