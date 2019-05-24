<template>
  <div id="app" class="container">

      <header id="header" class="row">
        <div class="col-sm-9">
          <h1 class="header">Christopher Ritter <br class="d-none d-block d-xl-none" /><span class="sub-header">UX&bsol;UI Designer</span></h1>
        </div>
        <div class="col-sm-3 pt-1 pb-4 pr-0">
          <a
            class="btn btn-contact float-right"
            href="https://www.pinterest.com/chrisritter/"
            target="_blank"
          ><svg
              style="width:48px;height:48px"
              viewBox="0 0 24 24"
              role="button"
            >
              <path
                fill="#4CB7DB"
                d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H9.29C9.69,20.33 10.19,19.38 10.39,18.64L11.05,16.34C11.36,16.95 12.28,17.45 13.22,17.45C16.17,17.45 18.22,14.78 18.22,11.45C18.22,8.28 15.64,5.89 12.3,5.89C8.14,5.89 5.97,8.67 5.97,11.72C5.97,13.14 6.69,14.89 7.91,15.45C8.08,15.56 8.19,15.5 8.19,15.34L8.47,14.28C8.5,14.14 8.5,14.06 8.41,14C7.97,13.45 7.69,12.61 7.69,11.78C7.69,9.64 9.3,7.61 12.03,7.61C14.42,7.61 16.08,9.19 16.08,11.5C16.08,14.11 14.75,15.95 13.03,15.95C12.05,15.95 11.39,15.11 11.55,14.17C11.83,13.03 12.39,11.83 12.39,11C12.39,10.22 12,9.61 11.16,9.61C10.22,9.61 9.39,10.61 9.39,11.95C9.39,12.83 9.66,13.39 9.66,13.39L8.55,18.17C8.39,19 8.47,20.25 8.55,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"
              />
            </svg></a>
          <a
            class="btn btn-contact float-right"
            role="button"
            href="https://www.linkedin.com/in/christopherritter"
            target="_blank"
          >
            <svg
              style="width:48px;height:48px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4CB7DB"
                d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"
              />
            </svg>
          </a>
          <a
            class="btn btn-contact float-right"
            role="button"
            href="mailto:chris@christopherritter.com"
          ><svg
              style="width:48px;height:48px"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4CB7DB"
                d="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4M12,11L20,6H4L12,11M4,18H20V8.37L12,13.36L4,8.37V18Z"
              />
            </svg></a>
        </div>
      </header>

      <main id="main" class="row">
        <div class="col-xl-3 d-none d-xl-block">
          <Navigator/>
        </div>
        <div class="col-lg-12 col-xl-9">
          <Resume/>
        </div>
      </main>

      <footer id="footer" class="row">
        <div class="row">
          <div class="col-xl-9 offset-xl-3">
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
      email: "chris@christopherritter.com"
    };
  },
  components: {
    Navigator,
    Resume
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
  line-height: 1;
}
h1 .sub-header {
  font-family: "Montserrat", sans-serif;
  color: #bcbcbc;
  font-size: 2.2rem;
  font-weight: lighter;
}
.progress .progress-bar {
  background-color: #e64543;
}
.btn-contact {
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0.25rem;
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
