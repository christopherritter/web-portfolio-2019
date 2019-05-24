<template>
  <div id="navigator">

    <ul class="navbar-nav sidebar-nav">
      <li class="nav-item nav-about">
        <a
          class="nav-link"
          to="/"
        >About</a>
      </li>
      <li class="nav-item nav-experience">
        <a
          class="nav-link"
          to="/experience"
        >Experience</a>
      </li>
      <li class="nav-item nav-portfolio">
        <a
          class="nav-link"
          to="/portfolio"
        >Portfolio</a>
      </li>
      <!--
      <li class="nav-item nav-contact">
        <a
          class="nav-link"
          to="/contact"
        >Contact</a>
      </li>
      -->
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
        v-if="!this.showAllSkills"
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
      showAllSkills: false
    };
  },
  computed: {
    topSkills() {
      if (this.showAllSkills) {
        return store.getters.topSkills;
      } else {
        return store.getters.topSkills.slice(0, 4);
      }
    }
  },
  methods: {
    toggleSkillList() {
      if (this.showAllSkills) {
        this.showAllSkills = false;
      } else {
        this.showAllSkills = true;
      }
    }
  }
};
</script>

<style>
.sidebar-nav .nav-item .nav-link {
  height: 4.5rem;
  padding: 1.5rem;
  border: none;
  border-left: 0.5rem solid #3e3e3e;
}
.sidebar-nav .nav-item .nav-link:hover,
.sidebar-nav .nav-item .router-link-exact-active {
  color: #fff;
}
.sidebar-nav .nav-experience .router-link-exact-active {
  border-left: 0.5rem solid #f1a430;
}
.sidebar-nav .nav-portfolio .router-link-exact-active {
  border-left: 0.5rem solid #84a86b;
}
.sidebar-nav .nav-contact .router-link-exact-active {
  border-left: 0.5rem solid #4cb7db;
}
.sidebar-nav .nav-skills .router-link-exact-active {
  border-left: 0.5rem solid #e64543;
}
.sidebar-nav .nav-about .router-link-exact-active {
  border-left: 0.5rem solid #4cb7db;
}
.sidebar-nav .nav-experience .router-link-exact-active {
  border-left: 0.5rem solid #f1a430;
}
.sidebar-nav .nav-portfolio .router-link-exact-active {
  border-left: 0.5rem solid #84a86b;
}
.sidebar-nav .nav-contact .router-link-exact-active {
  border-left: 0.5rem solid #4cb7db;
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