let DownloadButton = document.getElementById("downloadbtn")
let text = document.getElementById("text")
let loader = document.getElementById("loader")
function startDownload(){
    DownloadButton.style.backgroundColor="rgba(255, 215, 0, 1)"
    DownloadButton.style.filter="drop-shadow(0px 0px 10px rgba(255, 215, 0, 1) );"
    DownloadButton.disabled=true;
    loader.classList.remove("d-none")
    let count = 0
    let fackDownload = setInterval(()=>{
        count++
        text.textContent=`Downloading ${count}%`
        if(count>=100){
            clearInterval(fackDownload)
            loader.classList.add("d-none")
            text.textContent=`Downloaded`

        }
    },40)
    }



    