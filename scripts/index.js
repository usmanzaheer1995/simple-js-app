const deadline = new Date("May 29, 2020 00:00:00").getTime();

function createText(element_to_append, text, element_type = "div") {
  const p = document.createElement(element_type);
  p.innerHTML = text;
  element_to_append.appendChild(p);
}

function createAnchorTag(element) {
  const a = document.createElement('a');
  // Create the text node for anchor element. 
  const link = document.createTextNode("Here"); 

  // Append the text node to anchor element. 
  a.appendChild(link);

  // a.href = LINK;
  a.href = "ASD";
  a.setAttribute('target', '_blank');
  element.appendChild(a);
}

function wrapper(element) {
  const div = document.createElement('div');
  createAnchorTag(div);
  createText(div, ' is your gift, i hope you like it...', "span");
  div.style.fontSize = '4rem';
  element.appendChild(div);
}

function timer() {
  const x = setInterval(function () {
    const now = new Date().getTime();
    const t = deadline - now;
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = days + "d "
      + hours + "h " + minutes + "m " + seconds + "s ";
    if (t < 0) {
      clearInterval(x);
      const timer = document.getElementById("timer");
      timer.innerHTML = "";
      createText(timer, "Congratulations on turning 25!")
      wrapper(timer);
    }
  }, 1000);
}

(function () {
  timer();
})();