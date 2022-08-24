<template>
    <section id="buy">
        <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
            <div class="mb-5 lg:mb-10 flex items-center">
                <h1 class="text-3xl md:text-4xl font-bold whitespace-nowrap">
                    Buy
                </h1>
                <span
                    class="ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"
                ></span>
            </div>
            <div v-if="buy" class="lg:grid lg:grid-cols-1">
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
    name: "Buy",
    data() {
        return {
            buy: null,
        };
    },
    computed: {
        description() {
            const buy = this.buy;
            let description;

            if (buy !== null) {
                description = buy.description.split("\n");
            }

            return description;
        },
    },
    created() {
        this.getBuy();
    },
    methods: {
        async getBuy() {
            const buy = await this.$content("buy").fetch();

            this.buy = buy;
        },
    },
};
</script>
