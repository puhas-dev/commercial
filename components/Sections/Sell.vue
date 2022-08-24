<template>
    <section id="sell">
        <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
            <div class="mb-5 lg:mb-10 flex items-center">
                <h1 class="text-3xl md:text-4xl font-bold whitespace-nowrap">
                    Sell
                </h1>
                <span
                    class="ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"
                ></span>
            </div>
            <div v-if="sell" class="lg:grid lg:grid-cols-1">
                <div>
                    <p
                        v-for="(desc, index) in description"
                        :key="(index + 1) * Math.random()"
                        class="mb-2 text-xl"
                    >
                        {{ desc }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Sell",
    data() {
        return {
            sell: null,
        };
    },
    computed: {
        description() {
            const sell = this.sell;
            let description;

            if (sell !== null) {
                description = sell.description.split("\n");
            }

            return description;
        },
    },
    created() {
        this.getSell();
    },
    methods: {
        async getSell() {
            const sell = await this.$content("sell").fetch();

            this.sell = sell;
        },
    },
};
</script>
