const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');

const backdrop = document.getElementById('backdrop');
const cancelButtonModalEl = document.querySelector('.btn--passive');
const addButtonModalEl = cancelButtonModalEl.nextElementSibling;
const inputValue = document.querySelectorAll('input');
const movies =[];
const backdropToggle= ()=>{
    backdrop.classList.toggle('visible');
}
const movieModelToggle = ()=>{
    addMovieModal.classList.toggle('visible');
    backdropToggle();
}
const cancelButtonModel = ()=>{
    movieModelToggle()
    clearMovieInput();
} 

const clearMovieInput = ()=>{
    for(let userInput of inputValue){
        userInput.value =''
    }
}
const addButtonMovieHandler=()=>{
    const titleValue = inputValue[0].value;
    const imageUrlValue = inputValue[1].value;
    const ratingValue = inputValue[2].value;
    if(titleValue.trim === '' || imageUrlValue.trim ==='' || ratingValue.trim === '' || ratingValue<1 || ratingValue>5){
        alert('Please entry sahi rating 1 se 5 ke bich');
    }
    const movie = {
        title: titleValue,
        imageUrl: imageUrlValue,
        rating: ratingValue
    }
    movies.push(movie);
    clearMovieInput();
}

startAddMovieButton.addEventListener('click',movieModelToggle);
backdrop.addEventListener('click',movieModelToggle);
cancelButtonModalEl.addEventListener('click',cancelButtonModel);
addButtonModalEl.addEventListener('click',addButtonMovieHandler);