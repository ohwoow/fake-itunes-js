export const radioPlayerInit = function () {

  const radio = document.querySelector('.radio')
  const radioNavigation = document.querySelector('.radio-navigation')
  const radioCoverImg = document.querySelector('.radio-cover__img')
  const radioItem = document.querySelectorAll('.radio-item')
  const radioHeaderBig = document.querySelector('.radio-header__big')
  const radioStop = document.querySelector('.radio-stop')

  const audio = new Audio()
  audio.type = "audio/aac"

  radioStop.disabled = true

  const changeIconPlay = () => {
    if (audio.paused) {
      radio.classList.remove('play')
      radioStop.classList.remove('fa-pause')
      radioStop.classList.add('fa-play')
    } else {
      radio.classList.add('play')
      radioStop.classList.add('fa-pause')
      radioStop.classList.remove('fa-play')
    }
  }

  const selectItem = el => {

    radioItem.forEach(item => item.classList.remove('select'))
    el.classList.add('select')
  }

  radioNavigation.addEventListener('change', event => {
    const target = event.target
    const parent = target.closest('.radio-item')

    selectItem(parent)

    const title = parent.querySelector('.radio-name').textContent
    radioHeaderBig.textContent = title

    const image = parent.querySelector('.radio-img').src

    radioCoverImg.src = image 

    radioStop.disabled = false
    audio.src = target.dataset.radioStantion

    audio.play()
    changeIconPlay()
  })

  radioStop.addEventListener('click', () => {
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
    changeIconPlay()
  })
}