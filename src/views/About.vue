<template>
  <div id="about">

    <div class="row">
      <div class="jumbotron">
        <h1 class="display-4">The Path of a UX Engineer</h1>
        <p class="lead">Many moons ago, I fancied myself a Web Designer until I was swept away by the advent of User Experience Design.</p>

        <p>In the decade that followed, I practiced the art of wireframing and annotating, diagramming user workflows, and gathering user feedback on design concepts. As the industry continues to evolve with
          the aid of Design Systems, so too has my knowledge of the Front End. Now I have returned to my HTML/CSS/JS roots with the skillset of a UX Engineer.</p>

        <p class="subtext">This interactive resume allows you to focus on my professional skills that interest you most. Anywhere you see a <span class="bold bold-skill">Skill</span> &mdash; below the menu on the side, or 
        on the timeline &mdash; simply click on the skill to highlight them on my timeline.</p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 col-lg-8">
        <timeline></timeline>
      </div>
      <div class="col-md-12 col-lg-4 pt-3 pb-5">
        <div
          v-for="skill in topSkills"
          v-bind:key="skill.label"
          class="mb-4"
        >
          <h5>{{ skill.label }}</h5>
          <b-progress
            :value="skill.rating"
            :max="max"
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
  padding: 4rem 3rem 2rem 3rem;
  background-color: #3d3d3d;
  background-image: url('../assets/moon-vector.svg');
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: 100%;
}
p {
  color: #bcbcbc;
}
p.lead {
  color: #ffffff;
}
p .bold-skill {
  color: #ffffff;
  font-weight: 600;
}
p.subtext {
  font-style: italic;
  font-size: 0.9rem;
}
</style>
