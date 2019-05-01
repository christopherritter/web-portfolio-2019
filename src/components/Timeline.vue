<template>
  <div class="timeline">
    <div
      class="tl-job"
      v-for="job in jobs"
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
          <a
            href="#"
            class="btn btn-bubble"
            role="button"
            v-on:click="toggleTasks(job)"
          ></a>
          <div class="bubble-line"></div>
        </div>

        <div class="tl-event">
          <h5 class="tl-event-job">{{ job.title }}</h5>
          <h6 class="tl-event-company">{{ job.company }}</h6>
        </div>
      </div>

      <!-- Tasks -->

      <div
        class="tl-task"
        v-for="task in job.tasks"
        v-bind:key="task"
      >

        <!-- Description -->

        <div
          class="tl-desc d-flex"
          v-if="task.showTask === true"
        >
          <div class="tl-line-desc">
            <a
              href="#"
              class="btn btn-bubble-sm rounded-circle"
              role="button"
              v-on:click="task.showDeliverable = !task.showDeliverable"
            ></a>
            <div class="bubble-line"></div>
          </div>
          <div class="tl-desc-text">
            {{ task.description }}
          </div>
          <div class="ml-auto">
            <a
              href="#"
              class="btn btn-view"
              v-on:click="task.showDeliverable = !task.showDeliverable"
            >
              <svg
                style="width:24px;height:24px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#84A86B"
                  d="M15.5,9C16.2,9 16.79,8.76 17.27,8.27C17.76,7.79 18,7.2 18,6.5C18,5.83 17.76,5.23 17.27,4.73C16.79,4.23 16.2,4 15.5,4C14.83,4 14.23,4.23 13.73,4.73C13.23,5.23 13,5.83 13,6.5C13,7.2 13.23,7.79 13.73,8.27C14.23,8.76 14.83,9 15.5,9M19.31,8.91L22.41,12L21,13.41L17.86,10.31C17.08,10.78 16.28,11 15.47,11C14.22,11 13.16,10.58 12.3,9.7C11.45,8.83 11,7.77 11,6.5C11,5.27 11.45,4.2 12.33,3.33C13.2,2.45 14.27,2 15.5,2C16.77,2 17.83,2.45 18.7,3.33C19.58,4.2 20,5.27 20,6.5C20,7.33 19.78,8.13 19.31,8.91M16.5,18H5.5L8.25,14.5L10.22,16.83L12.94,13.31L16.5,18M18,13L20,15V20C20,20.55 19.81,21 19.41,21.4C19,21.79 18.53,22 18,22H4C3.45,22 3,21.79 2.6,21.4C2.21,21 2,20.55 2,20V6C2,5.47 2.21,5 2.6,4.59C3,4.19 3.45,4 4,4H9.5C9.2,4.64 9.03,5.31 9,6H4V20H18V13Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Skills -->

        <div class="tl-skills d-flex">
          <div class="tl-line-skills">
            <div class="bubble-line"></div>
          </div>
          <div class="tl-skill-list">
            <a
              href="#"
              class="btn btn-skill"
              v-for="skill in task.skills"
              v-bind:key="skill"
            >{{ skill }}</a>
          </div>
        </div>

        <!-- Deliverables -->

        <div
          class="tl-delis d-flex"
          v-if="task.showDeliverable === true"
        >
          <div class="tl-line-delis align-items-stretch">
            <a
              href="#"
              class="btn btn-bubble-sm rounded-circle"
              role="button"
              v-on:click="task.showDeliverable = !task.showDeliverable"
            ></a>
            <div class="bubble-line"></div>
          </div>
          <div class="tl-task-deliverable-desc">
            <div class="jumbotron">
              <img src="../assets/CX10-Home.png">
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
var data = function() {
  return {
    jobs: [
      {
        id: 0,
        title: "User Experience Designer",
        company: "Jenzabar, Inc.",
        startDate: 2015,
        endDate: "Now",
        tasks: [
          {
            description:
              "Provided design assistance to local, remote, and offshore development teams by delivering wireframes and various UI elements (fonts, icons, colors) within an Agile environment.",
            skills: ["ux", "ui"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Developed prototypes using Java/SmartGWT to demonstrate interactions and responsive layouts.",
            skills: ["ux", "ui"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Redesigned UI of two flagship products using Adobe XD for concept design and feedback.",
            skills: ["ux", "ui"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Developed the front-end for the desktop solution using QT/C++.",
            skills: ["ux", "ui"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Refactored ASP for the online portal to utilize Bootstrap/Sass for responsive layouts.",
            skills: ["ux", "ui"],
            showTask: true,
            showDeliverable: false
          }
        ]
      },
      {
        id: 1,
        title: "Experience Design Consultant",
        company: "Strategic Data Systems",
        startDate: 2015,
        endDate: 2015,
        location: "New Bremen, Ohio",
        tasks: [
          {
            description:
              "Contracted to provide front-end assistance (HTML/CSS/JS) for Crown Equipment to implement a responsive design for their corporate site managed by Adobe Experience Manager.",
            skills: ["ux", "ui"],
            showTask: true,
            showDeliverable: false
          }
        ]
      },
      {
        id: 2,
        title: "User Experience Designer",
        company: "Trimble Navigation",
        startDate: 2014,
        endDate: 2015,
        location: "Huber Heights, Ohio",
        tasks: [
          {
            description:
              "Brainstormed concepts with machine operators using Gamestorming techniques to generate new ideas.",
            skills: ["ux", "ui"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Developed HTML/Bootstrap prototypes for field testing with machine operators.",
            skills: ["ux", "ui"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Conducted field research of the construction industry across the US and Canada, providing top level reports of my findings to primary stakeholders.",
            skills: ["ux", "ui"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Modeled an excavator and work site using Trimble SketchUp.",
            skills: ["ux", "ui"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Provided design assets for Android/Vuforia prototypes, and for production within an Agile environment, which included style guides and custom icons for Android applications.",
            skills: ["ux", "ui"],
            showTask: true,
            showDeliverable: false
          }
        ]
      },
      {
        id: 3,
        title: "Idea Designer",
        company: "LexisNexis",
        startDate: 2010,
        endDate: 2013,
        location: "Miamisburg, Ohio",
        tasks: [
          {
            description:
              "Created annotated wireframes to support the development of Lexis Advance.",
            skills: ["ux", "ui"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Conducted concept testing and usability research with legal professionals, and delivered top level reports of my discussions to primary stakeholders. ",
            skills: ["ux", "ui"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Lead brainstorming workshops with legal professionals using Gamestorming techniques to generate new ideas.",
            skills: ["ux", "ui"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Founding member of the Customer Discovery & Innovation team which designed, prototyped, and tested the most popular concepts from our innovation pipeline.",
            skills: ["ux", "ui"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Design Lead for several innovative products including Lexis Answers.",
            skills: ["ux", "ui"],
            showTask: true,
            showDeliverable: false
          }
        ]
      },
      {
        id: 4,
        title: "Senior Experience Planner",
        company: "Bridge Worldwide",
        startDate: 2009,
        endDate: 2010,
        location: "Cincinnati, Ohio",
        tasks: [
          {
            description:
              "Planned the digital experience of social, mobile, and web applications for corporate clients that included P&G, Pearle Vision, and Red Bull.",
            skills: ["ux"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Lead brainstorming sessions with creative, technical, and business leads to generate new ideas.",
            skills: ["ux"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Illustrated user flows, site maps, and wireframes to assist the design and development teams.",
            skills: ["ux"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Documented features and functionality for project management, and provided competitive analysis of similar products on the market.",
            skills: ["ux"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Conducted usability testing with potential customers and reported insights back to the team.",
            skills: ["ux"],
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Presented initial concepts, customer feedback, and other deliverables to the clients.",
            skills: ["ux"],
            showTask: true,
            showDeliverable: false
          }
        ]
      }
    ]
  };
};

export default {
  name: "timeline",
  data,
  props: ["tasks", "deliverables"],
  created: function() {
    var j; /* jobs */
    var t; /* tasks */
    this.checkTasks(j, t);
    this.checkDeliverables(j, t);
  },
  methods: {
    checkTasks: function(j, t) {
      if (this.tasks === "show") {
        for (j = 0; j < this.jobs.length; j++) {
          for (t = 0; t < this.jobs[j].tasks.length; t++) {
            this.jobs[j].tasks[t].showTask = true;
          }
        }
      } else {
        for (j = 0; j < this.jobs.length; j++) {
          for (t = 0; t < this.jobs[j].tasks.length; t++) {
            this.jobs[j].tasks[t].showTask = false;
          }
        }
      }
    },
    toggleTasks: function(jobs, t) {
      for (t = 0; t < jobs.tasks.length; t++) {
        if (jobs.tasks[t].showTask) {
          jobs.tasks[t].showTask = false;
          jobs.tasks[t].showDeliverable = false;
        } else {
          jobs.tasks[t].showTask = true;
        }
      }
    },
    checkDeliverables: function(j, t) {
      if (this.deliverables === "show") {
        for (j = 0; j < this.jobs.length; j++) {
          for (t = 0; t < this.jobs[j].tasks.length; t++) {
            this.jobs[j].tasks[t].showDeliverable = true;
          }
        }
      } else {
        for (j = 0; j < this.jobs.length; j++) {
          for (t = 0; t < this.jobs[j].tasks.length; t++) {
            this.jobs[j].tasks[t].showDeliverable = false;
          }
        }
      }
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
  padding: 10pt 5px;
  text-align: center;
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

.tl-line-job a,
.tl-line-desc a {
  background-color: #f1a430;
  border: 6px solid #3e3e3e;
}

.tl-line-desc,
.tl-line-delis {
  margin-left: 150px;
}

.tl-line-skills {
  margin-left: 172px;
}

.tl-line-delis a {
  background-color: #84a86b;
  border: 6px solid #3e3e3e;
}
.tl-line-delis .bubble-line {
  height: 100%;
}

.bubble-line {
  display: block;
  width: 6px;
  height: 40px;
  border: none;
  border-radius: 0;
  padding: 0;
  background-color: #3e3e3e;
  margin: 0 auto;
}

.tl-job:last-child .btn-bubble {
  margin-bottom: 60px;
}

.tl-job:last-child .bubble-line {
  display: none;
}

h5.tl-event-job {
  font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: 600;
}

h6.tl-event-company {
  font-size: 1.75rem;
  line-height: 2rem;
  font-weight: 400;
  margin-bottom: 15px;
}

.tl-event .tl-event-task-list {
  list-style: none;
  padding-left: 0;
}

.tl-event .tl-event-task-list li {
  padding-top: 20px;
  padding-bottom: 10px;
}

.tl-event .btn-link {
  font-size: 14px;
  text-decoration: none;
}

.tl-task-desc {
  position: relative;
}

.tl-task-deliverable-desc .jumbotron {
  padding: 15px;
  color: #fff;
  background-color: #3e3e3e;
}

.tl-task-deliverable-desc img {
  width: 100%;
}

.tl-task-desc-lit {
  float: left;
  margin-right: 50px;
}
</style>