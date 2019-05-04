<template>
  <div class="about">

    <div class="row">
      <div class="jumbotron">
        <h1 class="display-4">Thinking Systemically about Design</h1>
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et commodo nisi. Aliquam erat volutpat. Nullam vel nisi quam. Ut eu porta nisl, nec tempus lacus. Phasellus placerat ut lacus sit amet laoreet. Vestibulum lacus mi, pharetra vel metus eget, mollis tempus nisl. Nulla eleifend dignissim porta. Fusce libero leo, lobortis ac erat a, placerat laoreet nibh. </p>
      </div>
    </div>

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
            class="mb-3"
          ></b-progress>
        </div>
        <!--<PackChart :tweetData=loadData />-->
      </div>
    </div>

  </div>
</template>

<script>
import Timeline from "@/components/Timeline.vue";
import store from "@/store";
/*import PackChart from "@/components/Chart.vue";

import * as d3 from "d3";*/

export default {
  name: "about",
  store,
  components: {
    Timeline
    /*PackChart*/
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
  /*data: function() {
    return {
      loadData: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let data = await d3.json("./tweets.json");
      this.loadData = data;
    }
  }*/
};
</script>

<style scoped>
h1 {
  color: #fff;
  font-size: 2.5rem;
  padding-bottom: 1rem;
}
.jumbotron {
  background-color: #3d3d3d;
}
p {
  color: #bcbcbc;
}
</style>
