<template>
  <div id="navigator">

    <ul class="navbar-nav sidebar-nav">
      <li class="nav-item nav-about">
        <a
          class="nav-link"
          :class="{ 'nav-link-active': showAbout }"
          v-on:click="$emit('toggle-about')"
          href="javascript:;"
        >About</a>
      </li>
      <li class="nav-item nav-experience">
        <a
          class="nav-link"
          :class="{ 'nav-link-active': showTimeline || visibleExperience > 0 }"
          v-on:click="toggleAllTasks(showTimeline)"
          href="javascript:;"
        >Experience</a>
      </li>
      <li class="nav-item nav-portfolio">
        <a
          class="nav-link"
          :class="{ 'nav-link-active': showPortfolio }"
          v-on:click="$emit('toggle-portfolio')"
          href="javascript:;"
        >Portfolio</a>
      </li>
      <!-- <li class="nav-item nav-contact">
        <a
          class="nav-link"
          :class="{ 'nav-link-active': showContact }"
        >Contact</a>
      </li> -->
    </ul>

    <ul class="navbar-nav sidebar-nav skills-nav">
      <li class="nav-item">
        <div class="nav-link">Skills</div>
      </li>
      <li
        class="nav-item"
        v-for="skill in topSkills"
        v-bind:key="skill.id"
      >
        <button
          class="btn nav-link subnav-link"
          v-bind:class="{ 'active': skill.isActive }"
          role="button"
          v-on:click="$store.commit('toggleSkills', skill )"
        >{{ skill.label }}</button>
      </li>
      <li
        class="nav-item"
        v-if="!this.showSkills"
      >
        <button
          class="btn nav-link more-link"
          role="button"
          v-on:click="toggleSkillList"
        >More</button>
      </li>
      <li
        class="nav-item"
        v-else
      >
        <button
          class="btn nav-link more-link"
          role="button"
          v-on:click="toggleSkillList"
        >Less</button>
      </li>
    </ul>

  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "navigator",
  store,
  props: ["show-about", "show-timeline", "show-portfolio"],
  computed: {
    topSkills() {
      if (this.showSkills) {
        return store.getters.topSkills;
      } else {
        return store.getters.topSkills.slice(0, 4);
      }
    },
    visibleExperience() {
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
      return visibleTasks;
    }
  },
  methods: {
    toggleAllTasks() {
      let jobs = store.state.jobs;
      if (this.visibleExperience < jobs.length) {
        for (let j = 0; j < jobs.length; j++) {
          let tasks = jobs[j].tasks;
          for (let t = 0; t < tasks.length; t++) {
            tasks[t].showTask = true;
          }
        }
      } else {
        for (let j = 0; j < jobs.length; j++) {
          let tasks = jobs[j].tasks;
          for (let t = 0; t < tasks.length; t++) {
            tasks[t].showTask = false;
          }
        }
      }
    },
    toggleSkillList() {
      if (this.showSkills) {
        this.showSkills = false;
      } else {
        this.showSkills = true;
      }
    }
  }
};
</script>

<style>
.sidebar-nav .nav-item .nav-link {
  color: #fff;
  height: 4.5rem;
  padding: 1.5rem;
  border: none;
  border-left: 0.5rem solid #3e3e3e;
}
.sidebar-nav .nav-experience .nav-link-active {
  border-left: 0.5rem solid #f1a430;
}
.sidebar-nav .nav-portfolio .nav-link-active {
  border-left: 0.5rem solid #84a86b;
}
.sidebar-nav .nav-about .nav-link-active {
  border-left: 0.5rem solid #4cb7db;
}
.sidebar-nav .nav-skills .nav-link-active {
  border-left: 0.5rem solid #e64543;
}
.skills-nav {
  margin-top: 4rem;
}
.nav-item {
  border: none;
}
.skills-nav .nav-item .nav-link {
  color: #fff;
  border-left: 0.5rem solid #e64543;
}
.skills-nav .nav-item .subnav-link {
  color: #bcbcbc;
  height: 3.5rem;
  padding: 1rem 1.5rem;
  border-left: 0.5rem solid #3e3e3e;
  border-radius: 0;
}
.skills-nav .nav-item .subnav-link.active {
  border-left: 0.5rem solid rgba(230, 69, 67, 0.6);
}
.skills-nav .nav-link.more-link {
  border-left: 0.5rem solid #2f2f2f;
  margin-bottom: 5rem;
  color: #bcbcbc;
}
</style>