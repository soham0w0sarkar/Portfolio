import commands from "./commands.js";

const history = [];
let historyIndex = 0;

const clear = () => {
  const body = document.querySelector(".body");
  const pre = body.querySelector("pre");
  body.innerHTML = "";
  body.appendChild(pre);
};

const showInput = () => {
  const body = document.querySelector(".body");

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
  const body = document.querySelector(".body");

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
      var h2 = document.createElement("h2");
      h2.textContent = `Type "help" to get started`;
      h2.classList.add("help");
      pre.parentNode.insertBefore(h2, pre.nextSibling);
    }
  }
  addWord();
};
