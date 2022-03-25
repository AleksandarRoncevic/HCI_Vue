app.component('reservation-form', {
    props: {
        setPrice: {
            type: Function(),
            required: true,
        },
        showModal: {
            type: Function(),
            required: true,
        }
    },
    template: `<form action="" class="book-form" @submit.prevent="onSubmit">
    <fieldset title="general" class="row">
        <legend style="color: #fff; font-size: large;">General information</legend>
        <div class="column-3">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="Your name" v-model="name">
            <br>
            <label for="surname">Surname:</label>
            <input type="text" name="surname" id="surname" placeholder="Your surname" v-model="surname">

        </div>
        <div class="column-3">
            <label for="city">City:</label>
            <input type="text" name="city" id="city" placeholder="Your City" v-model="city">
            <br>
            <label for="address">Address:</label>
            <input type="text" name="address" id="address" placeholder="Your Address" v-model="address">
        </div>
        <div class="column-3">
            <label for="telephone">Telephone:</label>
            <input type="text" name="telephone" id="telephone" placeholder="Your Telephone" v-model="telephone">
            <br>
            <label for="passport">Passport ID:</label>
            <input type="text" name="passport" id="passport" placeholder="Your passport ID " v-model="passport">
        </div>
    </fieldset>
    <fieldset title="booking" class="row">
        <legend style="color: #fff; font-size: large;">Booking details</legend>
        <div class="column-3">
            <label for="arrival">Arrival Date:</label>
            <br>
            <input type="date" name="arrival" id="arrival" v-model="dateA">
        </div>
        <div class="column-3">
            <label for="departure">Departure Date:</label>
            <input type="date" name="departure" id="departure" v-model="dateD">
        </div>
        <div class="column-3">
            <label for="guests">Number of guests?</label>
            <br>
            <input type="number" name="guests" id="guests" min="1" max="10" v-model="numOfGuest">
        </div>
    </fieldset>
    <div style="margin-top: 20px;">
        <input type="checkbox" name="private" id="private" v-model="private">
        <label for="private">Private room</label>
        <br>
        <label for="room-select" style="margin-left: 7px;">Room choices</label>
        <select name="room-select" id="room-select" v-if="private" v-model="roomChoice">
            <option value="2-single"> 2bed - single</option>
            <option value="2-king"> 2bed - kingsize</option>
        </select>
        <select name="room-select" id="room-select" v-else v-model="roomChoice">
            <option value="4">4beds</option>
            <option value="10">10beds - 1 bathroom</option>
            <option value="10">10beds - 2 bathroom</option>
        </select>
    </div>
    <button type="submit" class="submit-button" @click="toggleModal">Submit reservation</button>
</form>`,
    data() {
        return {
            name: '',
            surname: '',
            address: '',
            city: '',
            email: '',
            telephone: '',
            passport: '',
            numOfGuest: null,
            dateA: null,
            dateD: null,
            private: false,
            roomChoice: null,
        }
    },
    methods: {
        onSubmit() {
            if (checkName(this.name) || checkName(this.surname) || checkCity(this.city) ||
                negativeStay(this.durationOfStay) || startInPast(this.dateA) ||
                phoneLetters(this.telephone) || noRoom(this.roomChoice) || noGuests(this.numOfGuest)) {
                return;
            } else {
                var price = this.durationOfStay() * this.pricePerNight * this.numOfGuest;
                alert("Please confirm. Duration: " + this.durationOfStay() + " & " + this.numOfGuest + ` guests.
                Start date: `+ this.dateA + " and end date: " + this.dateD);
                this.$emit('set-price', price);
                this.$emit('show-modal');
            }
        },
        durationOfStay() {
            timeDiff = Math.abs(Date.parse(this.dateD) - Date.parse(this.dateA));
            return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        },

    },
    computed: {
        fullName() {
            this.name + ' ' + this.surname;
        },
        fullAddress() {
            this.city + ', ' + this.address;
        },
        pricePerNight() {
            switch (this.roomChoice) {
                case '2-single':
                case '2-king':
                    return 40;
                case '4':
                    return 30;
                case '10':
                    return 20;
                default: return 0;
            }
        }
    }
});

function checkName(name) {
    if (name.trim().length < 2) {
        alert('Name/Surname should be longer than 2 characters');
        return true;
    };
    if (!/^[a-zA-Z]+$/.test(name.trim())) {
        alert('Name/Surname should only have any letters')
        return true;
    };
    return false;
}

function checkCity(city) {
    if (city.trim().length < 2) {
        alert('City name should be longer than 2 characters');
        return true;
    };
    if (!/^[a-zA-Z]+$/.test(city.trim())) {
        alert('City name should only have any letters')
        return true;
    };
    return false;
}
function startInPast(date) {
    if (date > Date.now) {
        alert('Stay must start in the future')
        return true;
    }
    return false;
}
function negativeStay(durationOfStay) {
    console.log("Duration " + durationOfStay);
    if (durationOfStay <= 0) {
        alert('Stay must be a positive amount of days!');
        return true;
    }
    return false;
}

function phoneLetters(telephone) {
    if (/^[a-zA-Z]+$/.test(telephone)) {
        alert('Telephone should not have any letters')
        return true;
    };
    return false;
}

function noRoom(choice) {
    if (choice === null) {
        alert('Please pick a room');
        return true;
    }
    return false;
}
function noGuests(num) {
    if (num == 0 || num == null) {
        alert('Please select the amount of guests');
        return true;
    }
    return false;
}