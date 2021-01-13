let pick = document.getElementsByClassName("game-item");
let scoreTitle = document.getElementById("score-title");
let score = 0;

for (let i = 0; i < pick.length; i++) {
  pick[i].onclick = () => {
    const pcUser = ["rock", "paper", "scissors"];
    const pcUserPicked = pcUser[Math.floor(Math.random() * pcUser.length)];

    let pickedItem = pick[i].getAttribute("id");
    const result = rules(pickedItem, pcUserPicked);

    if (result === "You win") {
      score++;
      scoreTitle.innerHTML = score;
    }

    //RULES

    //MY PICK
    const playerPick = document.createElement("div");
    playerPick.setAttribute("class", "game-item");
    playerPick.setAttribute("id", pickedItem);

    const myImg = document.createElement("img");
    myImg.setAttribute("src", `icon-${pickedItem}.svg`);

    playerPick.appendChild(myImg);

    //PC PICK
    const pcPick = document.createElement("div");
    pcPick.setAttribute("class", "game-item");
    pcPick.setAttribute("id", pcUserPicked);

    const pcImg = document.createElement("img");
    pcImg.setAttribute("src", `icon-${pcUserPicked}.svg`);

    pcPick.appendChild(pcImg);

    //STATUS

    const message = document.createElement("h3");
    message.setAttribute("class", "result");
    message.innerHTML = result;
    //VERSUS ZONE

    document.getElementById("versus").appendChild(playerPick);
    document.getElementById("versus").appendChild(message);
    document.getElementById("versus").appendChild(pcPick);

    setTimeout(() => {
      document.getElementById("versus").removeChild(playerPick);
      document.getElementById("versus").removeChild(message);
      document.getElementById("versus").removeChild(pcPick);
    }, 1000);
  };
}

const rules = (user, pc) => {
  if (user === "rock") {
    if (pc === "rock") {
      return "Draw";
    } else if (pc === "paper") {
      return "You lose";
    } else {
      return "You win";
    }
  } else if (user === "paper") {
    if (pc === "rock") {
      return "You win";
    } else if (pc === "paper") {
      return "Draw";
    } else {
      return "You lose";
    }
  } else {
    if (pc === "rock") {
      return "You lose";
    } else if (pc === "paper") {
      return "You win";
    } else {
      return "Draw";
    }
  }
};
