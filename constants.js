export default {
  PORTFOLIO_SECTIONS: [
    { name: 'Home', tagLine: 'The beginning!' },
    { name: 'About', tagLine: 'Curious?' },
    { name: 'Skills', tagLine: 'I got game!' },
    { name: 'Works', tagLine: 'Only the finest!' },
    { name: 'Contact', tagLine: "Don't hesitate!" }
  ],
  SKILLS: [
    {
      name: 'set1',
      items: [
        {
          name: 'Producing Directing',
          image: 'vue.png'
        },
        {
          name: 'Self shooting',
          image: 'react.svg'
        },
        {
          name: 'Script writing',
          image: 'angular.png'
        },
        {
          name: 'Davinci Resolve Editing ',
          image: 'ionic.png'
        },
        {
          name: 'Final Cut',
          image: 'redux.png'
        },
        {
          name: 'Podcast Production',
          image: 'nuxt.svg'
        }
      ]
    },
    {
      name: 'Advertising Campaigns',
      items: [
        {
          name: 'Comercials scriptwriting',
          image: 'vuetify.png'
        },
        {
          name: 'Comercials Production',
          image: 'antdesign.svg'
        },
        {
          name: 'Across Media integration',
          image: 'reactmaterial.png'
        },
        {
          name: 'Print and Poster Advertising',
          image: 'nodejs.webp'
        },
        {
          name: 'TV Production',
          image: 'mongodb.png'
        },
        {
          name: 'Viral',
          image: 'nginx.svg'
        }
      ]
    },
    {
      name: 'set3',
      items: [
        {
          name: 'Illustration',
          image: 'react.svg'
        },
        {
          name: 'Storyboarding',
          image: 'pm2.png'
        },
        {
          name: 'Concept Sketching',
          image: 'witai.png'
        },
        {
          name: 'Gaphic Design',
          image: 'typescript.png'
        },
        {
          name: 'Comics',
          image: 'scss.png'
        },
        {
          name: 'Cartoons',
          image: 'd3.png'
        }
      ]
    },
    {
      name: 'set4',
      items: [
        {
          name: 'Gitlab',
          image: 'gitlab.png'
        },
        {
          name: 'Github',
          image: 'github.png'
        },
        {
          name: 'Bitbucket',
          image: 'bitbucket.svg'
        },
        {
          name: 'Confluence',
          image: 'confluence.png'
        },
        {
          name: 'Jira',
          image: 'jira.svg'
        },
        {
          name: 'Trello',
          image: 'trello.png'
        }
      ]
    }
  ],
  SOCIAL_LINKS: [
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/f-sobron/' },
    {
      name: 'GitHub',
      link: 'https://github.com/OastBarnStudio-dev'
    },
    { name: 'GitHub', link: 'https://github.com/OastBarnStudio-dev' },
    { name: 'Twitter', link: 'https://https://x.com/FernandoSobron' },
    { name: 'Email', link: 'mailto:videofeatures@duck.com' }
  ],
  HIRE_ME: 'mailto:videofeatures@duck.com',
  CONNECT_VIA_LINKEDIN: 'https://www.linkedin.com/in/f-sobron',
  GITHUB_LINK: 'https://github.com/OastBarnStudio-dev',
  PROJECTS: [
    {
      title: 'Advertising Services',
      isConfidential: false,
      techStack: ['Campaing Development'],
      cover: 'tabasco_small.png',
      description:
        'Technology evolves. Media expands. Channels multiply and grow ever more sophisticated — yet human nature remains unchanged. Build with us. Together, we will amplify your marketing with deep foundational expertise, shaped by decades of success in advertising communications and guided by the timeless art of empathy and persuasion. Because while the tools may change, the human heart remains.',
      url: 'https://github.com/kousikaganesan/covid-19-tracker'
    },
    {
      title: 'Documentary and Unscripted TV',
      techStack: ['React Native', 'Redux', 'Node JS', 'Mongo DB'],
      isConfidential: true,
      description: `It is a React native app where I worked on designing 
      auth and navigation screens. Also, worked on the complete state 
      management of the auth flow and third party integrations to provide 
      real time live updates to the user.`,
      cover: 'apits_small.png'
    },
    {
      title: 'Illustration and Storyboarding',
      techStack: ['Nuxt JS'],
      cover: 'ford_story.png',
      description:
        'This is the initial version of portfolio to display my illustration work.',
      isConfidential: false,
      url: 'https://www.thetalentmanager.com/talent/115116/dr-fernando-sobron'
    },
    {
      title: 'A Productive Template',
      techStack: ['React Native', 'Redux', 'Node JS', 'Mongo DB'],
      isConfidential: true,
      description: `Still a work in progress. I want to produce a simple, free, customizable, and publish-ready template for professionals outside of programming who want a self-publishing, sleek, technologically up-to-date, fast-loading website for platforms like Netlify — without inducing despair and hair loss.`,
      cover: 'notes.jpeg'
    },
    {
      title: 'Blog Site',
      techStack: ['Angular', 'Node JS', 'Mongo DB'],
      isConfidential: false,
      description: `The application was developed in a mission to develop an online publishing platform where users can post blogs, comments and like the posts with simple yet powerful UI`,
      cover: 'blog.jpg',
      url: 'https://github.com/kousikaganesan/blog-site'
    },
    {
      title: 'Company’s Saas Product',
      techStack: ['Vue', 'Vuex', 'Node JS', 'Mongo DB'],
      isConfidential: true,
      description: `Worked on setting up the initial infrastructure for the front end and backend project as well. This is a Saas app that my company is working on. The front end uses a combination of Vue + Vuex. This was a side project that I was working on top of the regular work hours and sometimes did full time as well.`,
      cover: 'saas.jpg'
    }
  ]
}
