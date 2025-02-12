// emoji list
const emojis = ["🔨", "❓","⚠️", "🚧"];

function init(){
  console.log("adding the emojis")
  
  let emojiCount = Math.round((window.innerHeight + window.innerWidth) / 25);
  
  // create each emoji
  for (let i = 0; i < emojiCount; i++){
    let p = createEmoji();
    document.body.appendChild(p);
  }
  
  function createEmoji(){
    let p = document.createElement("p");
    p.style.position = "absolute"
    p.style.zIndex = -1
    
    const y = getInt(0, window.innerHeight);
    const x = getInt(0, window.innerWidth);
    
    p.style.left = x+"px"
    p.style.top = y+"px"

    p.innerText = emojis[ getInt( 0, emojis.length ) ]
    return p
  }
}

// get int lol
function getInt(max, min){
  return Math.floor(Math.random() * (max - min) + min);
}

window.onload = init();