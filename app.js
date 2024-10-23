let url = window.location.href;
// console.log(url);
let url_segment = url.split('?');
// console.log(url_segment[1]);

let play_btn = document.getElementById('play');
let video = document.getElementById('video');

play_btn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video.style.display = 'unset';
        play_btn.classList.remove('bi-play-fill');
        play_btn.classList.add('bi-pause');
    } else {
        video.pause();
        video.style.display = 'none';
        play_btn.classList.add('bi-play-fill');
        play_btn.classList.remove('bi-pause');
    }
});

video.addEventListener('ended', () => {
    video.play();
});

let date = new Date();
let main_date = date.getDate();
// console.log((main_date))

Array.from(document.getElementsByClassName('date_point')).forEach((el) => {
    if (el.innerText == main_date) {
        el.classList.add('h6_active');
    }
});

// Get today's date
let todayDate = date.getDate(); // Today's date

let pvr = [
    {
        pvr: 'PVR Vegus',
        movie: 'Jawan',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: todayDate, // Update to today's date
        img: 'img/jawan.jpg',
        video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Gadar2',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 2,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
        h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
        f: [1, 3, 13, 15, 22],
        e: [3, 9, 10, 20, 24],
        d: [7, 12, 9, 21, 20],
        c: [6, 8, 11, 12, 19],
        b: [8, 5, 12, 13, 14],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: todayDate, // Update to today's date
        img: 'img/Gadar2.jpg',
        video: 'video/Gadar2 Official Trailer - 11th August - Sunny Deol - Ameesha Patel - Anil Sharma - Zee Studios.mp4',
        background: 'img/gadar_bg.jpg',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Jawan',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [18, 10],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 25,
        img: 'img/jawan.jpg',
        video: 'video/Jawan Official Trailer-(HDvideo9).mp4',
        background: 'img/bg.png',
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Gadar2',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 2,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 25,
        j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
        h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
        f: [1, 3, 13, 15, 22],
        e: [3, 9, 10, 20, 24],
        d: [7, 12, 9, 21, 20],
        c: [6, 8, 11, 12, 19],
        b: [8, 5, 12, 13, 14],
        a: [5, 7, 6, 2, 4],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 25,
        img: 'img/Gadar2.jpg',
        video: 'video/Gadar2 Official Trailer - 11th August - Sunny Deol - Ameesha Patel - Anil Sharma - Zee Studios.mp4',
        background: 'img/gadar_bg.jpg',
    },
];

let addSeats = (arr) => {
    // console.log(arr)
    arr.forEach((el, i) => {
        const { series, row_section, seat, price, a, b, c, d, e, f, h, j } = el;

        // Create Row
        for (let index = 0; index < series.length; index++) {
            // console.log(series[index]);
            let row = document.createElement('div');
            row.className = 'row';

            let booked_seats = [];
            booked_seats = [...eval(series[index].toLocaleLowerCase())];
            // console.log(booked_seats);

            // Create Seats
            for (let seats = 0; seats < seat; seats++) {
                if (seats === 0) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                }

                let li = document.createElement('li');
                let filter = booked_seats.filter(el => {
                    return el === seats;
                });
                // console.log(filter);

                if (filter.length > 0) {
                    li.className = "seat booked";
                } else {
                    li.className = "seat";
                }

                li.id = series[index] + seats;
                li.setAttribute('book', seats);
                li.setAttribute('sr', series[index]);
                li.innerText = price[index];

                li.onclick = () => {
                    if (li.className === 'seat booked') {
                        li.classList.remove('selected');
                    } else {
                        li.classList.toggle('selected');
                    }
                    let len = Array.from(document.getElementsByClassName('selected')).length;
                    if (len > 0) {
                        document.getElementById('book_ticket').style.display = 'unset';
                    } else {
                        document.getElementById('book_ticket').style.display = 'none';
                    }
                };

                row.appendChild(li);

                if (seats === seat - 1) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                }
            }
            document.getElementById('seat_display').appendChild(row);
        }
    });
};

addSeats(pvr);

let book = () => {
    let selectedSeats = Array.from(document.getElementsByClassName('selected'));
    let bookedSeatNumbers = selectedSeats.map((el) => {
        return {
            id: el.id,
            book: el.getAttribute('book'),
            sr: el.getAttribute('sr'),
            price: el.innerText
        };
    });
    console.log(bookedSeatNumbers);
};

document.getElementById('book_ticket').onclick = () => {
    book();
};
