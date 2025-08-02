function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function touching(){
    let msgs = ["Ahh~", "Touch Me!", "Do it Again~", "More", "Go Journey~", "G R A S S", "Harder!", "{seed : \"1000212400\"}"];
    console.log(msgs[getRandomInt(1,msgs.length-1)-1]);
}
