let totalPrice = 0;
let seatLimit = 35;
let selectedSeats = [];
const seats = document.querySelectorAll('#seat');
for (let seat of seats) {
    seat.addEventListener('click', function () {
        // .........seat minus..........
        const totalSeatsLeft = document.getElementById('totalSeatsLeft');
        const totalSeatsLeftText = totalSeatsLeft.innerText;
        const setNewSeat = totalSeatsLeftText - 1;
        totalSeatsLeft.innerText = setNewSeat;
        if (setNewSeat === seatLimit) {
            return alert('sorry');
        }
        // background color
        const keyBgChange = seat;
        seat.classList.add('bg-[#1DD100]', 'text-white');
        keyBgChange.classList.add('bg-[#1DD100]');

        // Check if seat is already selected
        if (selectedSeats.includes(seat.innerText)) {
            return alert('Seat already selected');
        }

        // Add seat to selectedSeats array
        selectedSeats.push(seat.innerText);
        const button = document.getElementById('seat');
        button.addEventListener('click', function () {
            if (!button.disabled) {
                button.disabled = true;
                console.log('Button selected!');
            } else {
                console.log('Button already selected!');
            }
        });

        // ........seat count..........
        const selectSeat = document.getElementById('selectSeat');
        const selectSeatText = selectSeat.innerText;
        const selectSeatTextInt = parseInt(selectSeatText);
        const setNewSelectSeat = selectSeatTextInt + 1;
        selectSeat.innerText = setNewSelectSeat;
        // ..........insect seat number..........
        const seatNumber = seat.innerText;
        const showSeat = document.getElementById('showSeat');
        const p = document.createElement('p');
        p.innerText = seatNumber;
        showSeat.appendChild(p)
        // ..........insect seat name...........
        const showClass = document.getElementById('showClass');
        const className = 'Economoy'
        const classNameP = document.createElement('p');
        classNameP.innerText = className;
        showClass.appendChild(classNameP)

        //  ..........insect price...............
        const showPrice = document.getElementById('showPrice');
        const price = 550;
        const priceP = document.createElement('p');
        priceP.innerText = price;
        const finalPrice = showPrice.appendChild(priceP);

        //  ............sum..........
        totalPrice += price
        const sumPrice = document.getElementById('sumPrice')
        const sumPriceText = sumPrice.innerText;
        sumPrice.innerText = totalPrice;
        const grandTotal = document.getElementById('grandTotal');
        const grandTotalText = grandTotal.innerText;
        grandTotal.innerText = totalPrice;
    });
}

// customer information
const name = document.getElementById('name');
const number = document.getElementById('number');
const email = document.getElementById('email');

submit.addEventListener('click', function () {
    const nameValue = fullName.value;
    const numberValue = number.value;
    const emailValue = email.value;
    if (nameValue === '' || numberValue === '' || emailValue === '') {
        const success = document.getElementById('success');
        alert(' flap this form')
        fullName.value = remove()
        number.value = remove()
        email.value = remove()
    }
})