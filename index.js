const quote = document.querySelector('.quote')

const getQuote = () => {

    fetch('https://api.quotable.io/random')
    .then((res) => res.json())
    .then((data) => {
        quote.innerHTML = data.content
        console.log(data.content);
    })

    fetch('https://picsum.photos/400/400')
    .then((res) => {
        document.querySelector('.pic').innerHTML = `<img src=${res.url} />`
        console.log(res.url)
    })
}
    
quote.addEventListener('click', () => {
    getQuote()
})