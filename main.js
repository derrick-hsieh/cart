const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '進擊的巨人',
                date: '2020-6',
                price: '85.00',
                count: 1
            },
            {
                id: 2,
                name: '排球少年',
                date: '2020-8',
                price: '75.00',
                count: 1
            },
            {
                id: 3,
                name: '咒術回戰',
                date: '2020-7',
                price: '95.00',
                count: 1
            },
            {
                id: 4,
                name: 'jojo',
                date: '2020-5',
                price: '65.00',
                count: 1
            }
        ]
    },
    methods: {
        getFinalPrice() {
            return '$' + price.toFixed(2)
        },

        increment(index) {
            this.books[index].count++;
        },
        decrement(index) {
            this.books[index].count--;
        },
        remove(index) {
            this.books.splice(index, 1);
        }
    },

    computed: {
        // totalPrice() {
        //     let totalPrice = 0;
        //     for (let i in this.books) {
        //         totalPrice += this.books[i].price * this.books[i].count;
        //     }
        //     return totalPrice;
        // }
        totalPrice(){
            let totalPrice = 0;
            for(let item of this.books){
                totalPrice += item.price * item.count;
            }
            return totalPrice;
        }

    }
})