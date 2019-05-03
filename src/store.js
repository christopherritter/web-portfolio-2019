import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: [{
        id: 0,
        title: "User Experience Designer",
        company: "Jenzabar, Inc.",
        startDate: 2015,
        endDate: "Now",
        tasks: [{
            id: 0,
            description: "Provided design assistance to local, remote, and offshore development teams by delivering wireframes and various UI elements (fonts, icons, colors) within an Agile environment.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 1,
            description: "Developed prototypes using SmartGWT to demonstrate interactions and responsive layouts.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 2,
            description: "Redesigned UI of two flagship products using Adobe XD for concept design and feedback.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 3,
            description: "Developed the front-end for the desktop solution using QT.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 4,
            description: "Refactored ASP.Net ASCX templates for the online portal to utilize Bootstrap/Sass for responsive layouts.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
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
        tasks: [{
          id: 0,
          description: "Contracted to provide front-end assistance (HTML/CSS/JS) for Crown Equipment to implement a responsive design for their corporate site managed by Adobe Experience Manager.",
          skills: [{
              id: 0,
              label: "UX",
              isActive: true
            },
            {
              id: 1,
              label: "UI",
              isActive: false
            }
          ],
          showTask: true,
          showDeliverable: false
        }]
      },
      {
        id: 2,
        title: "User Experience Designer",
        company: "Trimble Navigation",
        startDate: 2014,
        endDate: 2015,
        location: "Huber Heights, Ohio",
        tasks: [{
            id: 0,
            description: "Brainstormed concepts with machine operators using Gamestorming techniques to generate new ideas.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 1,
            description: "Developed HTML/Bootstrap prototypes for field testing with machine operators.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 2,
            description: "Conducted field research of the construction industry across the US and Canada, providing top level reports of my findings to primary stakeholders.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 3,
            description: "Modeled an excavator and work site using Trimble SketchUp.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 4,
            description: "Provided design assets for Android/Vuforia prototypes, and for production within an Agile environment, which included style guides and custom icons for Android applications.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
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
        tasks: [{
            id: 0,
            description: "Created annotated wireframes to support the development of Lexis Advance.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 1,
            description: "Conducted concept testing and usability research with legal professionals, and delivered top level reports of my discussions to primary stakeholders. ",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 2,
            description: "Lead brainstorming workshops with legal professionals using Gamestorming techniques to generate new ideas.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 3,
            description: "Founding member of the Customer Discovery & Innovation team which designed, prototyped, and tested the most popular concepts from our innovation pipeline.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 4,
            description: "Design Lead for several innovative products including Lexis Answers.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
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
        tasks: [{
            id: 0,
            description: "Planned the digital experience of social, mobile, and web applications for corporate clients that included P&G, Pearle Vision, and Red Bull.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 1,
            description: "Lead brainstorming sessions with creative, technical, and business leads to generate new ideas.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 2,
            description: "Illustrated user flows, site maps, and wireframes to assist the design and development teams.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 3,
            description: "Documented features and functionality for project management, and provided competitive analysis of similar products on the market.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 4,
            description: "Conducted usability testing with potential customers and reported insights back to the team.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 5,
            description: "Presented initial concepts, customer feedback, and other deliverables to the clients.",
            skills: [{
                id: 0,
                label: "UX",
                isActive: true
              },
              {
                id: 1,
                label: "UI",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          }
        ]
      }
    ]
  },
  getters: {
    uniqueSkills (state) {
      let j;
      let t;
      let s;
      let skills = [];
      let skillObjs = [];
      for (j = 0; j < state.jobs.length; j++) {
        for (t = 0; t < state.jobs[j].tasks.length; t++) {
          for (s = 0; s < state.jobs[j].tasks[t].skills.length; s++) {
            let skill = state.jobs[j].tasks[t].skills[s].label;
            let skillObj = state.jobs[j].tasks[t].skills[s];
            if (skills.indexOf(skill) === -1) {
              skills.push(skill);
              skillObjs.push(skillObj);
            }
          }
        }
      }
      return skillObjs;
    }
  },
  mutations: {
    showTasks (state) {
      let j;
      let t;
      for (j = 0; j < state.jobs.length; j++) {
        for (t = 0; t < state.jobs[j].tasks.length; t++) {
          state.jobs[j].tasks[t].showTask = true;
        }
      }
    },
    hideTasks (state) {
      let j;
      let t;
      for (j = 0; j < state.jobs.length; j++) {
        for (t = 0; t < state.jobs[j].tasks.length; t++) {
          state.jobs[j].tasks[t].showTask = false;
        }
      }
    },
    showDelis (state) {
      let j;
      let t;
      for (j = 0; j < state.jobs.length; j++) {
        for (t = 0; t < state.jobs[j].tasks.length; t++) {
          state.jobs[j].tasks[t].showDeliverable = true;
        }
      }
    },
    hideDelis (state) {
      let j;
      let t;
      for (j = 0; j < state.jobs.length; j++) {
        for (t = 0; t < state.jobs[j].tasks.length; t++) {
          state.jobs[j].tasks[t].showDeliverable = false;
        }
      }
    },
    toggleSkills (state, skill) {
      let j;
      let t;
      let s;
      for (j = 0; j < state.jobs.length; j++) {
        for (t = 0; t < state.jobs[j].tasks.length; t++) {
          for (s = 0; s < state.jobs[j].tasks[t].skills.length; s++) {
            if (skill.isActive) {
              state.jobs[j].tasks[t].skills[s] = false;
            } else {
              state.jobs[j].tasks[t].skills[s] = false;
            }
          }
        }
      }
    },
    activateSkill (state, skill) {
      let j;
      let t;
      let s;
      for (j = 0; j < state.jobs.length; j++) {
        for (t = 0; t < state.jobs[j].tasks.length; t++) {
          for (s = 0; s < state.jobs[j].tasks[t].skills.length; s++) {
            let currentSkill = state.jobs[j].tasks[t].skills[s];
            if (skill.label == currentSkill.label) {
              currentSkill.isActive = true;
            } else {
              currentSkill.isActive = false;
            }
          }
        }
      }
    }
  },
  actions: {
    showTasks (context) {
      context.commit('showTasks')
    },
    hideTasks (context) {
      context.commit('hideTasks')
    },
    showDelis (context) {
      context.commit('showDelis')
    },
    hideDelis (context) {
      context.commit('hideDelis')
    },
    toggleSkills (context) {
      context.commit('toggleSkills')
    },
    activateSkill (context) {
      context.commit('activateSkill')
    }
  }
})