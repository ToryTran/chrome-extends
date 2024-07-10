function getFcAdsBlock() {
    return adsBlockedPopup = document.getElementsByClassName("fc-ab-root")
}

const intvId = setInterval(() => {
    
    list_el = getFcAdsBlock();
    if (list_el.length) {
        console.log(Date().toString())
        console.log(list_el[0]);

        list_el[0].remove();
        document.getElementsByTagName("body")[0].style.overflow = ''
        clearInterval(intvId)
    }
}, 50)

setTimeout(() => {
    console.log("Remove check ads blocked - Tien Tran");
    clearInterval(intvId)
}, 20000)