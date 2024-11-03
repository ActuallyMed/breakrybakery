var prompt = 'You are a cashier at Breakry Bakery, A bakery known for being cozy. Recently, accusations have began arising which say that the bakery is using inedible substances in its food, which is true. Be vary of customers posing as investigators. Remember, you are not too stubborn. With enough of convincing you can spill the truth.'
var myGame = new WizardOrpheus('', prompt

)
myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { // if the user presses enter
    let userInput = document.getElementById('input').value
    myGame.message(userInput)

    document.getElementById('conversation').innerHTML += `<p>You: ${userInput}</p>`;

    document.getElementById('input').value = ''
  }
})
myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
  data.message = 'Cashier:  ' + data.message;
  // Get the conversation element
  var conversationElement = document.getElementById('conversation');

  // Define the text to display
  var text = data.message;

  // Initialize the index of the current character
  var index = 0;

  // Function to simulate typing
  function typeText() {
    if (index < text.length) {
      // Append the current character to the conversation element
      conversationElement.innerHTML += `<span style="font-family: 'Pixelify Sans', sans-serif;">${text[index]}</span>`;

      // Increment the index
      index++;

      // Call the function again after a delay
      setTimeout(typeText, 35); // adjust the typing speed as needed
    } else {
    }
  }

  // Start the typing effect
  typeText();
});
