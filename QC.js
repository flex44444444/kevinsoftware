const QCBTN = document.querySelector('#QCBTN')
const QCMenu = document.querySelector('.QCMenu')
let currentQCBTNRotation = -90

//toggle using QC button
QCBTN.addEventListener('click', () => {
  QCBTN.setAttribute(
    'style',
    `transform: rotate(${currentQCBTNRotation + 180}deg)`,
  )
  currentQCBTNRotation += 180

  if (QCMenu.classList.contains('QCMenu-open')) {
    QCMenu.classList.remove('QCMenu-open')
    QCMenu.classList.add('QCMenu-closed')
  } else {
    QCMenu.classList.add('QCMenu-open')
    QCMenu.classList.remove('QCMenu-closed')
  }
})

//force close when clicking anywhere off the menu
document.addEventListener('click', (e) => {
  if (
    !(
      e.target.classList.contains('QCMenu') ||
      e.target == QCBTN ||
      e.target.closest('.QCMenu')
    )
  ) {
    if (QCMenu.classList.contains('QCMenu-open')) {
      QCBTN.setAttribute(
        'style',
        `transform: rotate(${currentQCBTNRotation + 180}deg)`,
      )
      currentQCBTNRotation += 180
    }
    QCMenu.classList.remove('QCMenu-open')
    QCMenu.classList.add('QCMenu-closed')
  }
})
