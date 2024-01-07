const stringMatching = (input) => {
  const availableCommands = [
    "help",
    "about",
    "skills",
    "education",
    "contact",
    "socials",
    "clear",
  ];

  const closestMatch = availableCommands.reduce(
    (closest, command) => {
      const similarity = commandSimilarity(input, command);
      return similarity > closest.similarity
        ? { command, similarity }
        : closest;
    },
    { command: null, similarity: 0 }
  );

  if (closestMatch.similarity > 0) {
    return closestMatch.command;
  }

  return "";
};

const commandSimilarity = (input, command) => {
  const inputLower = input.toLowerCase();
  const commandLower = command.toLowerCase();

  let similarity = 0;

  for (let i = 0; i < Math.min(inputLower.length, commandLower.length); i++) {
    if (inputLower[i] === commandLower[i]) {
      similarity++;
    } else {
      break;
    }
  }

  return similarity / Math.max(inputLower.length, commandLower.length);
};

export default stringMatching;
