document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
        if (window.scrollY > 50) {
            document.getElementById('navbar').classList.add('fixed-top');
            navbarHeight = document.querySelector('.navbar').offsetHeight;
            // document.body.style.paddingTop = navbarHeight + 'px';
        }
        else{
            document.getElementById('navbar').classList.remove('fixed-top');
            // document.body.style.paddingTop = '0';
        }
    })
})

document.querySelector(".contact").addEventListener('submit', function(event){
    let inputName = document.getElementById("name").value
    let inputEmail = document.getElementById("email").value
    let inputMessage = document.getElementById("message").value
    // console.log(inputName)
    var regExpression = /\S+@\S+\.\S+/
    
    if((inputName==="")||(inputEmail==="")||(inputMessage==="")){
        console.log("Please enter all details!")

        const alertPlaceHolder = document.getElementById("alertPlaceHolder")

        console.log(alertPlaceHolder)

        const alert = (message, type) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
              `<div class="alert alert-danger alert-dismissible" role="alert">`,
              `   <div>${message}</div>`,
              '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
              '</div>'
            ].join('')
          
            alertPlaceHolder.append(wrapper)
          }

        alert('Please enter all the details. Drop a "Hi!" and your contact number if you have a time crunch. I will reach out to you at the earliest :)', 'success')
        event.preventDefault()
    }

    else if(regExpression.test(inputEmail)!=true){
        console.log("Please enter a valid email address")
    }

    else{
        inputName=""
        inputEmail=""
        inputMessage=""

        const alertPlaceHolder = document.getElementById("alertPlaceHolder")

        console.log(alertPlaceHolder)

        const alert = (message, type) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
              `<div class="alert alert-success alert-dismissible" role="alert">`,
              `   <div>${message}</div>`,
              '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
              '</div>'
            ].join('')
          
            alertPlaceHolder.append(wrapper)
          }

        alert('Thank you! Your message has been received. Will reach out to you at the earliest :)', 'success')
        event.preventDefault()
    }
})

document.querySelector(".contact").addEventListener('reset', function(){
    let inputName = document.getElementById("name").value
    let inputEmail = document.getElementById("email").value
    let inputMessage = document.getElementById("message").value

    inputName=""
    inputEmail=""
    inputMessage=""
})
