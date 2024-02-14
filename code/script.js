// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const nameInput = document.getElementById("name-input");
const nameForm = document.getElementById("name-form");
const inputWrapper = document.getElementById("input-wrapper");
const sendBtn = document.getElementsByClassName("send-btn");

// Here you declare variables to work with👇
// Johannas has done some changes here; adding more varibles to declare.
let userName = "";
let foodChoice = "";
let subTypeFood = "";
let ageGroup = "";
let price = "";

// Functions goes here 👇

// A function to start the conversation
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, what's your name?", "bot");
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
};

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === "user") {
    chat.innerHTML += `<section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>`;
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === "bot") {
    chat.innerHTML += `<section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>`;
  }
};

//This is how to call the function (The bot says hello and ask for your name)

greetUser();

//This is the event listener (the user tell the bot their name)

//nameinput is variable and addeventlistner is a method, change is an event.
nameInput.addEventListener("change", (e) => {
  userName = e.target.value;
});

nameForm.addEventListener("submit", (e) => {
  //prevent default prevents the page from reloading
  e.preventDefault();
  showMessage(`${userName}`, "user");
  //nameinput value "" remove the text from the input field after user has typed and send msg.
  nameInput.value = "";
  setTimeout(chooseFood, 2000);
});

//This function asks what type of food the user wants to eat
const chooseFood = () => {
  showMessage(
    `Hello ${userName}! What would you like to eat today? Make your choice`,
    "bot"
  );
  addButtons();
};

function addButtons() {
  inputWrapper.innerHTML = `
    <button class="send-btn" id="pizza">Pizza</button>
    <button class="send-btn" id="pasta">Pasta</button>
    <button class="send-btn" id="salad">Salad</button>`;
  document.querySelector("#pizza").addEventListener("click", () => {
    foodChoice = "pizza";
    chosePizzaType();
  });
}

const chosePizzaType = () => {
  showMessage("Great choice! What type of pizza do you want?", "bot");
  //How to create drop-down menu (perfect for multiple options!)
  inputWrapper.innerHTML = `<select id="select">
    <option value="" selected="" disabled="">Select what type of pizza you would like ↴</option>
    <option value="4 pieces">4 pieces</option>
    <option value="8 pieces">8 pieces</option>
    <option value="12 pieces">12 pieces</option>
    <option value="16 pieces">16 pieces</option>
  </select>
   `;
  document.querySelector("select").addEventListener("change", (e) => {
   subTypeFood = e.target.value
  });
};

const showIcing = (message) => {
  questionNumber++;
  botReply(
    `A ${message} cake, what a great choice! Do you want icing?<br/>(+ 5 €)`
  );
  inputWrapper.innerHTML = `
  <button id="yesBtn">Yes please!</button>
  <button id="noBtn">No, too sweet!</button>
  `;
  receivedInput = true;
  document
    .getElementById("yesBtn")
    .addEventListener("click", () => nextQuestion("with icing"));
  document
    .getElementById("noBtn")
    .addEventListener("click", () => nextQuestion("without icing"));
};

/*





const chosePizzaType = () => {
  if (userName == "") {
    showMessage("Pizza, What type of pizza do you want?", "bot");
  } else {
    showMessage(`Cool, ${userName}! What size do you want?`, "bot");
  }
};


  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};



// Eventlisteners goes here 👇

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);



*/
