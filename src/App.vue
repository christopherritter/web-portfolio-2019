<template>
  <div
    id="app"
    class="container"
  >
    <main
      id="main"
      class="row"
    >
      <div class="col-xl-2 d-none d-xl-block">
        <Navigator />
      </div>
      <div class="col-lg-12 col-xl-10">
        <Resume />
      </div>
    </main>

    <footer
      id="footer"
      class="row"
    >

      <div class="col-xl-10 offset-xl-2">
        <p>&copy; 2019 Christopher Ritter. Built with <a
            target="_blank"
            href="https://vuejs.org/"
          >VueJS.</a> Available on <a
            target="_blank"
            href="https://github.com/christopherritter/web-portfolio-2019"
          >GitHub</a>.
        </p>
        <p>Icons from <a
            target="_blank"
            href="https://materialdesignicons.com/"
          >Material Design Icons</a>. Vector graphics by <a
            target="_blank"
            href="https://www.vecteezy.com/"
          >Vecteezy</a>.</p>
      </div>

    </footer>

  </div>
</template>

<script>
import store from "@/store";
import Navigator from "@/components/Navigator.vue";
import Resume from "@/components/Resume.vue";

export default {
  name: "app",
  store,
  data() {
    return {
      showAbout: store.state.showAbout,
      showTimeline: store.state.showTimeline,
      showPortfolio: store.state.showPortfolio
    };
  },
  components: {
    Navigator,
    Resume
  },
  methods: {
    toggleAbout: function() {
      this.showAbout = !this.showAbout;
    },
    toggleTimeline: function() {
      this.showTimeline = !this.showTimeline;
    },
    togglePortfolio: function() {
      this.showPortfolio = !this.showPortfolio;
    }
  }
};
</script>

<style>
*:focus {
  outline: 0;
}
#app {
  margin-top: 2rem;
}
body {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #2f2f2f;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Cairo", sans-serif;
}
a {
  color: #bcbcbc;
}
a:hover {
  color: #fff;
  text-decoration: none;
}
.progress .progress-bar {
  background-color: #e64543;
}
footer {
  margin-top: 3rem;
  margin-bottom: 2rem;
}
footer p {
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}
</style>
