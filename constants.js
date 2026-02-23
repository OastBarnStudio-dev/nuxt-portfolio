export default {
  PORTFOLIO_SECTIONS: [
    { name: 'Home', tagLine: 'The beginning!' },
    { name: 'Skills', tagLine: 'I got game!' },
    { name: 'Works', tagLine: 'Only the finest!' },
    { name: 'About', tagLine: 'Curious?' },
    { name: 'Contact', tagLine: "Don't hesitate!" }
  ],
  SKILLS: [
    {
      name: 'set1',
      items: [
        {
          name: 'Producing Directing',
          image: 'mdi-camera-iris'
        },
        {
          name: 'TV and Video Production',
          image: 'sony_icon'
        },
        {
          name: 'Live Video and Sound Broadcast',
          image: 'mdi-microphone-variant'
        },
        {
          name: 'Davinci Resolve Editing ',
          image: 'resolve_icon'
        },
        {
          name: 'The Barn Studio, Heathfield',
          image: 'mdi-barn'
        },
        {
          name: 'Podcast Production',
          image: 'mdi-youtube-tv'
        }
      ]
    },
    {
      name: 'Advertising',
      items: [
        {
          name: 'Creative Strategy',
          image: 'mdi-lightbulb-on'
        },
        {
          name: 'Comercials Production',
          image: 'mdi-television-classic'
        },
        {
          name: 'Brand Development',
          image: 'mdi-fingerprint'
        },
        {
          name: 'Print and Poster',
          image: 'mdi-artboard'
        },
        {
          name: 'Pitching & Presentations',
          image: 'mdi-presentation'
        },
        {
          name: 'Viral',
          image: 'mdi-tablet-cellphone'
        }
      ]
    },
    {
      name: 'set3',
      items: [
        {
          name: 'Illustration',
          image: 'mdi-palette'
        },
        {
          name: 'Storyboarding, animatics',
          image: 'krita_srcs_icon'
        },
        {
          name: 'Digital Art',
          image: 'Affin_design'
        },
        {
          name: 'Gaphic Design',
          image: 'affin_publisher'
        },
        {
          name: 'Character Design',
          image: 'procreate_icon'
        },
        {
          name: 'Portraits',
          image: 'mdi-lead-pencil'
        }
      ]
    },
    {
      name: 'set4',
      items: [
        {
          name: 'Unscripted Reality TV',
          image: 'mdi-television-classic'
        },
        {
          name: 'Documentary Production',
          image: 'mdi-video-vintage'
        },
        {
          name: 'Documentary Research',
          image: 'mdi-search-web'
        },
        {
          name: 'Scriptwriting',
          image: 'mdi-script-outline'
        },
        {
          name: 'Recorded Presentations',
          image: 'finalcut_icon'
        },
        {
          name: 'PostProduction',
          image: 'motion_icon'
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
      isRandomizer: true, // This triggers the new logic
      isConfidential: false,
      techStack: ['Campaing Development'],
      cover: 'tabasco_small.png',
      description:
        'Technology evolves. Media expands. Channels multiply and grow ever more sophisticated — yet human nature remains unchanged. Build with us. Together, we will amplify your marketing with deep foundational expertise, shaped by decades of success in advertising communications and guided by the timeless art of empathy and persuasion. Because while the tools may change, the human heart remains.',
      url: 'https://github.com/OastBarnStudio-dev/nuxt-portfolio'
    },
    {
      title: 'Documentary and Unscripted TV',
      techStack: ['Directing', 'Producing', 'Unscripted TV', 'Documentary'],
      isConfidential: false, // Changed to false so people can see your great work!
      description: `A collection of selected works in unscripted television and documentary filmmaking, focusing on representations of the historical real and creative storytelling.`,
      cover: 'apits_small.png',
      // Add the Vimeo link here. Use the "ID" (the numbers at the end of the Vimeo URL)
      vimeo: 'https://player.vimeo.com/video/691803031'
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
      techStack: ['Vue', 'Nuxt JS'],
      isConfidential: true,
      description: `Still a work in progress. I want to produce a simple, free, customizable, and publish-ready template for professionals outside of programming who want a self-publishing, sleek, technologically up-to-date, fast-loading website for platforms like Netlify — without inducing despair and hair loss.`,
      cover: 'notes.jpeg'
    },
    {
      title: 'Blog Site',
      techStack: ['Soon to come blog entries'],
      isConfidential: false,
      description: `Soon to come entries`,
      cover: 'blog.jpg',
      url: 'https://github.com/kousikaganesan/blog-site'
    },
    {
      title: 'Print and Graphic',
      techStack: ['Enter project for a printwork presentation'],
      isConfidential: true,
      description: `Please click on the video file to see samples of Print and poster ads and other graphic work.`,
      cover:
        'https://res.cloudinary.com/dxp5v7a5h/image/upload/v1771870914/videocover.png',
      video:
        'https://res.cloudinary.com/dxp5v7a5h/video/upload/f_auto,q_auto/ads_n_graphic_gxpj4c.mov' // The "static" path
    }
  ]
}
