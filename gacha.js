//ガチャ景品
const prize = {
    "☆5": [
        "☆5剣",
        "☆5杖",
        "☆5鎧",
        "☆5服"
    ],
    "☆4": [
        "☆4剣",
        "☆4杖",
        "☆4鎧",
        "☆4服"
    ],
    "☆3": [
        "☆3剣",
        "☆3杖",
        "☆3鎧",
        "☆3服"
    ],
    "☆2": [
        "☆2剣",
        "☆2杖",
        "☆2鎧",
        "☆2服"
    ]
};

//範囲内の数字をランダムを返す
function random() {
    return Math.floor(Math.random() * 1000);
}

//景品をランダムに抽選
function returnGachaResult(prize, val) {
    if (val >= 900) {
        return prize["☆5"][Math.floor(Math.random() * prize["☆5"].length)];
    } else if (val >= 700 & val < 900) {
        return prize["☆4"][Math.floor(Math.random() * prize["☆4"].length)];
    } else if (val >= 400 & val < 700) {
        return prize["☆3"][Math.floor(Math.random() * prize["☆3"].length)];
    } else {
        return prize["☆2"][Math.floor(Math.random() * prize["☆2"].length)];
    }
}

//PHPでいうisset
function isset(val){
    if (val == null || val == "" || val == undefined){
        return false;
    }else{
        return true;
    }
}

//btm要素の取得
var button = document.getElementsByClassName("btn");

//クリックされた要素に合わせて表示
button[0].onclick = function () {
    if (isset(document.getElementById("gachaResult"))) {
        document.getElementById("gachaResult").textContent = null;
    }
    var p = document.createElement("p");
    var text = document.createTextNode(
        returnGachaResult(prize, random())
    );
    document.getElementById("gachaResult").appendChild(p).appendChild(text);
}

button[1].onclick = function () {
    if (isset(document.getElementById("gachaResult"))) {
        document.getElementById("gachaResult").textContent = null;
    }
    for (var i = 1; i <= 5; i++) {
        var p = document.createElement("p");
        var text = document.createTextNode(
            returnGachaResult(prize, random())
        );
        document.getElementById("gachaResult").appendChild(p).appendChild(text);
    }
}

button[2].onclick = function () {
    if (isset(document.getElementById("gachaResult"))) {
        document.getElementById("gachaResult").textContent = null;
    }
    for (var i = 1; i <= 10; i++) {
        var p = document.createElement("p");
        var text = document.createTextNode(
            returnGachaResult(prize, random())
        );
        document.getElementById("gachaResult").appendChild(p).appendChild(text);
    }
}

