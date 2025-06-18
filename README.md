## Setup Instructions

1. Clone the repo:  https://github.com/Tusharpatil0912/EventBookingApi.git
2. Install dependencies:  npm install
3. Run the server:


## Postman Collection
Import this file into Postman: `Event Booking API.postman_collection.json`


## Documentation About Event Loop Behavior

console.log('Start');

setTimeout(() => console.log('setTimeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');

Output of below code : Start
                             End
                             Promise
                             setTimeout


explanation : - 1 . console.log() runs first (synchronous)
                2 . Promise is a microtask (runs after current call stack)
                3 . setTimeout is a macrotask (runs in next event loop cycle)


