showInput = () => {
  const body = document.querySelector(".body");

  const inputMarkup = `
        <div class="input">
          <h2>soham@Soham's-Portfolio: $</h2>
          <input type="text" name="command" id="command" />
        </div>`;

  body.insertAdjacentHTML("beforeend", inputMarkup);
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
      document.querySelector("#command").focus();
    }
  }
  addWord();
};
