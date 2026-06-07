```javascript
const connectBtn =
document.getElementById("connectBtn");

const walletAddress =
document.getElementById("walletAddress");

async function connectWallet(){

  if(!window.ethereum){

    alert("Please install MetaMask Wallet");

    return;
  }

  try{

    const accounts =
    await ethereum.request({
      method:"eth_requestAccounts"
    });

    const user =
    accounts[0];

    walletAddress.innerText =
      user.substring(0,6) +
      "..." +
      user.substring(user.length - 4);

    connectBtn.innerText =
      "Wallet Connected";

  }catch(error){

    console.log(error);

    walletAddress.innerText =
      "Connection Failed";
  }
}

connectBtn.addEventListener(
  "click",
  connectWallet
);

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

  let current = "";

  sections.forEach(section=>{

    const sectionTop =
    section.offsetTop - 150;

    if(pageYOffset >= sectionTop){
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link=>{

    link.classList.remove("active");

    if(link.getAttribute("href")
    === "#" + current){

      link.classList.add("active");
    }

  });

});
```
