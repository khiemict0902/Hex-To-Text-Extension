// Đỉnh cao trí tuệ hehehe emzai
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    function hex2a(hexx) {
        var hex = hexx.toString();//force conversion
        var str = '';
        for (var i = 0; i < hex.length; i += 2)
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        return str;
    }

    const a = message.text;
    let b = a.split(' ').join('');
    let res = hex2a(b);

    const dialog = document.createElement('div');
    dialog.innerHTML =  `<div style=" background-color: black; boder-radius:5px; boder"><input type="text" style="background-color: black; width: 100%; padding: 12px 20px; margin: 8px 0; display: inline-block; border: 1px solid #ccc; border-radius: 4px;box-sizing: border-box; font-size:16px;color: white" value= ${res} />`;
    dialog.style.fontSize = "16px";
    dialog.style.width = "400px";
    dialog.style.height = "300px";
    dialog.style.position = "fixed";
    dialog.style.top = "50%";
    dialog.style.left = "50%";
    dialog.style.zIndex = "9999";
    dialog.style.backgroundColor = "#282828",
    dialog.style.padding = "10px"
    dialog.style.overflowY = "auto"


    const goToW = document.createElement('button');
    goToW.innerHTML = "Go to Web";
    goToW.style.position = "absolute";
    goToW.style.backgroundColor = "green";
    goToW.style.width = "80px";
    goToW.style.height = "40px";
    goToW.style.top = "220px";
    goToW.style.right = "215px";
    goToW.addEventListener("click", () => {
        window.open(res);
    });
    dialog.appendChild(goToW)

    const copyToClip   = document.createElement('button');
    copyToClip.innerHTML = "Copy";
    copyToClip.style.position = "absolute";
    copyToClip.style.backgroundColor = "green";
    copyToClip.style.width = "80px";
    copyToClip.style.height = "40px";
    copyToClip.style.top = "220px";
    copyToClip.style.right = "110px";
    copyToClip.addEventListener("click", () => {
        navigator.clipboard.writeText(res);
    });
    dialog.appendChild(copyToClip )

    //close the dialog button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = "X";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.backgroundColor = "red";
    closeButton.addEventListener("click", () => {
        document.body.removeChild(dialog);
    });
    dialog.appendChild(closeButton);

    document.body.appendChild(dialog);
})
