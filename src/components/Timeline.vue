<template>
  <div class="timeline">
    <div
      class="tl-job clearfix"
      v-for="job in jobs"
      v-bind:key="job.id"
    >
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

      <div class="tl-line">
        <a
          href="#"
          class="btn btn-bubble btn-bubble-experience rounded-circle"
          role="button"
          v-on:click="job.showTasks = !job.showTasks"
        ></a>
        <div class="btn btn-bubble-line"></div>
      </div>

      <div class="tl-event clearfix">
        <h5 class="tl-event-job">{{ job.title }}</h5>
        <h6 class="tl-event-company">{{ job.company }}</h6>
      </div>

      <!-- Task List -->

      <div class="tl-task-list">

        <!-- Task -->

        <div
          class="tl-task clearfix"
          v-for="task in job.tasks"
          v-bind:key="task"
        >

          <!-- Task Bubble -->

          <div
            class="tl-line"
            v-if="task.showTask === true"
          >
            <a
              href="#"
              class="btn btn-bubble-sm btn-bubble-experience rounded-circle"
              role="button"
              v-on:click="task.showTask = !task.showTask"
            ></a>
            <div class="btn btn-bubble-line"></div>
          </div>

          <!-- Task Description -->

          <div
            class="tl-task-desc clearfix"
            v-if="task.showTask === true"
          >
            {{ task.description }}
          </div>

          <!-- Task Deliverable -->

          <div
            class="tl-task-deliverable"
            v-if="task.showDeliverable === true"
          >

            <!-- Task Deliverable Bubble -->

            <div class="tl-line">
              <a
                href="#"
                class="btn btn-bubble-sm btn-bubble-portfolio rounded-circle"
                role="button"
                v-on:click="task.showDeliverable = !task.showDeliverable"
              ></a>
              <div class="btn btn-bubble-line"></div>
            </div>

            <!-- Task Deliverable Description -->

            <div class="tl-task-deliverable-desc">
              <div class="jumbotron">
                <img src="../assets/CX10-Home.png">
              </div>
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
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Developed prototypes using Java/SmartGWT to demonstrate interactions and responsive layouts.",
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Redesigned UI of two flagship products using Adobe XD for concept design and feedback.",
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Developed the front-end for the desktop solution using QT/C++.",
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Refactored ASP for the online portal to utilize Bootstrap/Sass for responsive layouts.",
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
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Developed HTML/Bootstrap prototypes for field testing with machine operators.",
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Conducted field research of the construction industry across the US and Canada, providing top level reports of my findings to primary stakeholders.",
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Modeled an excavator and work site using Trimble SketchUp.",
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Provided design assets for Android/Vuforia prototypes, and for production within an Agile environment, which included style guides and custom icons for Android applications.",
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
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Conducted concept testing and usability research with legal professionals, and delivered top level reports of my discussions to primary stakeholders. ",
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Lead brainstorming workshops with legal professionals using Gamestorming techniques to generate new ideas.",
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Founding member of the Customer Discovery & Innovation team which designed, prototyped, and tested the most popular concepts from our innovation pipeline.",
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Design Lead for several innovative products including Lexis Answers.",
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
        location: "",
        tasks: [
          {
            description:
              "Planned the digital experience of social, mobile, and web applications for corporate clients that included P&G, Pearle Vision, and Red Bull.",
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Lead brainstorming sessions with creative, technical, and business leads to generate new ideas.",
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Illustrated user flows, site maps, and wireframes to assist the design and development teams.",
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Documented features and functionality for project management, and provided competitive analysis of similar products on the market.",
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Conducted usability testing with potential customers and reported insights back to the team.",
            showTask: true,
            showDeliverable: false
          },
          {
            description:
              "Presented initial concepts, customer feedback, and other deliverables to the clients.",
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
    this.showTasks( j, t );
    this.showDeliverables( j, t );
  },
  methods: {
    showTasks: function( j, t ) {
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
    showDeliverables: function( j, t ) {
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
  margin-left: -145px;
  float: left;
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

.tl-line {
  float: left;
}

.btn-bubble {
  width: 80px;
  height: 80px;
}

.btn-bubble-sm {
  width: 50px;
  height: 50px;
}

.btn-bubble-experience {
  background-color: #f1a430;
  border: 6px solid #3e3e3e;
}

.btn-bubble-portfolio {
  background-color: #84a86b;
  border: 6px solid #3e3e3e;
}

.btn-bubble-line {
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

.tl-job:last-child .btn-bubble-line {
  display: none;
}

.tl-event {
  padding-left: 120px;
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

.tl-task {
  margin-left: 14px;
}

.tl-task-desc,
.tl-task-deliverable-desc {
  margin-left: 104px;
}

.tl-task-deliverable-desc .jumbotron {
  padding: 35px;
  color: #fff;
  background-color: #3e3e3e;
}

.tl-task-deliverable-desc img {
  width: 100%;
}
</style>