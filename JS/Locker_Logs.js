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
    amount: 0.09 * 2,
    source: " Exchange ",
    title: " ATX ---> Server --> VPX "
  },
  {
    date: "17 Feb 2025",
    amount: 0.01 * 2,
    source: " Exchange ",
    title: " ATX ---> Server --> VPX "
  }//,
//  {
  //  date: "17 Feb 2025",
   // person: "VPX",
    //amount: 30.1,
  ///  company_profit: 30.1 *,
  ///  source: " Invested ",
  ///  title: " VPX --> Invetments "
 /// },
]
const Text_To_Display = [
  
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
