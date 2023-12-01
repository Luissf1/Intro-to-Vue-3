const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
<<<<<<< Updated upstream
            inventory: 100,
            // solution
            onSale: true,
            // solution
             // solution
             sizes: ['S', 'M', 'L', 'XL'],
             // solution
            details:['50% cotton','30% wool','20% polyester'],
            variants:[
                {id: 2234, color:'green'},
                {id: 2235, color:'blue'}
            ],
=======
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        // solution
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        // solution
        updateImage(variantImage) {
            this.image = variantImage
>>>>>>> Stashed changes
        }
    }
})