window.addEventListener("load", () => {
  const screams = document.querySelectorAll(".screams");
  const farts = document.querySelectorAll(".farts div");
  const background = document.querySelector(".background");
  const colors = [ //hex codes
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3",
    "#8b4f55",
    "#0e081f",
    "#9e7f03",
    "#11958C"
  ];

  farts.forEach((fart, index) => {
    fart.addEventListener("click", function() {
      screams[index].currentTime = 0;
      screams[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    background.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      background.removeChild(this);
    });
  };
});
