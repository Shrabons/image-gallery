let fullbody = document.querySelector('body')


fullbody.addEventListener('click',(e)=>{


    if(e.target.className == 'img__view'){
        
        fullbody.innerHTML += `<div class="body__block">
        <div class="close"><i class="fa-solid  fa-xmark"></i></div>
        <img src="${e.target.dataset.link}" alt="${e.target.dataset.link}">
        </div>`
        
    }else if(e.target.className == "body__block"){
        let removebody = document.querySelector('.body__block')
        removebody.remove()

    }else if( e.target.className == 'close'){
        let removebody = document.querySelector('.body__block')
        removebody.remove()
    }else if( e.target.className == 'fa-solid  fa-xmark'){
        let removebody = document.querySelector('.body__block')
        removebody.remove()
    }

 

  

 
    
})