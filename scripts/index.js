let deadline;
let pic_link;
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

  a.href = pic_link;
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
  const x = setInterval(async function () {
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
      let response = await fetch(`/init`);
      response = await response.json();
      pic_link = response.link;
      const timer = document.getElementById("timer");
      timer.innerHTML = "";
      createText(timer, "Congratulations on turning 25!")
      wrapper(timer);
    }
  }, 1000);
}

async function init () {
  document.getElementById("timer").innerHTML = "Loading..."
  try {
    let response = await fetch(`/init`);
    response = await response.json();
    pic_link = response.link;
    deadline = response.deadline;
    timer();
  } catch (err) {
    document.getElementById("timer").innerHTML = ""
    alert('something else other than 200 was returned');
  }
}

(function () {
  init();
})();