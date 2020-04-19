let imgMark;

function dropIsAllowed() {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();

    if (event.target.children.length == 0) {
        event.target.appendChild(imgMark);
    }
}

function dStart(e) {
    if (e.target.id == 'x') {
        imgMark = document.createElement("img");
        imgMark.setAttribute("src", "img/x.png");
        imgMark.setAttribute("width", "50px");
    } else {
        imgMark = document.createElement("img");
        imgMark.setAttribute("src", "img/o.png");
        imgMark.setAttribute("width", "50px");
    }
}

function verifyWinner() {
    let a3 = document.getElementById('A3');
    let b3 = document.getElementById('B3');
    let c3 = document.getElementById('C3');

    let a2 = document.getElementById('A2');
    let b2 = document.getElementById('B2');
    let c2 = document.getElementById('C2');

    let a1 = document.getElementById('A1');
    let b1 = document.getElementById('B1');
    let c1 = document.getElementById('C1');

    if (a3.children.length > 0 && b3.children.length > 0 && c3.children.length > 0) {
        if (a3.children[0].src.includes('o.png') && b3.children[0].src.includes('o.png') && c3.children[0].src.includes('o.png')) {
            location.reload();
        }

        if (a3.children[0].src.includes('x.png') && b3.children[0].src.includes('x.png') && c3.children[0].src.includes('x.png')) {
            location.reload();
        }
    }

    if (a2.children.length > 0 && b2.children.length > 0 && c2.children.length > 0) {
        if (a2.children[0].src.includes('o.png') && b2.children[0].src.includes('o.png') && c2.children[0].src.includes('o.png')) {
            location.reload();
        }

        if (a2.children[0].src.includes('x.png') && b2.children[0].src.includes('x.png') && c2.children[0].src.includes('x.png')) {
            location.reload();
        }
    }

    if (a1.children.length > 0 && b1.children.length > 0 && c1.children.length > 0) {
        if (a1.children[0].src.includes('o.png') && b1.children[0].src.includes('o.png') && c1.children[0].src.includes('o.png')) {
            location.reload();
        }

        if (a1.children[0].src.includes('x.png') && b1.children[0].src.includes('x.png') && c1.children[0].src.includes('x.png')) {
            location.reload();
        }
    }

    if (a3.children.length > 0 && b2.children.length > 0 && c1.children.length > 0) {
        if (a3.children[0].src.includes('o.png') && b2.children[0].src.includes('o.png') && c1.children[0].src.includes('o.png')) {
            location.reload();
        }

        if (a3.children[0].src.includes('x.png') && b2.children[0].src.includes('x.png') && c1.children[0].src.includes('x.png')) {
            location.reload();
        }
    }

    if (a1.children.length > 0 && b2.children.length > 0 && c3.children.length > 0) {
        if (a1.children[0].src.includes('o.png') && b2.children[0].src.includes('o.png') && c3.children[0].src.includes('o.png')) {
            location.reload();
        }

        if (a1.children[0].src.includes('x.png') && b2.children[0].src.includes('x.png') && c3.children[0].src.includes('x.png')) {
            location.reload();
        }
    }

    if (a3.children.length > 0 && a2.children.length > 0 && a1.children.length > 0) {
        if (a3.children[0].src.includes('o.png') && a2.children[0].src.includes('o.png') && a1.children[0].src.includes('o.png')) {
            location.reload();
        }

        if (a3.children[0].src.includes('x.png') && a2.children[0].src.includes('x.png') && a1.children[0].src.includes('x.png')) {
            location.reload();
        }
    }

    if (b1.children.length > 0 && b2.children.length > 0 && b3.children.length > 0) {
        if (b1.children[0].src.includes('o.png') && b2.children[0].src.includes('o.png') && b3.children[0].src.includes('o.png')) {
            location.reload();
        }

        if (b1.children[0].src.includes('x.png') && b2.children[0].src.includes('x.png') && b3.children[0].src.includes('x.png')) {
            location.reload();
        }
    }

    if (c1.children.length > 0 && c2.children.length > 0 && c3.children.length > 0) {
        if (c1.children[0].src.includes('o.png') && c2.children[0].src.includes('o.png') && c3.children[0].src.includes('o.png')) {
            location.reload();
        }

        if (c1.children[0].src.includes('x.png') && c2.children[0].src.includes('x.png') && c3.children[0].src.includes('x.png')) {
            location.reload();
        }
    }
}

setInterval(() => {
    verifyWinner();
}, 200)