function hehe() {
    document.removeEventListener("click", hehe, null);
    let e = new Audio("audio.mp3");
    e.loop = !0;
    e.play();
}
document.addEventListener("click", hehe);
let typur = document.getElementById("typur"),
    typewriter = new Typewriter(typur, {
        loop: !0,
    });
typewriter
    .typeString("discord termed me VandearVans")
    .pauseFor(1e3)
    .deleteAll()
    .typeString("Vans")
    .pauseFor(1e3)
    .deleteAll()
    .typeString("eGod")
    .pauseFor(1e3)
    .deleteAll()
    .typeString("return?")
    .pauseFor(1e3)
    .start();