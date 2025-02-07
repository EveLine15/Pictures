const body = document.querySelector('body');
const holder = document.querySelector('.pictures-holder');

localStorage.bgImage ? setBackgroundPicture(localStorage.bgImage): setBackgroundPicture("./images/image1.png");

holder.addEventListener('click', (event) => {
    if(event.target.matches("img")){

        holder.querySelectorAll('img').forEach(element => {
            element.classList.remove('img-chosen');
        });
        
        setBackgroundPicture(event.target.getAttribute('src'));
        event.target.classList.add('img-chosen');
    } 
});

function setBackgroundPicture(item){
    body.style.backgroundImage = `url(${item})`;
    localStorage.bgImage = item;
}