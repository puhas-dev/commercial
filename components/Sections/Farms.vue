<template>
    <section id="farms">
        <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
            <div class="mb-5 lg:mb-10 flex items-center">
                <h1 class="text-3xl md:text-4xl font-bold whitespace-nowrap">
                    Visit our Farms
                </h1>
                <span
                    class="ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"
                ></span>
            </div>
            <div v-if="farms" class="lg:grid lg:grid-cols-1">
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
    name: "farms",
    data() {
        return {
            farms: null,
        };
    },
    computed: {
        description() {
            const farms = this.farms;
            let description;

            if (farms !== null) {
                description = farms.description.split("\n");
            }

            return description;
        },
    },
    created() {
        this.getFarms();
    },
    methods: {
        async getFarms() {
            const farms = await this.$content("farms").fetch();

            this.farms = farms;
        },
    },
};
</script>
