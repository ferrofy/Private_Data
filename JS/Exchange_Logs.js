const passwords = ["team_ferrofy", "vpx_login", "tanav_login", "member_login"];
let speed = 1;
let new_Line_Speed = 1;
let wrongPasswordSpeed = 10;
let wrongPasswordAttempts = 0;
let lengthErrorAttempts = 0;
const maxPasswordAttempts = 5;
const maxLengthAttempts = 3;
const maxPasswordLength = 30;
const transactions = [
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
    (transactions[0].company_profit() + transactions[1].company_profit()).toFixed(2)
  ),
  "17_Feb_2025": parseFloat(
    (transactions[2].company_profit() + transactions[3].company_profit()).toFixed(2)
  )
};

const total_profit = Object.values(daily_profit).reduce((acc, profit) => acc + profit, 0);

const Text_To_Display = [
  
  `>>> On ${transactions[0].date} '${transactions[0].name}' ${transactions[0].action} ${transactions[0].amount} '${transactions[0].item}' for ₹ ${(transactions[0].purchased_price * transactions[0].amount).toFixed(2)} But, Original Price was ₹ ${(transactions[0].original_price * transactions[0].amount).toFixed(2)} Hence Profit ==> ₹ ${transactions[0].company_profit().toFixed(2)} [br][br]`,
  `>>> On ${transactions[1].date} '${transactions[1].name}' ${transactions[1].action} ${transactions[1].amount} '${transactions[1].item}' for ₹ ${(transactions[1].sold_price * transactions[1].amount).toFixed(2)} But, Original Price was ₹ ${(transactions[1].original_price * transactions[1].amount).toFixed(2)} Hence Profit ==> ₹ ${transactions[1].company_profit().toFixed(2)} [br][br]`,
  `>>> On ${transactions[2].date} '${transactions[2].name}' ${transactions[2].action} ${transactions[2].amount} '${transactions[2].item}' for ₹ ${(transactions[2].purchased_price * transactions[2].amount).toFixed(2)} But, Original Price was ₹ ${(transactions[2].original_price * transactions[2].amount).toFixed(2)} Hence Profit ==> ₹ ${transactions[2].company_profit().toFixed(2)} [br][br]`,
  `>>> On ${transactions[3].date} '${transactions[3].name}' ${transactions[3].action} ${transactions[3].amount} '${transactions[3].item}' for ₹ ${(transactions[3].sold_price * transactions[3].amount).toFixed(2)} But, Original Price was ₹ ${(transactions[3].original_price * transactions[3].amount).toFixed(2)} Hence Profit ==> ₹ ${transactions[3].company_profit().toFixed(2)} [br][br]`,
  
  `[hr]>>> Profit Of 14 Feb 2025 is : ₹ ${daily_profit["14_Feb_2025"].toFixed(2)} [br]`,
  `>>> Profit Of 17 Feb 2025 is : ₹ ${daily_profit["17_Feb_2025"].toFixed(2)} [br]`,
  
  `[hr]>>> Total Profit Of Company is : ₹ ${total_profit.toFixed(2)} [br]`,
  
  `[hr]>>> Any Error? Contact At team.ferrofy@gmail.com or vpx.ferrofy@gmail.com [br][br]`,
  `>>> It's Last Line Of Program. Thank You User For Your Time. Nothing Further :) [hr] [br][br]`
];

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
      }else {
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
