<script>
    const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#hack')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      console.log(form.get('name'))


      $buttonMailto.setAttribute('href', `mailto:javier@protonmail.com?subject=&body=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
      $buttonMailto.click()
    }
  </script>
