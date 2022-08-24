<template>
  <div>
    <Header />
    <about />
    <buy />
    <sell />
    <partner />
    <farms />
    <skill />
    <experience />
    <modal />
    <project />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from '@/components/Sections/Header.vue';
import About from '@/components/Sections/About.vue';
import Buy from '@/components/Sections/Buy.vue';
import Sell from '@/components/Sections/Sell.vue';
import Partner from '@/components/Sections/Partner.vue';
import Farms from '@/components/Sections/Farms.vue';
import Skill from '@/components/Sections/Skill.vue';
import Experience from '@/components/Sections/Experience.vue';
import Modal from '@/components/Widgets/Modal.vue';
import Project from '@/components/Sections/Project.vue';

export default {
  components: {
    Header,
    About,
    Buy,
    Sell,
    Partner,
    Farms,
    Modal,
  },
  mounted() {
    this.closeMenu();
  },
  methods: mapActions({
    closeMenu: 'closeMenu'
  })
};
</script>
