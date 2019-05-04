<template>
  <div class="timeline">
    <div
      class="tl-job"
      v-for="job in this.$store.state.jobs"
      v-bind:key="job.id"
    >

      <!-- Job -->

      <div class="tl-header d-flex">
        <div class="tl-date">
          <div
            class="tl-date-flag"
            v-if="job.startDate == job.endDate"
          >{{ job.endDate }}</div>
          <div
            class="tl-date-flag"
            v-else
          >{{ job.startDate }} &ndash; {{ job.endDate }}</div>
        </div>

        <div class="tl-line-job">
          <button
            role="button"
            class="btn btn-bubble"
            v-on:click="toggleTasks(job)"
          ></button>
          <div
            class="bubble-line"
            :class="{ 'bubble-line-tall' : !relevantSkills }"
          ></div>
        </div>

        <div>
          <h6 class="tl-job">{{ job.title }}</h6>
          <h5 class="tl-company">{{ job.company }}</h5>
        </div>
      </div>

      <!-- Tasks -->

      <div
        class="tl-task"
        v-for="task in job.tasks"
        v-bind:key="task.id"
      >

        <!-- Description -->

        <div
          class="tl-desc d-flex"
          v-if="task.showTask === true && isRelevant(task)"
        >
          <div class="tl-line-desc">
            <button
              role="button"
              class="btn btn-bubble-sm rounded-circle"
              v-on:click="task.showDeliverable = !task.showDeliverable"
            ></button>
            <div class="bubble-line"></div>
          </div>
          <div class="tl-desc-text">
            {{ task.description }}
          </div>
          <div
            class="ml-auto"
            v-if="task.deliverables"
          >
            <button
              role="button"
              class="btn btn-view"
              v-on:click="task.showDeliverable = !task.showDeliverable"
            >
              <svg
                style="width:32px;height:32px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#84A86B"
                  d="M15.5,9C16.2,9 16.79,8.76 17.27,8.27C17.76,7.79 18,7.2 18,6.5C18,5.83 17.76,5.23 17.27,4.73C16.79,4.23 16.2,4 15.5,4C14.83,4 14.23,4.23 13.73,4.73C13.23,5.23 13,5.83 13,6.5C13,7.2 13.23,7.79 13.73,8.27C14.23,8.76 14.83,9 15.5,9M19.31,8.91L22.41,12L21,13.41L17.86,10.31C17.08,10.78 16.28,11 15.47,11C14.22,11 13.16,10.58 12.3,9.7C11.45,8.83 11,7.77 11,6.5C11,5.27 11.45,4.2 12.33,3.33C13.2,2.45 14.27,2 15.5,2C16.77,2 17.83,2.45 18.7,3.33C19.58,4.2 20,5.27 20,6.5C20,7.33 19.78,8.13 19.31,8.91M16.5,18H5.5L8.25,14.5L10.22,16.83L12.94,13.31L16.5,18M18,13L20,15V20C20,20.55 19.81,21 19.41,21.4C19,21.79 18.53,22 18,22H4C3.45,22 3,21.79 2.6,21.4C2.21,21 2,20.55 2,20V6C2,5.47 2.21,5 2.6,4.59C3,4.19 3.45,4 4,4H9.5C9.2,4.64 9.03,5.31 9,6H4V20H18V13Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Deliverables -->

        <div
          class="tl-delis d-flex"
          v-if="task.showDeliverable === true && isRelevant(task) && task.deliverables"
        >
          <div class="tl-line-delis">

            <button
              role="button"
              class="btn btn-bubble-sm rounded-circle"
            ></button>
            <div class="bubble-line"></div>
          </div>
          <div class="tl-task-deliverable-desc">
            <div
              class="jumbotron"
              v-if="task.deliverables"
            >
              <div
                v-for="delis in task.deliverables"
                v-bind:key="delis.id"
              >

                <h4>{{ delis.title }}</h4>

                <p v-if="delis.description">{{ delis.description }}</p>

                <img
                  :src="delis.img"
                  @click="showDeli"
                >

                <!-- Deliverable Modal -->

                <b-modal
                  :id="'modal-' + delis.id"
                  size="xl"
                  hide-footer
                  centered
                  :title="delis.title"
                >
                  <p v-if="delis.description">{{ delis.description }}</p>
                  <p class="m-2">
                    <img
                      :src="delis.img"
                      @click="showDeli(delis.id)"
                    ></p>
                </b-modal>

              </div>
            </div>
          </div>
        </div>

        <!-- Skills -->

        <div
          class="tl-skills d-flex"
          v-if="task.showDeliverable === true && task.deliverables  || task.showTask === true && isRelevant(task)"
        >
          <div class="tl-line-skills">
            <div class="bubble-line"></div>
          </div>
          <div class="tl-skill-list">
            <button
              role="button"
              class="btn btn-skill"
              v-bind:class="{ 'active': skill.isActive }"
              v-for="skill in task.skills"
              v-bind:key="skill.label"
              v-on:click="$store.commit('toggleSkills', skill )"
            >{{ skill.label }}</button>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "timeline",
  store,
  props: ["tasks", "deliverables"],
  data() {
    return {
      showModal: false
    };
  },
  created: function() {
    if (this.tasks === "show") {
      store.dispatch("showTasks");
    } else {
      store.dispatch("hideTasks");
    }
    if (this.deliverables === "show") {
      store.dispatch("showDelis");
    } else {
      store.dispatch("hideDelis");
    }
  },
  computed: {
    relevantSkills: function() {
      let j;
      let t;
      let s;
      let relevantList = [];
      for (j = 0; j < store.state.jobs.length; j++) {
        for (t = 0; t < store.state.jobs[j].tasks.length; t++) {
          for (s = 0; s < store.state.jobs[j].tasks[t].skills.length; s++) {
            if (store.state.jobs[j].tasks[t].skills[s].isActive) {
              relevantList.push(store.state.jobs[j].tasks[t].skills[s]);
            }
          }
        }
      }
      if (relevantList === undefined || relevantList.length == 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    isRelevant: function(task) {
      let s;
      let relevantList = [];
      for (s = 0; s < task.skills.length; s++) {
        if (task.skills[s].isActive) {
          relevantList.push(s);
        }
      }
      if (relevantList === undefined || relevantList.length == 0) {
        return false;
      } else {
        return true;
      }
    },
    toggleTasks: function(job) {
      let t;
      for (t = 0; t < store.state.jobs[job.id].tasks.length; t++) {
        let task = store.state.jobs[job.id].tasks[t];
        if (task.showTask) {
          task.showTask = false;
        } else {
          task.showTask = true;
        }
      }
    },
    showDeli() {
      this.$root.$emit("bv::show::modal", "modal-0", "#btnShow");
    },
    hideDeli() {
      this.$root.$emit("bv::hide::modal", "modal-0", "#btnShow");
    },
    toggleDeli() {
      this.$root.$emit("bv::toggle::modal", "modal-0", "#btnToggle");
    }
  }
};
</script>

<style>
.tl-date {
  width: 135px;
  padding-right: 10px;
}

.tl-date-flag {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1rem;
  text-transform: uppercase;
  padding: 25pt 10pt;
  text-align: center;
}

h6.tl-job {
  font-family: inherit;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 400;
  margin-top: 12px;
  margin-bottom: 3px;
  color: #bcbcbc;
}

h5.tl-company {
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 400;
  margin-bottom: 0;
}

.tl-desc-text {
  padding-top: 5px;
  padding-bottom: 10px;
}

.tl-line-job {
  margin-right: 35px;
}

.tl-line-desc {
  margin-right: 50px;
}

.tl-line-job button,
.tl-line-desc button {
  background-color: #f1a430;
  border: 5px solid #3e3e3e;
}

.tl-line-desc,
.tl-line-delis {
  margin-left: 150px;
}

.tl-line-skills {
  margin-left: 172px;
  margin-right: 67px;
}

.tl-line-delis {
  margin-right: 50px;
}

.tl-line-delis button {
  background-color: #84a86b;
  border: 5px solid #3e3e3e;
}
.tl-line-delis .bubble-line {
  height: 100%;
}

.btn-bubble {
  border-radius: 50% !important;
  width: 80px;
  height: 80px;
}

.btn-bubble-sm {
  border-radius: 50% !important;
  width: 50px;
  height: 50px;
}

.btn-view {
  padding: 0;
  margin-left: 10px;
  margin-top: 5px;
}

.btn-skill {
  font-size: 0.75rem;
  padding: 0 4px;
  margin: 0 5px;
  color: #bcbcbc;
  border: 2px solid #3e3e3e;
  text-transform: uppercase;
}

.btn-skill.active {
  color: #fff;
  border: 2px solid #e64543;
}

.bubble-line {
  display: block;
  width: 5px;
  height: 100%;
  min-height: 10px;
  border: none;
  border-radius: 0;
  padding: 0;
  background-color: #3e3e3e;
  margin: 0 auto;
}

.tl-line-job .bubble-line-tall {
  height: 50px;
}

.tl-job:last-child .btn-bubble {
  margin-bottom: 60px;
}

.tl-job:last-child .bubble-line {
  display: none;
}

.tl-skills .tl-skill-list {
  margin-bottom: 20px;
}

.tl-task-deliverable-desc .jumbotron {
  padding: 15px;
  color: #fff;
  background-color: #3e3e3e;
  margin-top: 5px;
  margin-bottom: 10px;
}

.tl-task-deliverable-desc h4 {
  margin-top: 25px;
  margin-bottom: 15px;
}

.tl-task-deliverable-desc .jumbotron div:first-child h4 {
  margin-top: 0px;
}

.tl-task-deliverable-desc img {
  width: 100%;
}

.tl-task-deliverable-desc p {
  font-size: 0.9rem;
  margin-top: 5px;
  margin-bottom: 15px;
  
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-dialog .modal-header {
  border-bottom: none;
  padding-bottom: 0;
}

.modal-dialog .modal-content {
  background-color: #3e3e3e;
}
</style>