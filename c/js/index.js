document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 3.75 + "px";
document.body.style.fontSize = "0.12rem";
//生成随机数
function my_ran(n, min, max) {
  var arr = [];
  var arr2 = [];
  for (i = 0; i < max - min + 1; i++) {
    arr[i] = i + min;
  }
  for (
    var j, x, i = arr.length;
    i;
    j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x
  );
  for (i = 0; i < n; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

let blessedsj = my_ran(24, 1, 38);
let blessed = "";
for (let i = 0; i < 24; i++) {
  blessed +=
    '<div class="blessed-pic-li"><img src = "https://cdn.jsdelivr.net/gh/ffcdn/fastly@16/c/images/pic/pic (' +
    blessedsj[i] +
    ').jpeg" class = "blessed-pic-li-img" ></div>';
}
document.getElementById("blessed").innerHTML = blessed;

if (localStorage.getItem("cp") != null) {
  console.log(localStorage.getItem("cp"));
} else {
  localStorage.setItem("cp", 0);
}

document.getElementById("completedNum").innerText = localStorage.getItem("cp");

document.getElementById("fxbutton").onclick = function () {
  let num = localStorage.getItem("cp");
  num = Number(num) + 2;
  if (num > 15){
    num = 15;
    goto(ed)
  }
  localStorage.setItem("cp", num);
  document.getElementById("completedNum").innerText =
    localStorage.getItem("cp");
  jdtt();
  document.getElementById("completedWidth").style.width = jdt;
  window.location.href = "whatsapp://send?text="+tb;
};
var jdt; //进度条宽度
function jdtt() {
  switch (localStorage.getItem("cp")) {
    case "0":
      jdt = "0.08rem";
      break;

    case "1":
      jdt = "0.2rem";
      break;

    case "2":
      jdt = "0.3rem";
      break;

    case "3":
      jdt = "0.48rem";
      break;

    case "4":
      jdt = "0.64rem";
      break;

    case "5":
      jdt = "0.83rem";
      break;

    case "6":
      jdt = "1.06rem";
      break;

    case "7":
      jdt = "1.3rem";
      break;

    case "8":
      jdt = "1.5rem";
      break;

    case "9":
      jdt = "1.66rem";
      break;

    case "10":
      jdt = "1.7rem";
      break;

    case "11":
      jdt = "1.75rem";
      break;
    case "12":
      jdt = "1.85rem";
      break;
    case "13":
      jdt = "1.93rem";
      break;
    case "14":
      jdt = "2rem";
      break;
    case "15":
      jdt = "2.08rem";
      break;
  }
  console.log(jdt);
}
jdtt();
document.getElementById("completedWidth").style.width = jdt;
if (localStorage.getItem("ble") != null) {
  let num = localStorage.getItem("ble");
  num = Number(num) + Number(my_ran(1, 1000, 3000));
  localStorage.setItem("ble", num);
} else {
  let ble = my_ran(1, 2000000, 5000000);
  localStorage.setItem("ble", ble[0]);
}
document.getElementById("blessed-numm").innerHTML = localStorage.getItem("ble");

function dz(e) {
  e.parentNode.children[0].className += " talk-list-li-r-icon-check";
  e.parentNode.children[1].className += " talk-list-li-r-font-check";
  e.parentNode.children[1].innerHTML =
    parseInt(e.parentNode.children[1].innerHTML) + 1;
}

node = `
<div class="talk-list-li">
    <div class="talk-list-li-ll">
        <div class="talk-list-li-l">
            __IMG__
        </div>
        <div class="talk-list-li-m">
            <div class="talk-list-li-m-name">__NAME__</div>
            <div class="talk-list-li-m-content">__C__</div>
            <div class="talk-list-li-m-time">__T__</div>
        </div>
    </div>
    <div class="talk-list-li-r talk-dz">
        <div class="talk-list-li-r-icon" onclick="dz(this)"></div>
        <div class="talk-list-li-r-font talk-num">__TALK__</div>
    </div>
</div>
`;

first = [
  "Vaishnavi",
  "Sunthari",
  "Shruti",
  "Sangem",
  "Ramalingam",
  "Amarnath",
  "Vallath",
  "Suranjan",
  "Shukla",
  "Sanjna",
  "Ramamuthe",
  "Arasaratnam",
  "Vamsi",
  "Surendar",
  "Sidda",
  "Sankuratri",
  "Ramanuja",
  "Balakrishnan",
  "Vaninadha",
  "Surnilla",
  "Sira",
  "Sanu",
  "Ramaswami",
  "Varganti",
  "Surupa",
  "Sivaram",
  "Sapra",
  "Bhaskar",
  "Varuni",
];
sec = [
  "Singh",
  "Shah",
  "Nair",
  "Nayar",
  "Verma",
  "Sen",
  "Yadav",
  "Mehta",
  "Pillai",
  "Gupta",
  "Bose",
  "Jhadav",
  "Patel",
  "Rao",
  "Malhotra",
  "Sengupta",
  "Jaiteley",
  "Patil",
  "Jayaraman",
  "Bhatnagar",
  "Das",
  "Chauhan",
  "Pawar",
  "Powar",
  "Venkatesan",
  "Saxena",
];

comments=[
    'Hope that the world will no longer experience suffering',
    'Thanks to the goddess, our family is getting better',
    'After praying yesterday, my daughter’s illness got better today',
    'Bless my family safe and healthy',
    'May world peace',
    'I saw the Indian virus subside in my dream',
    'Bless me to be healthy and wealthy and find a good wife',
    'I wish you all good health, peace and safety!'
]

ago=[
    '5 minutes ago',
    '17 minutes ago',
    '38 minutes ago',
    '1 hour ago',
    '1 hour ago',
    '2 hour ago',
    '2 hour ago',
    '3 hour ago',
]
text = "";
let assj = my_ran(8, 1, 18);
var nnum = [];
for (let i = 1; i <= 8; i++) {
  nnum[i] = my_ran(1, 20000 * i * 0.2, 24000 * i * 0.2)[0];
}
nnum = nnum.reverse();
for (let i = 0; i < 8; i++) {
  text += node
    .replace("__IMG__", '<img src="https://cdn.jsdelivr.net/gh/ffcdn/fastly@16/c/images/pic2/' + assj[i] + '.png">')
    .replace("__NAME__",first[Math.floor(Math.random() * first.length)]+' '+sec[Math.floor(Math.random() * sec.length)])
    .replace("__TALK__",nnum[i])
    .replace("__C__",comments[i])
    .replace("__T__",ago[i])
}
document.querySelector('.talk-list').innerHTML=text