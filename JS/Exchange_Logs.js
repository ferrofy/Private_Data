const passwords = ["team_ferrofy", "vpx_login", "tanav_login","member_login" ];
const transactions = [
  {
    date: "14 Feb 2025",
    action: "Sold",
    name: "ATX",
    amount: 8.53,
    item: "SWEAT",
    original_price: 0.62,
    purchased_price: 0.61,
    company_profit: function() {
      return parseFloat(((this.original_price - this.purchased_price) * this.amount).toFixed(2));
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
    company_profit: function() {
      return parseFloat(((this.sold_price - this.original_price) * this.amount).toFixed(2));
    }
  }
];

const total_profit = {
  "14_Feb_2025": parseFloat((transactions[0].company_profit() + transactions[1].company_profit()).toFixed(2))
};

const Text_To_Display = `>>> On ${transactions[0].date} '${transactions[0].name}' ${transactions[0].action} ${transactions[0].amount} '${transactions[0].item}' for ₹ ${(transactions[0].purchased_price * transactions[0].amount).toFixed(2)} But, Original Price was ₹ ${(transactions[0].original_price * transactions[0].amount).toFixed(2)} Hence Profit ==> ₹ ${transactions[0].company_profit().toFixed(2)} [br] On ${transactions[1].date} '${transactions[1].name}' ${transactions[1].action} ${transactions[1].amount} '${transactions[1].item}' for ₹ ${(transactions[1].sold_price * transactions[1].amount).toFixed(2)} But, Original Price was ₹ ${(transactions[1].original_price * transactions[1].amount).toFixed(2)} Hence Profit ==> ₹ ${transactions[1].company_profit().toFixed(2)} [hr] [br] Total Profit Of Company is : ₹ ${total_profit["14_Feb_2025"].toFixed(2)} [br] Any Error? Contact At team.ferrofy@gmail.com or vpx.ferrofy@gmail.com [br] It's Last Line Of Programm Thank You User For Your Time. Nothing Further :) [hr] [br] Company Profits As Saved On 7009095794@fam In Foam Of Gold On every ₹ 10 Company Made with 3% Tax[br] Note - 7009095794@fam is UPI Of VPX which is UPI For Company for Temporary Basis`;







let speed = 10;
let wrongPasswordSpeed = 10;
let wrongPasswordAttempts = 0;
let lengthErrorAttempts = 0;
const maxPasswordAttempts = 5;
const maxLengthAttempts = 3;
const maxPasswordLength = 30;

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
      window.location.href = 'https://ferrofy.github.io/Home';
    }
  }
}

function displayText() {
  const log = document.getElementById("log");
  log.innerHTML = "";
  let i = 0;

  function typeNextChar() {
    if (i < Text_To_Display.length) {
      if (Text_To_Display.substring(i, i + 4) === "[hr]") {
        log.innerHTML += ' <br> <hr class="neon-hr"> <br> ';
        i += 4;
      } else if (Text_To_Display.substring(i, i + 4) === "[br]") {
        log.innerHTML += '<br> >>> ';
        i += 4;
      } else {
        log.innerHTML += Text_To_Display.charAt(i);
        i++;
      }
      setTimeout(typeNextChar, speed);
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
    window.location.href = 'https://ferrofy.github.io/Home';
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
      }, 3000);
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
