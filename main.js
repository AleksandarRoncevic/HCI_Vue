const app = Vue.createApp({
    data() {
        return {
            rooms: [...roomsOffer],
            roomIndex: 0,
            showPrices: false,
            workers: ["Alex", "Paul", "Jonh"],
            owner: "Joahna Hanks",
            showModal: true,
        };
    },
    methods: {
        getRoom(roomIndex) {
            return this.rooms[roomIndex];
        },
        getRoomImage() {
            return "assets/images/" + this.getRoom(this.roomIndex).count + "room.jpeg";
        },
        nextRoom() {
            this.roomIndex++;
        },
        prevRoom() {
            this.roomIndex--;
        },
        setShowPrices() {
            this.showPrices = !this.showPrices;
        },
        toggleModal() {
            this.showModal = !this.showModal;
        }
    }
});

const roomsOffer = [
    {
        count: 10,
        description: `Desetokrevevtna soba je opremljena sa krevetima na sprat, 
        zajedničkim kupatilom. S tim u vezi sobe su jeftinije od ostalih u ponudi`,
        price: 20
    },
    {
        count: 4,
        description: `Četvorokrevetna soba je idealna za porodicu kojoj je potrebna privatnost 
        za što bolji užitak.`,
        price: 30
    },
    {
        count: 2,
        description: `Perfektna za parove koji obilaze svet da naprave kratat "pit stop"`,
        price: 40
    }
]