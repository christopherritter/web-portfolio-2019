<template>
  <div
    id="navigator"
    class="row"
  >
  
    <ul class="navbar-nav sidebar-nav">
      <li class="nav-item nav-about">
        <a
          class="nav-link"
          :class="{ 'nav-link-active': $store.state.showAbout }"
          v-on:click="toggleAbout"
          href="javascript:;"
        >About</a>
      </li>
      <li class="nav-item nav-experience">
        <a
          class="nav-link"
          :class="{ 'nav-link-active': visibleTasks > 0 }"
          v-on:click="toggleAllTasks"
          href="javascript:;"
        >Experience</a>
      </li>
      <li class="nav-item nav-portfolio">
        <a
          class="nav-link"
          :class="{ 'nav-link-active': $store.state.showPortfolio }"
          v-on:click="togglePortfolio"
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
  data() {
    return {
      showSkills: false
    };
  },
  computed: {
    topSkills() {
      if (this.showSkills) {
        return store.getters.topSkills;
      } else {
        return store.getters.topSkills.slice(0, 6);
      }
    },
    visibleTasks() {
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
    toggleAbout() {
      store.state.showAbout = !store.state.showAbout;
    },
    toggleAllTasks() {
      let jobs = store.state.jobs;
      if (this.visibleTasks < jobs.length) {
        for (let j = 0; j < jobs.length; j++) {
          let tasks = jobs[j].tasks;
          for (let t = 0; t < tasks.length; t++) {
            tasks[t].showTask = true;
          }
          store.state.showTimeline = true;
        }
      } else {
        for (let j = 0; j < jobs.length; j++) {
          let tasks = jobs[j].tasks;
          for (let t = 0; t < tasks.length; t++) {
            tasks[t].showTask = false;
          }
        }
        store.state.showTimeline = false;
        store.state.showPortfolio = false;
      }
    },
    toggleSkillList() {
      if (this.showSkills) {
        this.showSkills = false;
      } else {
        this.showSkills = true;
      }
    },
    togglePortfolio() {
      let jobs = store.state.jobs;
      if (store.state.showPortfolio == false) {
        for (let j = 0; j < jobs.length; j++) {
          let tasks = jobs[j].tasks;
          for (let t = 0; t < tasks.length; t++) {
            tasks[t].showDeliverable = true;
          }
        }
        store.state.showTimeline = true;
        store.state.showPortfolio = true;
      } else {
        for (let j = 0; j < jobs.length; j++) {
          let tasks = jobs[j].tasks;
          for (let t = 0; t < tasks.length; t++) {
            tasks[t].showDeliverable = false;
          }
        }
        store.state.showTimeline = false;
        store.state.showPortfolio = false;
      }
    }
  }
};
</script>

<style>
#navigator {
  padding-top: 0.5rem;
}

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