/*This is Web System Script */
function judge(id){
    let ans = document.getElementById(`ans-${id}`).value;
    if(ans.trim() == "") return;
    fetch('content/data.json')
    .then(response => response.json())
    .then(res => {
        let flag = res[id].flag;
        console.log(ans);
        var hash = CryptoJS.MD5(ans);
        if(flag == hash){
            alert("Correct!!");
            window.localStorage.setItem(`stage-${id}`, CryptoJS.SHA1(ans).toString());
            if(id === "extra2"){
                alert("You are the winner but are you the one who solved all stages?");
                window.location.href = "play.html";
                return;
            }
            alert("Get Ready for NEXT Stage!!");
            if(id === "extra1") window.location.href = "play.html?stage=extra2";
            else if(id == 10) window.location.href = "play.html?stage=extra1";
            else window.location.href = "play.html?stage=" + (Number(id) + 1);
        }else{
            alert("Incorrect *^*");
            document.getElementById(`ans-${id}`).value = "";
            if(window.localStorage.getItem(`stage-${id}`) == null){
                window.localStorage.setItem(`stage-${id}`, CryptoJS.SHA1(ans).toString());
            }else if(window.localStorage.getItem(`stage-${id}`) != null && CryptoJS.SHA1(window.localStorage.getItem(`stage-${id}`)).toString() != res[id].key){
                window.localStorage.setItem(`stage-${id}`, CryptoJS.SHA1(ans).toString());
            }
        }
    })
    .catch(error => {
        console.error("Error loading JSON:", error);
    });
}

function previousPage(id){
    if(Number(id)) window.location.href = `play.html?stage=${((id-2+10)%10+1)}`;
    else{
        id = id[id.length-1];
        window.location.href = `play.html?stage=extra${((id-2+2)%2+1)}`;
    }
}

function nextPage(id){
    if(Number(id)) window.location.href = `play.html?stage=${((Number(id)+10)%10+1)}`;
    else{
        id = id[id.length-1];
        window.location.href = `play.html?stage=extra${((Number(id)+2)%2+1)}`;
    }
}

function back(){
    if (window.location.href.endsWith("play.html")) {
        window.location.href = "https://opsifiz.github.io/Mister-CTF/";
    } else {
        window.location.href = "play.html";
    }
}