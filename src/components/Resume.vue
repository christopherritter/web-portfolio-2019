<template>
  <div id="resume">

    <div
      id="header"
      class="row"
    >
      <div class="col-lg-3 d-none d-lg-block">
        <img
          id="portrait"
          class="img-fluid"
          :src="portrait"
        >
      </div>
      <div class="col-lg-8">
        <h1 class="header">Christopher Ritter</h1>
        <h2 class="sub-header">UX\UI Designer</h2>
      </div>
      <div class="col-lg-1 contact-buttons">
        <a
          class="btn btn-contact"
          role="button"
          :href="'mailto:' + email"
        ><svg
            style="width:36px;height:36px"
            viewBox="0 0 24 24"
          >
            <path
              fill="#4CB7DB"
              d="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4M12,11L20,6H4L12,11M4,18H20V8.37L12,13.36L4,8.37V18Z"
            />
          </svg>
        </a>
        <a
          class="btn btn-contact"
          role="button"
          :href="'https://www.' + linkedIn"
          target="_blank"
        ><svg
            style="width:36px;height:36px"
            viewBox="0 0 24 24"
          >
            <path
              fill="#4CB7DB"
              d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"
            />
          </svg>
        </a>
        <a
          class="btn btn-contact"
          :href="'https://www.' + pinterest"
          target="_blank"
        ><svg
            style="width:36px;height:36px"
            viewBox="0 0 24 24"
            role="button"
          >
            <path
              fill="#4CB7DB"
              d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H9.29C9.69,20.33 10.19,19.38 10.39,18.64L11.05,16.34C11.36,16.95 12.28,17.45 13.22,17.45C16.17,17.45 18.22,14.78 18.22,11.45C18.22,8.28 15.64,5.89 12.3,5.89C8.14,5.89 5.97,8.67 5.97,11.72C5.97,13.14 6.69,14.89 7.91,15.45C8.08,15.56 8.19,15.5 8.19,15.34L8.47,14.28C8.5,14.14 8.5,14.06 8.41,14C7.97,13.45 7.69,12.61 7.69,11.78C7.69,9.64 9.3,7.61 12.03,7.61C14.42,7.61 16.08,9.19 16.08,11.5C16.08,14.11 14.75,15.95 13.03,15.95C12.05,15.95 11.39,15.11 11.55,14.17C11.83,13.03 12.39,11.83 12.39,11C12.39,10.22 12,9.61 11.16,9.61C10.22,9.61 9.39,10.61 9.39,11.95C9.39,12.83 9.66,13.39 9.66,13.39L8.55,18.17C8.39,19 8.47,20.25 8.55,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"
            />
          </svg>
        </a>
      </div>
    </div>

    <div
      id="about"
      class="row"
    >

      <div class="col-12">
        <h6 class="section">ABOUT<a
            class="float-right"
            href="javascript:;"
            v-on:click="toggleAbout"
          ><span v-if="!$store.state.showAbout">MORE&nbsp;<svg
                style="width:18px;height:18px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000000"
                  d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"
                />
              </svg></span><span class="show-less" v-else>LESS&nbsp;<svg
                style="width:18px;height:18px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000000"
                  d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"
                />
              </svg></span></a></h6>
        <h1
          :class="{'d-none':!$store.state.showAbout}"
          class="display-4 mt-4 mb-3"
        >The Path of a UX Engineer</h1>
        <p
          class="lead"
          :class="{'d-none':!$store.state.showAbout}"
        >Many moons ago, I fancied myself a Web Designer until I was swept away by the advent of User Experience Design.</p>

        <p :class="{'d-none':!$store.state.showAbout}">In the decade that followed, I practiced the art of wireframing and annotating, diagramming user workflows, and gathering user feedback on design concepts. As the industry continued to evolve with
          the aid of Design Systems, so too has my knowledge of front-end frameworks. Now I have returned to my HTML/CSS/JS roots with the goal of becoming a UX Engineer.</p>

        <p class="subtext">This interactive resume allows you to focus on my professional skills that interest you most. Simply click on a <span class="bold bold-skill">Skill</span> &mdash; on the sidebar, or the timeline below &mdash; to see it
          hightlighted in my experience.</p>
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
        <h6 class="section">EXPERIENCE</h6>
        <timeline></timeline>
      </div>
      <div
        class="col-md-12 pb-5"
        :class="[{ 'col-lg-4': !$store.state.showTimeline},{ 'col-lg-2': $store.state.showTimeline }]"
      >
        <h6 class="section">SKILLS</h6>
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

    <!-- <div
      id="about"
      class="row"
    >

      <div class="col-12">
        <h6 class="section">CONTACT</h6>
        <a
          class="btn btn-contact"
          role="button"
          :href="'mailto:' + email"
        ><svg
            style="width:24px;height:24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="#4CB7DB"
              d="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4M12,11L20,6H4L12,11M4,18H20V8.37L12,13.36L4,8.37V18Z"
            />
          </svg>
          {{ email }}
        </a>
        <a
          class="btn btn-contact"
          role="button"
          :href="'https://www.' + linkedIn"
          target="_blank"
        ><svg
            style="width:24px;height:24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="#4CB7DB"
              d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"
            />
          </svg>
          {{ linkedIn }}
        </a>
        <a
          class="btn btn-contact"
          :href="'https://www.' + pinterest"
          target="_blank"
        ><svg
            style="width:24px;height:24px"
            viewBox="0 0 24 24"
            role="button"
          >
            <path
              fill="#4CB7DB"
              d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H9.29C9.69,20.33 10.19,19.38 10.39,18.64L11.05,16.34C11.36,16.95 12.28,17.45 13.22,17.45C16.17,17.45 18.22,14.78 18.22,11.45C18.22,8.28 15.64,5.89 12.3,5.89C8.14,5.89 5.97,8.67 5.97,11.72C5.97,13.14 6.69,14.89 7.91,15.45C8.08,15.56 8.19,15.5 8.19,15.34L8.47,14.28C8.5,14.14 8.5,14.06 8.41,14C7.97,13.45 7.69,12.61 7.69,11.78C7.69,9.64 9.3,7.61 12.03,7.61C14.42,7.61 16.08,9.19 16.08,11.5C16.08,14.11 14.75,15.95 13.03,15.95C12.05,15.95 11.39,15.11 11.55,14.17C11.83,13.03 12.39,11.83 12.39,11C12.39,10.22 12,9.61 11.16,9.61C10.22,9.61 9.39,10.61 9.39,11.95C9.39,12.83 9.66,13.39 9.66,13.39L8.55,18.17C8.39,19 8.47,20.25 8.55,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"
            />
          </svg>
          {{ pinterest }}
        </a>
      </div>
    </div> -->

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
      portrait: "/img/Self-Portrait_2019.png",
      email: "chris@christopherritter.com",
      pinterest: "pinterest.com/chrisritter",
      linkedIn: "linkedin.com/in/christopherritter",
      max: 20
    };
  },
  computed: {
    topSkills() {
      return store.getters.topSkills.slice(0, 6);
    }
  },
  methods: {
    toggleAbout() {
      store.state.showAbout = !store.state.showAbout;
    },
    expandTimeline() {
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
h1.header {
  color: #fff;
  font-size: 3.5rem;
  font-weight: 600;
  padding: 0;
  margin: 2.75rem 0 1rem 0;
  line-height: 1;
}
h2.sub-header {
  font-family: "Montserrat", sans-serif;
  color: #bcbcbc;
  font-size: 2.2rem;
  font-weight: lighter;
}
h6.section {
  color: #bcbcbc;
  font-size: 0.85rem;
  margin: 0.5rem 0 1.25rem 0;
  padding: 0.5rem 0;
  border-bottom: 1px solid #3d3d3d;
}
h6 a span.show-less {
  color: #4cb7db;
}
h6 a svg {
  margin-bottom: 3px;
}
h6 a svg path {
  fill: #bcbcbc;
}
h6 a span.show-less svg path,
h6 a:hover svg path {
  fill: #4cb7db;
}
.jumbotron {
  padding: 4rem 3rem 2rem 3rem;
  background-color: #3d3d3d;
  background-image: url("../assets/moon-vector.svg");
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: 100%;
}
.jumbotron-hover {
  cursor: pointer;
}
.jumbotron-lite {
  padding: 0 1.5rem;
  background: 0;
}
p {
  color: #ffffff;
  line-height: 1.75rem;
}
p.lead {
  line-height: 2rem;
}
p .bold-skill {
  color: #ffffff;
  font-style: normal;
  font-size: 0.75rem;
  padding: 0 4px;
  margin: 0.1rem;
  border: 2px solid #3e3e3e;
  text-transform: uppercase;
  border: 2px solid #e64543;
  border-radius: 0.25rem;
}
p.subtext {
  color: #bcbcbc;
  font-style: italic;
  font-size: 0.9rem;
}
p.subtext-lite {
  margin-bottom: 0;
}
.contact-buttons {
  padding-top: 1.5rem;
}
@media only screen and (min-width: 992px) {
  .contact-buttons {
    padding-top: 2.5rem;
  }
}
.btn-contact {
  display: float;
  float: right;
  color: #4cb7db;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0.25rem;
  text-align: left;
}
</style>
