// Redirecionamento para as redes sociais do Netflix ao clicar nos ícones

document.getElementById('logo-ig').addEventListener('click', function(){
    const netflixIg = 'https://www.instagram.com/netflix'
    window.open(netflixIg, '_blank')
} )

document.getElementById('logo-fb').addEventListener('click', function(){
    const netflixFb = 'https://www.facebook.com/netflix'
    window.open(netflixFb, '_blank')
})

document.getElementById('logo-tt').addEventListener('click', function(){
    const netflixTt = 'https://www.twitter.com/netflix'
    window.open(netflixTt, '_blank')
})

// Redirecionamento para página em construção ao clicar nos itens do menu de navegação

document.addEventListener('DOMContentLoaded', function () {
    const menuItens = document.querySelectorAll('.menu-item')

    menuItens.forEach(item => {
        item.addEventListener('click', function(e){
            e.preventDefault()
            window.location.href = 'emconstrucao.html'
        })
    })
})

// Redirecionamento para página do Netflix Brasil ao clicar no logo

document.getElementById('logo-netflix').addEventListener('click', function(){
    const netflixBr = 'https://www.netflix.com/br/'
    window.open(netflixBr, '_blank')
})

// Redirecionamento para a página da série no span "Ler mais"

document.getElementById('ler-mais').addEventListener('click', function(){
    const breakingBad = 'https://www.netflix.com/title/70143836'
    window.open(breakingBad, '_blank')
})

// Renderização dos cards de episódios

document.addEventListener('DOMContentLoaded', function () {
    const episodios = [
        { id: "EP1", title: "Pilot.", src: "images/ep1.png" },
        { id: "EP2", title: "Cat's in the Bag.", src: "images/ep2.png" },
        { id: "EP3", title: "...And the Bag's in the River.", src: "images/ep3.png" }
    ]

    const containerEps = document.getElementById('container-eps')
    containerEps.innerHTML = ''

    episodios.forEach(ep => {
        const cardEp = `<img id="${ep.id}" src="${ep.src}" alt="${ep.title}" onclick="epClicado('${ep.id}')">`
        containerEps.innerHTML += cardEp
    })

    // Redirecionamento para os episódios no site do Netflix

    document.getElementById('EP1').addEventListener('click', function () {
        const ep1 = 'https://l1nq.com/QXvTy'
        window.open(ep1, '_blank')
    })

    document.getElementById('EP2').addEventListener('click', function () {
        const ep2 = 'https://acesse.dev/xzYsY'
        window.open(ep2, '_blank')
    })

    document.getElementById('EP3').addEventListener('click', function () {
        const ep3 = 'https://l1nq.com/1SCSo'
        window.open(ep3, '_blank')
    })
})

function epClicado(idEp) {
    console.log(`${idEp} foi clicado`)
}



    
//     const container = document.getElementById('container-eps')
    
//     let html = ''
    
//     episodios.forEach(episodio => {
//         html += `
//         <div class="container-eps">
//             <h3>${episodio.title}</h3>
//             <img src="${episodio.src}" alt="${episodio.title}">
//         </div>
//         `
//     }) 

//     container.innerHTML = html
// })
