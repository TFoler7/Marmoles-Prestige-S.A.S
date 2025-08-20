function abrirVideo(url) {
    const modal = document.getElementById("modalVideo");
    const iframe = document.getElementById("videoIframe");
    iframe.src = url;
    modal.style.display = "flex"; // 👈 aquí cambiamos block → flex
}

function cerrarVideo() {
    const modal = document.getElementById("modalVideo");
    const iframe = document.getElementById("videoIframe");
    iframe.src = "";
    modal.style.display = "none";
}
