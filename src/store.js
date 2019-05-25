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
            description: "Implemented Pattern Lab to deliver the new front end for Find Your Calling.",
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
                label: "Bootstrap",
                isActive: false
              },
              {
                label: "Sass",
                isActive: false
              },
              {
                label: "Handlebars",
                isActive: false
              },
              {
                label: "jQuery",
                isActive: false
              },
              {
                label: "Prototyping",
                isActive: false
              },
              {
                label: "XD",
                isActive: false
              }
            ],
            deliverables: [
              {
              id: 0,
              title: 'FYC Design System',
              img: 'img/FYC_Pattern-Lab.png',
              description: 'A new design system was created for Find Your Calling using the NodeJS version of Pattern Lab with Handlebars templates.'
            },
            {
              id: 1,
              title: 'FYC Career Explorer',
              img: 'img/FYC_Career-Explorer.png',
              description: 'An entirely new way to explorer careers was created with Handlebars templates, some hefty jQuery, and plenty of Sass.'
            }
          ],
            showTask: false,
            showDeliverable: false
          },
          {
            id: 1,
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
              },
              {
                label: "Prototyping",
                isActive: false
              },
              {
                label: "XD",
                isActive: false
              }
            ],
            deliverables: [{
                id: 0,
                title: 'Jenzabar ICS Design System',
                img: 'img/JICS-Design-System_Home.png',
                description: 'A new design system was created for Jenzabar ICS portlets completely from scratch using the application to display ASP.Net content.'
              },
              {
                id: 1,
                title: 'Design System Components',
                img: 'img/JICS-Design-System_Tables.png',
                description: 'Code samples were provided alongside functional examples of the Components which are constructed from ASP.Net Web Controls, and include the necessary Bootstrap to assist the developers.'
              }
            ],
            showTask: false,
            showDeliverable: false
          },
          {
            id: 2,
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
                label: "Prototyping",
                isActive: false
              },
              {
                label: "XD",
                isActive: false
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
              img: 'img/CX10_Home.png',
              description: 'The home screen for CX 10 provides users with a searchable directory of their available applications. When the user launches an application it appears on a recently viewed list next to the directory.'
            },
            {
              id: 1,
              title: 'CX 10 Login Screen',
              img: 'img/CX10_Login.png',
              description: 'A custom modal was created to assist users with logging into their network installation of CX 10.'
            },
            {
              id: 2,
              title: 'CX 10 Vender Entry',
              img: 'img/CX10_Vendor-Entry_Query.png',
              description: 'The developers created a screen reader to interpret legacy forms that were originally created for CRT terminals and present them in a modern layout.'
            }],
            showTask: false,
            showDeliverable: false
          },
          {
            id: 3,
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
            showTask: false,
            showDeliverable: false
          },
          {
            id: 4,
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
            showTask: false,
            showDeliverable: false
          }
        ]
      },
      {
        id: 1,
        title: "Interface Design Consultant",
        company: "Crown Equipment",
        startDate: 2015,
        endDate: 2015,
        location: "New Bremen, Ohio",
        tasks: [{
          id: 0,
          description: "Contracted to provide front-end assistance for Crown Equipment to implement a responsive design for their corporate site managed by Adobe Experience Manager.",
          skills: [{
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
          deliverables: [{
            id: 0,
            title: 'Crown Industries Rebranding',
            img: 'img/Crown-Website.png',
            description: 'Adobe Experience Manager was used to rollout the new brand for Crown Industries. Bootstrap was used to display numerous components in a responsive layout, along with Sass to manage the CSS, which was compiled as part of the build process using Grunt.'
          }],
          showTask: false,
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
                label: "Ideation",
                isActive: false
              }
            ],
            showTask: false,
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
            showTask: false,
            showDeliverable: false
          },
          {
            id: 2,
            description: "Conducted field research of the construction industry across the US and Canada, providing top level reports of my findings to primary stakeholders.",
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
            showTask: false,
            showDeliverable: false
          },
          {
            id: 3,
            description: "Modeled an excavator and work site using Trimble SketchUp.",
            skills: [{
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
            showTask: false,
            showDeliverable: false
          },
          {
            id: 4,
            description: "Provided design assets for Android/Vuforia prototypes, and for production within an Agile environment, which included style guides and custom icons for Android applications.",
            skills: [{
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
            showTask: false,
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
            }],
            showTask: false,
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
            showTask: false,
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
            showTask: false,
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
            showTask: false,
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
            showTask: false,
            showDeliverable: false
          }
        ]
      },
      {
        id: 4,
        title: "Experience Planner",
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
            showTask: false,
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
            showTask: false,
            showDeliverable: false
          },
          {
            id: 2,
            description: "Illustrated user flows, site maps, and wireframes to assist the design and development teams.",
            skills: [{
              label: "UX",
              isActive: true
            }],
            showTask: false,
            showDeliverable: false
          },
          {
            id: 3,
            description: "Documented features and functionality for project management, and provided competitive analysis of similar products on the market.",
            skills: [{
              label: "UX",
              isActive: true
            }],
            showTask: false,
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
            showTask: false,
            showDeliverable: false
          },
          {
            id: 5,
            description: "Presented initial concepts, customer feedback, and other deliverables to the clients.",
            skills: [{
              label: "UX",
              isActive: true
            }],
            showTask: false,
            showDeliverable: false
          }
        ]
      }
    ],
    showAbout: false,
    showTimeline: false,
    showPortfolio: false
  },
  getters: {
    topSkills(state) {
      let skillLabels = [];
      let skillList = [];
      for (let j = 0; j < state.jobs.length; j++) {
        for (let t = 0; t < state.jobs[j].tasks.length; t++) {
          for (let s = 0; s < state.jobs[j].tasks[t].skills.length; s++) {
            let skillLabel = state.jobs[j].tasks[t].skills[s].label;
            let topSkill = {
              label: skillLabel,
              isActive: false,
              rating: 1
            };
            if (skillLabels.indexOf(skillLabel) === -1) {
              topSkill.isActive = state.jobs[j].tasks[t].skills[s].isActive;
              skillLabels.push(skillLabel);
              skillList.push(topSkill);
            } else {
              skillList[skillLabels.indexOf(skillLabel)].isActive = state.jobs[j].tasks[t].skills[s].isActive;
              skillList[skillLabels.indexOf(skillLabel)].rating += 1
            }
          }
        }
      }

      skillList.sort(function (a, b) {
        return b.rating - a.rating
      })

      return skillList;
    }
  },
  mutations: {
    showTasks(state) {
      let j;
      let t;
      for (j = 0; j < state.jobs.length; j++) {
        for (t = 0; t < state.jobs[j].tasks.length; t++) {
          state.jobs[j].tasks[t].showTask = true;
        }
      }
    },
    hideTasks(state) {
      let j;
      let t;
      for (j = 0; j < state.jobs.length; j++) {
        for (t = 0; t < state.jobs[j].tasks.length; t++) {
          state.jobs[j].tasks[t].showTask = false;
        }
      }
    },
    showDelis(state) {
      let j;
      let t;
      for (j = 0; j < state.jobs.length; j++) {
        for (t = 0; t < state.jobs[j].tasks.length; t++) {
          state.jobs[j].tasks[t].showDeliverable = true;
        }
      }
    },
    hideDelis(state) {
      let j;
      let t;
      for (j = 0; j < state.jobs.length; j++) {
        for (t = 0; t < state.jobs[j].tasks.length; t++) {
          state.jobs[j].tasks[t].showDeliverable = false;
        }
      }
    },
    toggleSkills(state, skill) {
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
    showTasks(context) {
      context.commit('showTasks');
    },
    hideTasks(context) {
      context.commit('hideTasks');
    },
    showDelis(context) {
      context.commit('showDelis');
    },
    hideDelis(context) {
      context.commit('hideDelis');
    },
    toggleSkills(context, skill) {
      context.commit('toggleSkills', skill);
    }
  }
})