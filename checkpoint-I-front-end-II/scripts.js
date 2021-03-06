let elementTitle = document.querySelector('#title')
let elementDescription = document.querySelector('#description')
let elementImage = document.querySelector('#img')
let elementCategory = document.querySelector('#category')
let elementBtnSalvar = document.querySelector('#btnSalvar')
let elementBtnLimpar= document.querySelector('#btnLimpar')
let elementContainer = document.querySelector('.container_main')
let posts = []

function insert(){

  let postPendente = {
    title: elementTitle.value,
    category: elementCategory.options[elementCategory.selectedIndex].value,
    description: elementDescription.value,
    image: elementImage.value
  }

  posts.push(postPendente)

  for(let post of posts){
    posts = []
    elementContainer.innerHTML +=`
      <div class="item">
        <img src="${post.image}">
        <h2>${post.title}</h2>
        <h3>Viagem: ${post.category}<h3>
        <p>
          ${post.description}
        </p>
      </div>
    `
  }
}

function clear(){
  elementTitle.value = ''
  elementDescription.value = ''
  elementImage.value = ''
  elementCategory.selectedIndex = 0
}


elementBtnSalvar.addEventListener('click', function(event){
  event.preventDefault()
  insert()
  clear()
})

elementBtnLimpar.addEventListener('click', function(event){
  event.preventDefault()
  clear()
})