<template>
  <div id="app">
    <div class="container">
      <div id="header" class="row">
        <div class="col-sm-12">
          <h1 class="header">Christopher Ritter <span class="sub-header">UX&bsol;UI Designer</span></h1>
        </div>
      </div>
      <div id="content" class="row">
        <div id="navigation" class="col-sm-3">
          <ul class="navbar-nav sidebar-nav">
            <li class="nav-item nav-about">
              <router-link
                class="nav-link"
                to="/"
              >About</router-link>
            </li>
            <li class="nav-item nav-experience">
              <router-link
                class="nav-link"
                to="/experience"
              >Experience</router-link>
            </li>
            <li class="nav-item nav-portfolio">
              <router-link
                class="nav-link"
                to="/portfolio"
              >Portfolio</router-link>
            </li>
            <li class="nav-item nav-contact">
              <router-link
                class="nav-link"
                to="/contact"
              >Contact</router-link>
            </li>
          </ul>
          <ul class="navbar-nav sidebar-nav skills-nav">
            <li class="nav-item" v-for="job in jobStore.jobs">
              <a
                class="nav-link subnav-link"
                href="#"
              >{{ job.id }}</a>
            </li>
          </ul>
        </div>
        <router-view class="col-sm-9" />
      </div>
    </div>
  </div>
</template>

<script>
import jobStore from './jobStore'

export default {
  name: "app",
  data() {
    return {
      jobStore: jobStore.data
    }
  }
};
</script>

<style>
*:focus {
  outline: 0;
}
#app {
  margin-top: 3rem;
}
body {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #2f2f2f;
}
a {
  color: #bcbcbc;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Cairo", sans-serif;
}
h1.header {
  font-size: 3.5rem;
  font-weight: 600;
  padding-bottom: 3rem;
}
h1 .sub-header {
  font-family: "Montserrat", sans-serif;
  color: #bcbcbc;
  font-size: 2.2rem;
  font-weight: lighter;
}
.sidebar-nav .nav-item .nav-link {
  height: 4.5rem;
  padding: 1.5rem;
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
  border-left: 0.5rem solid #bcbcbc;
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
.skills-nav .nav-item .nav-link {
  color: #fff;
  border-left: 0.5rem solid #e64543;
}
.skills-nav .nav-item .subnav-link {
  height: 3.5rem;
  padding: 1rem 1.5rem;
  border-left: 0.5rem solid rgba(230, 69, 67, 0.6);
}
</style>
