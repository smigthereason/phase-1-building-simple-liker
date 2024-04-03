// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll('.like-glyph');
const errorModal = document.querySelector('#modal');
const errorMessage = document.querySelector('#modal-message');

errorModal.classList.add('hidden');

function toggleLike(e) {
  const heart = e.target;
  mimicServerCall()
    .then(() => {
      heart.classList.toggle('activated-heart');
      if (heart.classList.contains('activated-heart')) {
        heart.innerText = '♥';
      } else {
        heart.innerText = '♡';
      }
    })
    .catch(() => {
      errorMessage.innerText = 'Oops! Something went wrong.';
      errorModal.classList.remove('hidden');
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}

for (const button of likeButtons) {
  button.addEventListener('click', toggleLike);
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
