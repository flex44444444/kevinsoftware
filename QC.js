const QCBTN = document.querySelector(".QCBTN");
const QCMenu = document.querySelector(".QCMenu");

QCBTN.addEventListener("click", () => {

    if(QCMenu.classList.contains("QCMenu-open")) {
        QCMenu.classList.remove("QCMenu-open");
        QCMenu.classList.add("QCMenu-closed");
    } else {
        QCMenu.classList.add("QCMenu-open");
        QCMenu.classList.remove("QCMenu-closed");
    }

})