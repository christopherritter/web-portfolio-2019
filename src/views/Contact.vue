<template>
  <div id="contact">
    <div class="row">
      <div class="col-sm-8">
        <timeline></timeline>
      </div>
      <div class="col-sm-4">
        <div
          v-for="skill in topSkills"
          v-bind:key="skill.label"
        >
          <h5>{{ skill.label }}</h5>
          <b-progress
            :value="skill.rating"
            :max="max"
            class="mb-4"
          ></b-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timeline from '@/components/Timeline.vue';
import store from "@/store";

export default {
  name: 'portfolio',
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