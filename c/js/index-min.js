function my_ran(e,a,t){var l=[],n=[];for(i=0;i<t-a+1;i++)l[i]=i+a;for(var r,s,i=l.length;i;r=parseInt(Math.random()*i),s=l[--i],l[i]=l[r],l[r]=s);for(i=0;i<e;i++)n[i]=l[i];return n}document.documentElement.style.fontSize=document.documentElement.clientWidth/3.75+"px",document.body.style.fontSize="0.12rem";let blessedsj=my_ran(24,1,38),blessed="";for(let e=0;e<24;e++)blessed+='<div class="blessed-pic-li"><img src = "./images/pic/pic ('+blessedsj[e]+').jpeg" class = "blessed-pic-li-img" ></div>';var jdt;function jdtt(){switch(localStorage.getItem("cp")){case"0":jdt="0.08rem";break;case"1":jdt="0.2rem";break;case"2":jdt="0.3rem";break;case"3":jdt="0.48rem";break;case"4":jdt="0.64rem";break;case"5":jdt="0.83rem";break;case"6":jdt="1.06rem";break;case"7":jdt="1.3rem";break;case"8":jdt="1.5rem";break;case"9":jdt="1.66rem";break;case"10":jdt="1.7rem";break;case"11":jdt="1.75rem";break;case"12":jdt="1.85rem";break;case"13":jdt="1.93rem";break;case"14":jdt="2rem";break;case"15":jdt="2.08rem";break}}if(document.getElementById("blessed").innerHTML=blessed,null!=localStorage.getItem("cp")||localStorage.setItem("cp",0),document.getElementById("completedNum").innerText=localStorage.getItem("cp"),document.getElementById("fxbutton").onclick=function(){let e=localStorage.getItem("cp");e=Number(e)+2,e>15&&(e=15,goto(ed)),localStorage.setItem("cp",e),document.getElementById("completedNum").innerText=localStorage.getItem("cp"),jdtt(),document.getElementById("completedWidth").style.width=jdt,window.location.href="whatsapp://send?text="+tb},jdtt(),document.getElementById("completedWidth").style.width=jdt,null!=localStorage.getItem("ble")){let e=localStorage.getItem("ble");e=Number(e)+Number(my_ran(1,1e3,3e3)),localStorage.setItem("ble",e)}else{let e=my_ran(1,2e6,5e6);localStorage.setItem("ble",e[0])}function dz(e){e.parentNode.children[0].className+=" talk-list-li-r-icon-check",e.parentNode.children[1].className+=" talk-list-li-r-font-check",e.parentNode.children[1].innerHTML=parseInt(e.parentNode.children[1].innerHTML)+1}document.getElementById("blessed-numm").innerHTML=localStorage.getItem("ble"),node='\n<div class="talk-list-li">\n    <div class="talk-list-li-ll">\n        <div class="talk-list-li-l">\n            __IMG__\n        </div>\n        <div class="talk-list-li-m">\n            <div class="talk-list-li-m-name">__NAME__</div>\n            <div class="talk-list-li-m-content">__C__</div>\n            <div class="talk-list-li-m-time">__T__</div>\n        </div>\n    </div>\n    <div class="talk-list-li-r talk-dz">\n        <div class="talk-list-li-r-icon" onclick="dz(this)"></div>\n        <div class="talk-list-li-r-font talk-num">__TALK__</div>\n    </div>\n</div>\n',first=["Vaishnavi","Sunthari","Shruti","Sangem","Ramalingam","Amarnath","Vallath","Suranjan","Shukla","Sanjna","Ramamuthe","Arasaratnam","Vamsi","Surendar","Sidda","Sankuratri","Ramanuja","Balakrishnan","Vaninadha","Surnilla","Sira","Sanu","Ramaswami","Varganti","Surupa","Sivaram","Sapra","Bhaskar","Varuni"],sec=["Singh","Shah","Nair","Nayar","Verma","Sen","Yadav","Mehta","Pillai","Gupta","Bose","Jhadav","Patel","Rao","Malhotra","Sengupta","Jaiteley","Patil","Jayaraman","Bhatnagar","Das","Chauhan","Pawar","Powar","Venkatesan","Saxena"],comments=["Hope that the world will no longer experience suffering","Thanks to the goddess, our family is getting better","After praying yesterday, my daughter’s illness got better today","Bless my family safe and healthy","May world peace","I saw the Indian virus subside in my dream","Bless me to be healthy and wealthy and find a good wife","I wish you all good health, peace and safety!"],ago=["5 minutes ago","17 minutes ago","38 minutes ago","1 hour ago","1 hour ago","2 hour ago","2 hour ago","3 hour ago"],text="";let assj=my_ran(8,1,18);var nnum=[];for(let e=1;e<=8;e++)nnum[e]=my_ran(1,2e4*e*.2,24e3*e*.2)[0];nnum=nnum.reverse();for(let e=0;e<8;e++)text+=node.replace("__IMG__",'<img src="./images/pic2/'+assj[e]+'.png">').replace("__NAME__",first[Math.floor(Math.random()*first.length)]+" "+sec[Math.floor(Math.random()*sec.length)]).replace("__TALK__",nnum[e]).replace("__C__",comments[e]).replace("__T__",ago[e]);document.querySelector(".talk-list").innerHTML=text;