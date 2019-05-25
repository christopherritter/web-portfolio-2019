<template>
  <div id="resume">

    <div
      id="about"
      class="row"
    >
      <div
        class="jumbotron"
        :class="{'jumbotron-lite':!$store.state.showAbout}"
      >
        <h1
          :class="{'d-none':!$store.state.showAbout}"
          class="display-4"
        >The Path of a UX Engineer</h1>
        <p
          class="lead"
          :class="{'d-none':!$store.state.showAbout}"
        >Many moons ago, I fancied myself a Web Designer until I was swept away by the advent of User Experience Design.</p>

        <p :class="{'d-none':!$store.state.showAbout}">In the decade that followed, I practiced the art of wireframing and annotating, diagramming user workflows, and gathering user feedback on design concepts. As the industry continued to evolve with
          the aid of Design Systems, so too has my knowledge of front-end frameworks. Now I have returned to my HTML/CSS/JS roots with the skillset of a UX Engineer.</p>

        <p
          class="subtext"
          :class="{'subtext-lite':!$store.state.showAbout}"
        >This interactive resume allows you to focus on my professional skills that interest you most. Anywhere you see a <span class="bold bold-skill">Skill</span> &mdash; below the menu on
          the side, or on the timeline &mdash; simply click on the skill to highlight them on my timeline.</p>
      </div>
    </div>

    <div
      id="stats"
      class="row"
    >
      <div
        class="col-md-12"
        :class="[ { 'col-lg-8': !$store.state.showTimeline } , { 'col-lg-10' : $store.state.showTimeline } ]"
      >
        <timeline></timeline>
      </div>
      <div
        class="col-md-12 pt-3 pb-5"
        :class="[{ 'col-lg-4': !$store.state.showTimeline},{ 'col-lg-2': $store.state.showTimeline }]"
      >
        <div
          id="skills"
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
      </div>
    </div>

  </div>
</template>

<script>
import Timeline from "@/components/Timeline.vue";
import store from "@/store";
export default {
  name: "resume",
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
  },
  methods: {
    expandTimeline: function() {
      let jobs = store.state.jobs;
      let visibleTasks = 0;
      for (let j = 0; j < jobs.length; j++) {
        let tasks = jobs[j].tasks;
        for (let t = 0; t < tasks.length; t++) {
          if (tasks[t].showTask == true) {
            visibleTasks++;
          }
        }
      }
      if (visibleTasks > 0) {
        store.state.showTimeline = true;
      } else {
        store.state.showTimeline = false;
      }
    }
  }
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
  background-image: url("../assets/moon-vector.svg");
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: 100%;
}
.jumbotron-lite {
  padding: 1.5rem;
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
p.subtext-lite {
  margin-bottom: 0;
}
</style>
