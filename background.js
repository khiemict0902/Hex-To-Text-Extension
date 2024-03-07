chrome.contextMenus.create({
    id: "hex",
    title: "Hex to text",
    contexts: ["selection"]
})

chrome.contextMenus.onClicked.addListener(function(info){
    if(info.menuItemId === "hex") {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "showSelectedText", text: info.selectionText});
        });
    }
})