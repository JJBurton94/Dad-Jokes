const h3 = document.querySelector('h3')
const btn = document.querySelector('button')

const dadJoke = async function (){
   const res = await fetch('https://icanhazdadjoke.com/',{
    method: 'GET',
    headers: {
     'Accept': 'application/json',
}})
   const data = await res.json();
   const joke = (data.joke);
   h3.innerText = joke;
};
dadJoke() 

btn.addEventListener('click', function(){
       dadJoke()
});

