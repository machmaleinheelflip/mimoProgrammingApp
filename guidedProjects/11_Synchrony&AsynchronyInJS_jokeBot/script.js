let jokes = [
    ["What did 0 say to 8?","Nice belt"],
    ["Bist du ein Veganer?","Nope"],
    ["Bist du fly wie Adler?","Jap"]
  ];
  let jokeIndex= 0;
  let jokeButton= document.getElementById("requestJokeButton");
  
  let chatContent = document.querySelector(".chat-content");
  
  appendBotMessage = function (messageText) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message bot-message";
    chatContent.appendChild(messageDiv);
  
    const avatar = document.createElement("div");
    avatar.className="fas fa-robot message-avatar";
    messageDiv.appendChild(avatar);
  
    const contentDiv = document.createElement("div");
    contentDiv.className="message-content";
    contentDiv.textContent = messageText;
    messageDiv.appendChild(contentDiv);
  };
  
  appendBotMessage("Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.");
  
  
  requestJoke = function () {
    appendUserMessage();
    if(jokeIndex >= jokes.length) {
      appendBotMessage("Sorry, I'm out of jokes for now!");
      return;
    }
    jokeButton.style.display="none";
    setTimeout(function(){
      appendBotMessage("Ok, got one.");
    },1000);
  
    setTimeout(function(){
      appendBotMessage(jokes[jokeIndex][0]);
    },1500);
  
    setTimeout(function(){
      appendBotMessage(jokes[jokeIndex][1]);
      jokeIndex++;
        jokeButton.style.display="inline-block";
    },2000);
  };
  
  appendUserMessage = function () {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message user-message";
    chatContent.appendChild(messageDiv);
  
    const avatar = document.createElement("div");
    avatar.className="fas fa-smile message-avatar";
    messageDiv.appendChild(avatar);
  
    const contentDiv = document.createElement("div");
    contentDiv.className="message-content";
    contentDiv.textContent = "Tell me a joke!";
    messageDiv.appendChild(contentDiv);
  };