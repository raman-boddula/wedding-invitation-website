const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionX = offset*(-0.3)-100 + "px";
})

let hasCelebrated = false;

document.addEventListener('scroll', () => {
  const firstPage = document.getElementById('home-img-lg');
  const firstPageBottom = firstPage.getBoundingClientRect().bottom;

  if (!hasCelebrated && firstPageBottom <= window.innerHeight + 50) {
    let i = 0;
    while (i <= 10) {
      celebrate();
      hasCelebrated = true;
      i++;
    }
  }
});
function celebrate() {
  confetti({
    spread: 70,
    startVelocity: 30,
    elementCount: 1000,
    dragFriction: 0.1,
    duration: 3000,
    colors: ['#bb0000', '#ffffff', '#00bb00', '#00aaff', '#ffbb00']
  });
}
const addToCalender = () => {
  celebrate();
  setTimeout(() => {
    window.open(
      "https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Raman+and+Gayatri&dates=20250212T133000Z/20250212T173000Z&details=Join+us+to+celebrate+the+wedding+of+Raman+and+Gayatri&location=Vaaraahi+Banquets+and+Conference+Center,+Level+3,+SLN+Terminus,+Jayabheri+Enclave,+Gachibowli,+Hyderabad,+Telangana+500032",
      "_blank"
    );
  }, 1000);
};

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=3100;
    parallax1.style.backgroundPositionY = offset*(0.1) + "px";
})

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=4800;
    parallax2.style.backgroundPositionY = offset*(-0.1) + "px";
})

function myFunction() {
    document.getElementById("check").checked = false;
  }


  
function reveal() {
var reveals = document.querySelectorAll(".reveal");
  
for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
  
window.addEventListener("scroll", reveal);