<template>
  <div id="experience">
      <timeline tasks="show"></timeline>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline.vue';
import store from "@/store";

export default {
  name: 'experience',
  store,
  components: {
    Timeline
  },
  data() {
    return {
      max: 20
    };
  },
  computed: {
    topSkills() {
      return store.getters.topSkills.slice(0, 6);
    }
  }
}
</script>

<style>

</style>