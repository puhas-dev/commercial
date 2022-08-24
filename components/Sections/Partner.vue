<template>
    <section id="partner">
        <div class="container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl">
            <div class="mb-5 lg:mb-10 flex items-center">
                <h1 class="text-3xl md:text-4xl font-bold whitespace-nowrap">
                    Become a Partner
                </h1>
                <span
                    class="ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"
                ></span>
            </div>
            <div v-if="partner" class="lg:grid lg:grid-cols-1">
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
    name: "partner",
    data() {
        return {
            partner: null,
        };
    },
    computed: {
        description() {
            const partner = this.partner;
            let description;

            if (partner !== null) {
                description = partner.description.split("\n");
            }

            return description;
        },
    },
    created() {
        this.getPartner();
    },
    methods: {
        async getPartner() {
            const partner = await this.$content("partner").fetch();

            this.partner = partner;
        },
    },
};
</script>
