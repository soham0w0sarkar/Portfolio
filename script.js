import commands from "./commands.js";
const body = document.querySelector(".body");
const history = [];
let historyIndex = 0;

const clear = () => {
  const pre = body.querySelector("pre");
  body.innerHTML = "";
  body.appendChild(pre);
};

const showInput = () => {
  const inputMarkup = `
          <p>soham@Soham's-Portfolio</p><span>: ~$</span>
          <input type="text" name="command" id="command" />`;

  const input = document.createElement("div");
  input.classList.add("input");
  input.innerHTML = inputMarkup;

  body.appendChild(input);

  const commands = document.querySelectorAll("#command");
  const lastCommand = commands[commands.length - 1];
  lastCommand.focus();

  lastCommand.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "Enter":
        event.preventDefault();
        event.target.disabled = true;
        showOutput(this.value);
        history.push(this.value);
        break;
      case "ArrowUp":
        event.preventDefault();
        if (history.length > 0)
          event.target.value = history[--historyIndex] || "";
        break;
      case "ArrowDown":
        event.preventDefault();
        event.target.value = history[++historyIndex] || "";
        break;
    }
  });
};

const showOutput = (command) => {
  if (command === "clear") {
    clear();
    showInput();
    return;
  }

  const output = commands(command);

  const outputMarkup = `
        <div class="output">
        ${output}
        </div>`;

  body.insertAdjacentHTML("beforeend", outputMarkup);

  showInput();
};

const loadimage = () => {
  const image = new Image();
  image.src = "./bg.jpg";
  image.onload = () => {
    document.querySelector("body").style.backgroundImage = `url(${image.src})`;
  };
};

window.onload = function () {
  var pre = document.querySelector("pre");
  var text = pre.textContent;
  var words = text.split(" ");
  pre.textContent = "";
  var i = 0;
  function addWord() {
    if (i < words.length) {
      pre.textContent += words[i] + " ";
      i++;
      setTimeout(addWord, 0);
    } else {
      showInput();
      const h2 = document.createElement("h2");
      h2.textContent = `Type "help" to get started`;
      h2.classList.add("help");
      pre.parentNode.insertBefore(h2, pre.nextSibling);
      loadimage();
    }
  }
  addWord();
};
