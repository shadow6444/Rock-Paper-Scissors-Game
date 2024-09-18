const COMBINATIONS = [
  {
    user: "rock",
    computer: "scissor",
    message: "User: Rock, Computer: Scissor. You win.",
  },
  {
    user: "paper",
    computer: "rock",
    message: "User: Paper, Computer: Rock. You win.",
  },
  {
    user: "scissor",
    computer: "paper",
    message: "User: Scissor, Computer: Paper. You win.",
  },
  {
    user: "scissor",
    computer: "rock",
    message: "User: Scissor, Computer: Rock. You lost.",
  },
  {
    user: "rock",
    computer: "paper",
    message: "User: Rock, Computer: Paper. You lost.",
  },
  {
    user: "paper",
    computer: "scissor",
    message: "User: Paper, Computer: Scissor. You lost.",
  },
  {
    user: 'rock',
    computer: 'rock',
    message: "User: Rock, Computer: Rock. It's a draw."
  },
  {
    user: 'paper',
    computer: 'paper',
    message: "User: Paper, Computer: Paper. It's a draw."
  },
  {
    user: 'scissor',
    computer: 'scissor',
    message: "User: Scissor, Computer: Scissor. It's a draw."
  },
];

export default COMBINATIONS;