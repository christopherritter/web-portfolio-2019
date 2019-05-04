<template>
  <div id="portfolio">
    <div class="row">

        <timeline deliverables="show"></timeline>

    </div>
  </div>
</template>

<script>
import Timeline from "@/components/Timeline.vue";
import store from "@/store";

export default {
  name: "portfolio",
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
};
</script>

<style>
</style>