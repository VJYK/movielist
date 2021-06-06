const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');

const backdrop = document.getElementById('backdrop');
const cancelButtonModalEl = document.querySelector('.btn--passive');
const addButtonModalEl = cancelButtonModalEl.nextElementSibling;
const inputValue = document.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');


const movies =[];
const updateUi = ()=>{
    if(movies.length === 0){
        entryTextSection.style.display = 'block';
    }else{
        entryTextSection.style.display = 'none';
    }
}

const deleteMovieHandler =(movieId)=>{
    let movieIndex = 0;
    for(let movie of movies){
        if(movie.id=== movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex,1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
}
const movieList = (id,title, imageUrl, rating)=>{
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" title="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>`
    newMovieElement.addEventListener('click',deleteMovieHandler.bind(null,id));
    const list = document.getElementById('movie-list');
    list.append(newMovieElement);
}
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
        id:Math.random().toString(),
        title: titleValue,
        imageUrl: imageUrlValue,
        rating: ratingValue
    }
    movies.push(movie);
    movieModelToggle();
    clearMovieInput();
    movieList(movie.id,movie.title,movie.imageUrl,movie.rating);
    updateUi();
}

startAddMovieButton.addEventListener('click',movieModelToggle);
backdrop.addEventListener('click',movieModelToggle);
cancelButtonModalEl.addEventListener('click',cancelButtonModel);
addButtonModalEl.addEventListener('click',addButtonMovieHandler);