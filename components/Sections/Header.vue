<template>
  <header>
    <div
      class="
        container
        mx-auto
        px-8
        py-4
        md:px-12 md:py-10
        flex
        items-center
        min-h-screen
        max-w-6xl
      "
    >
      <main v-if="about">
        <h1 class="text-8xl text-center font-semibold md:text-7xl lg:text-8xl font-light">
          {{ about.name }}
        </h1>
        <h2
          class="
            text-6xl
            md:text-7xl
            lg:text-8xl
            font-bold
            text-lime-700
            text-center
            hover:text-lime-500
            dark:text-gray-400
            dark:hover:text-gray-300
          "
        >
          {{ about.title }}
        </h2>
        <p class="text-2xl mt-4 text-gray-500 text-center dark:text-gray-400 leading-1">
          {{ about.bio }}
        </p>
      </main>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      about: {}
    };
  },
  created() {
    this.getAbout();
  },
  methods: {
    async getAbout() {
      const about = await this.$content('about').fetch();

      this.about = about;
    }
  }
};
</script>
