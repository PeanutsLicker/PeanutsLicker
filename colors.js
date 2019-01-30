function randomColor() {
    return [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
}

function colorSelect() {
    const mix = [50, 150, 255]; //mixing color
    let c = [
        randomColor(), //background
        randomColor(), //header/footer
        randomColor(), //menu
        randomColor() //content
    ];

    for (let i = 0; i < c.length; i++) {
        for (let j = 0; j < c[i].length; j++) {
            c[i][j] = (c[i][j] + mix[j] * 3) / 4;
        }
    }

    for (let k = 0; k < c[0].length; k++) {
        c[0][k] = c[0][k] / 3;
    }

    for (let k = 0; k < c[1].length; k++) {
        c[1][k] = c[1][k] * 1.2;
    }

    for (let k = 0; k < c[2].length; k++) {
        c[2][k] = c[2][k] / 1.5;
    }

    let c0 = "rgb(" + c[0].toString() + ")";
    document.body.style.setProperty("--bgcolor", c0);
    let c1 = "rgb(" + c[1].toString() + ")";
    document.body.style.setProperty("--hdcolor", c1);
    let c2 = "rgb(" + c[2].toString() + ")";
    document.body.style.setProperty("--mncolor", c2);
    let c3 = "rgb(" + c[3].toString() + ")";
    document.body.style.setProperty("--ctcolor", c3);
}

colorSelect();


const prop = 25.7;
let speling;
const input = document.getElementById('lengte');
input.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        speling = Math.sqrt(Math.pow(input.value, 2) * 2) - prop;
        console.log(speling);
    }
});