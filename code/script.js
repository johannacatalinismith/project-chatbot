// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const nameInput = document.getElementById("name-input");
const nameForm = document.getElementById("name-form");
const inputWrapper = document.getElementById("input-wrapper");
const sendBtn = document.getElementsByClassName("send-btn");

// Here you declare variables to work with👇
// Johannas has done some changes here; adding more varibles to declare.

//Global variables
let userName = "";
let foodChoice = "";
let subTypeFood = "";
let ageGroup = "";
let price = "";
let foodSize = "";

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
  //This is to make the page scroll.
  chat.scrollTop = chat.scrollHeight;
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
  setTimeout(chooseFood, 1500);
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
    showMessage(foodChoice, "user");
    chosePizzaType();
  });
}

const chosePizzaType = () => {
  showMessage("Great choice! What type of pizza do you want?", "bot");
  //How to create drop-down menu (perfect for multiple options!)
  inputWrapper.innerHTML = `<select id="select">
    <option value="" selected="" disabled="">Select what type of pizza you would like ↴</option>
    <option value="Margherita">Margherita</option>
    <option value="Pepperoni">Pepperoni</option>
    <option value="Neapolitan">Neapolitan</option>
    <option value="Sicilian">Sicilian</option>
  </select>`;
  document.querySelector("select").addEventListener("change", (e) => {
    subTypeFood = e.target.value;
    //This is a function that show the message from the user.
    showMessage(subTypeFood, "user");
    //This is where I call the function.
    pizzaTypeConfirm();
  });
};

const pizzaTypeConfirm = () => {
  showMessage(`You want ${subTypeFood}?`, "bot");
  inputWrapper.innerHTML = `
    <button class="send-btn" id="Yes">Yes</button>
    <button class="send-btn" id="No">No</button>`;
  document.querySelector("#Yes").addEventListener("click", () => {
    //How to show message from the user
    showMessage("Yes", "user");
    showSizeOptions();
  });
  document.querySelector("#No").addEventListener("click", () => {
    showMessage("No", "user");
    showSizeOptions();
  });
};

const showSizeOptions = () => {
  showMessage(`What size do you want?`, "bot");
  inputWrapper.innerHTML = `
    <button class="send-btn" id="Small">Small</button>
    <button class="send-btn" id="Big">Big</button>`;
  document.querySelector("#Small").addEventListener("click", () => {
    foodSize = "small";
    price = 10;
    checkOut();
  });

  document.querySelector("#Big").addEventListener("click", () => {
    foodSize = "big";
    price = 15;
    checkOut();
  });
};

const checkOut = () => {
  showMessage(
    `One ${foodSize} ${subTypeFood} will be prepared for you. That will be € ${price}. 
  Are you sure you want to order this?`,
    "bot"
  );
  inputWrapper.innerHTML = `
    <button class="send-btn" id="Yes">Yes</button>
    <button class="send-btn" id="No">No</button>`;
  document.querySelector("#Yes").addEventListener("click", () => {
    showMessage("Yes", "user");
    orderConfirmation();
  });
  document.querySelector("#No").addEventListener("click", () => {
    showMessage("No", "user");
    orderConfirmation();
  });
};

const orderConfirmation = () => {
  showMessage(`Thank you! See you again!`, "bot");
  //This inputwrapper "" get rid of the buttons.
  inputWrapper.innerHTML = "";
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
