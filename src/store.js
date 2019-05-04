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
            skills: [
              {
                label: "UX",
                isActive: true
              },
              {
                label: "UI",
                isActive: true
              },
              {
                label: "Agile",
                isActive: false
              },
              {
                label: "Remote",
                isActive: false
              },
              {
                label: "Offshore",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 1,
            description: "Developed prototypes using SmartGWT to demonstrate interactions and responsive layouts.",
            skills: [
              {
                label: "UX",
                isActive: true
              },
              {
                label: "UI",
                isActive: true
              },
              {
                label: "SmartGWT",
                isActive: false
              },
              {
                label: "Prototyping",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 2,
            description: "Redesigned UI of two flagship products using Adobe XD for concept design and feedback.",
            skills: [
              {
                label: "UX",
                isActive: true
              },
              {
                label: "UI",
                isActive: true
              },
              {
                label: "XD",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 3,
            description: "Developed the front-end for the desktop solution using QT Creator.",
            skills: [
              {
                label: "UX",
                isActive: true
              },
              {
                label: "UI",
                isActive: true
              },
              {
                label: "QT",
                isActive: false
              },
              {
                label: "QSS",
                isActive: false
              }
            ],
            deliverables: [
              {
                id: 0,
                title: 'CX 10 Home Screen',
                subtitle: 'The home screen for CX 10',
                img: 'img/CX10-Home.png',
                description: 'The home screen for CX 10 provides users with a searchable directory of their available applications. When the user launches an application it appears on a recently viewed list next to the directory.'
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 4,
            description: "Refactored ASP.Net ASCX templates for the online portal to utilize Bootstrap/Sass for responsive layouts.",
            skills: [
              {
                label: "UI",
                isActive: true
              },
              {
                label: "Bootstrap",
                isActive: false
              },
              {
                label: "Sass",
                isActive: false
              },
              {
                label: "ASCX",
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
          description: "Contracted to provide front-end assistance for Crown Equipment to implement a responsive design for their corporate site managed by Adobe Experience Manager.",
          skills: [
            {
              label: "UX",
              isActive: true
            },
            {
              label: "UI",
              isActive: true
            },
            {
              label: "AEM",
              isActive: false
            },
            {
              label: "Bootstrap",
              isActive: false
            },
            {
              label: "Sass",
              isActive: false
            },
            {
              label: "Grunt",
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
                label: "UX",
                isActive: true
              },
              {
                label: "UI",
                isActive: true
              },
              {
                label: "Ideation",
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
                label: "UX",
                isActive: true
              },
              {
                label: "UI",
                isActive: true
              },
              {
                label: "Bootstrap",
                isActive: false
              },
              {
                label: "Research",
                isActive: false
              },
              {
                label: "Prototyping",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 2,
            description: "Conducted field research of the construction industry across the US and Canada, providing top level reports of my findings to primary stakeholders.",
            skills: [
              {
                label: "UX",
                isActive: true
              },
              {
                label: "Research",
                isActive: false
              },
              {
                label: "Analysis",
                isActive: false
              },
              {
                label: "Reporting",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 3,
            description: "Modeled an excavator and work site using Trimble SketchUp.",
            skills: [
              {
                label: "UI",
                isActive: true
              },
              {
                label: "3D Modeling",
                isActive: false
              },
              {
                label: "SketchUp",
                isActive: false
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 4,
            description: "Provided design assets for Android/Vuforia prototypes, and for production within an Agile environment, which included style guides and custom icons for Android applications.",
            skills: [
              {
                label: "UI",
                isActive: true
              },
              {
                label: "Android",
                isActive: false
              },
              {
                label: "Vuforia",
                isActive: false
              },
              {
                label: "Agile",
                isActive: false
              },
              {
                label: "Style Guide",
                isActive: false
              },
              {
                label: "Iconography",
                isActive: false
              },
              {
                label: "Prototyping",
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
                label: "UX",
                isActive: true
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 1,
            description: "Conducted concept testing and usability research with legal professionals, and delivered top level reports of my discussions to primary stakeholders. ",
            skills: [{
                label: "UX",
                isActive: true
              },
              {
                label: "Testing",
                isActive: false
              },
              {
                label: "Research",
                isActive: false
              },
              {
                label: "Reporting",
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
                label: "UX",
                isActive: true
              },
              {
                label: "Ideation",
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
                label: "UX",
                isActive: true
              },
              {
                label: "Research",
                isActive: false
              },
              {
                label: "Analysis",
                isActive: false
              },
              {
                label: "Reporting",
                isActive: false
              },
              {
                label: "Prototyping",
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
                label: "UX",
                isActive: true
              },
              {
                label: "Research",
                isActive: false
              },
              {
                label: "Analysis",
                isActive: false
              },
              {
                label: "Ideation",
                isActive: false
              },
              {
                label: "Reporting",
                isActive: false
              },
              {
                label: "Prototyping",
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
                label: "UX",
                isActive: true
              },
              {
                label: "Social",
                isActive: false
              },
              {
                label: "Mobile",
                isActive: false
              },
              {
                label: "Web",
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
                label: "UX",
                isActive: true
              },
              {
                label: "Ideation",
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
                label: "UX",
                isActive: true
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 3,
            description: "Documented features and functionality for project management, and provided competitive analysis of similar products on the market.",
            skills: [{
                label: "UX",
                isActive: true
              }
            ],
            showTask: true,
            showDeliverable: false
          },
          {
            id: 4,
            description: "Conducted usability testing with potential customers and reported insights back to the team.",
            skills: [{
                label: "UX",
                isActive: true
              },
              {
                label: "Research",
                isActive: false
              },
              {
                label: "Analysis",
                isActive: false
              },
              {
                label: "Reporting",
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
                label: "UX",
                isActive: true
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
    toggleSkills( state, skill ) {
      let j;
      let t;
      let s;
      for (j = 0; j < state.jobs.length; j++) {
        for (t = 0; t < state.jobs[j].tasks.length; t++) {
          for (s = 0; s < state.jobs[j].tasks[t].skills.length; s++) {
            let currentSkill = state.jobs[j].tasks[t].skills[s];
            if (skill.label == currentSkill.label) {
              currentSkill.isActive = !currentSkill.isActive
            }
          }
        }
      }
    }
  },
  actions: {
    showTasks (context) {
      context.commit('showTasks');
    },
    hideTasks (context) {
      context.commit('hideTasks');
    },
    showDelis (context) {
      context.commit('showDelis');
    },
    hideDelis (context) {
      context.commit('hideDelis');
    },
    toggleSkills (context, skill) {
      context.commit('toggleSkills', skill);
    }
  }
})