const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelected = document.getElementById('movie');


let ticketPrice =+  movieSelected.value;

populateUI();

//Save Selected Movie index and price
const setMovieData = (movieIndex, moviePrice) => {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMovieIndex', moviePrice);
}

const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    //localStorage
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    
    //REVIEW change 'warn' for 'log'
    //console.warn(selectedSeatsCount);
}

// Get data from localstorage and populate UI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')
    );

    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelected.selectedIndex = selectedMovieIndex;
    }
}

//movie select event
movieSelected.addEventListener('change', e => {
    ticketPrice = + e.target.value
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

// Seat click event
container.addEventListener('click', e => {
    if(
        e.target.classList.contains('seat') &&
        //!
        !e.target.classList.contains('occupied')
    ){
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});


//initial count and total set
updateSelectedCount();