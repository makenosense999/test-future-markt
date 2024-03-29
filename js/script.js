document.addEventListener('DOMContentLoaded', function () {
  const consultationBtns = document.querySelectorAll('.btn, .btn-active')
  const consultationWindow = document.createElement('div')
  consultationWindow.classList.add('consultation-window')
  consultationWindow.innerHTML = `
    <div class="consultation-content">
      <h2 class="consultatuion-window-title">Закажите<br> обратный звонок</h2>
      <button class="close-button">&times;</button> <!-- Крестик для закрытия -->
      <form id="consultationForm">
        <input type="text" id="name" placeholder="Имя" required />
        <input type="tel" id="phone" placeholder="Телефон" required />
        <label class="consultation-window-label"><input type="checkbox" class="consultation-window-cb" id="consent" required /> Согласен на сохранение и обработку<br> персональных данных</label>
      </form>
      <button class="consultation-window-btn" type="submit">Заказать обратный звонок</button>
    </div>
  `
  consultationWindow.style.width = '612px'
  consultationWindow.style.height = '946px'
  consultationWindow.style.backgroundColor = 'rgba(15, 29, 69, 1)'
  consultationWindow.style.position = 'fixed'
  consultationWindow.style.top = '0'
  consultationWindow.style.left = '-612px'
  consultationWindow.style.transition = 'left 0.3s ease'

  document.body.appendChild(consultationWindow)

  consultationBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      consultationWindow.style.left = '0'
    })
  })

  const consultationForm = document.getElementById('consultationForm')
  consultationForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const consent = document.getElementById('consent').checked
    if (name && phone && consent) {
      alert('Заявка успешно отправлена!')
      const formData = { name, phone }
      localStorage.setItem('consultationFormData', JSON.stringify(formData))
      consultationForm.reset()
      consultationWindow.style.left = '-612px'
    } else {
      alert(
        'Пожалуйста, заполните все обязательные поля и укажите согласие на обработку персональных данных.'
      )
    }
  })

  // Добавляем обработчик события для закрытия окна при нажатии на крестик
  consultationWindow
    .querySelector('.close-button')
    .addEventListener('click', function () {
      consultationWindow.style.left = '-612px'
    })

  const authorImage = document.querySelector('.author')
  authorImage.style.opacity = '0'
  setTimeout(function () {
    authorImage.style.opacity = '1'
  }, 1000)
})
