console.log('hello from script');
const synth = window.speechSynthesis;

const speak = text => {
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
  }
  let utterThis = new SpeechSynthesisUtterance(text);
  synth.speak(utterThis);
};

document.querySelector('#How would you describe your perfect day?').onclick = () => {
  speak('I am a cat. I am happy when I am cuddled and bum-patted. Also, I love to eat. Ha ha haa');
};

document.querySelector('#How are you so excited to eat the same food day after day for years?').onclick = () => {
  speak('Right! That sucks. Can you tell my mom?');
};


document.querySelector('#Do you know that you're adorable?').onclick = () => {
  speak('You bet?);
};

document.querySelector('#If you had a job, what would it be?').onclick = () => {
  speak('Next question, please.');
};
