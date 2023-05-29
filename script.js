// share modal - copy button and web share
const shareModalCopyBtn = document.querySelector(".copyText+button");
const shareData = {
    title: encodeURIComponent(document.querySelector("title").textContent),
    text: encodeURIComponent("Cooperation within Conflict: Peddavagu Project"),
    // url: 
    url:"https://support.mozilla.org/en-US/kb/about-config-editor-firefox"
};

shareModalCopyBtn.addEventListener("click",()=>{
navigator.clipboard.writeText(window.location.href);
});

document.querySelector(".facebook").addEventListener('click',()=>{
    location.href = `https://www.facebook.com/share.php?=${shareData.url}`
});
document.querySelector(".twitter").addEventListener('click',()=>{
    location.href = `https://www.twitter.com/share?&url=${shareData.url}&text=${shareData.text}&hashtags=Water-Politics,Cooperation-Conflicts`
});





// set the width of div encompassing headline to width of the section para
// var widthSectionP = document.querySelector(".sectionP").getBoundingClientRect().width;
// console.log(widthSectionP) 





