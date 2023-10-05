
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://aphan17.github.io/',
  title: 'AP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ashley Phan',
  role: 'Full Stack Software Engineer',
  description:
    "I'm a Seattle-based software engineer who embarked on a career transition from healthcare to software development. Through my work in healthcare, I had a strong desire to improve access to quality resources for individuals. However, I realized that I could have an even greater impact by utilizing software to help bridge this gap. In the past year, I have been developing and furthering my skills by self-learning with resources like The Odin Project, taking Udemy courses, and recently completing the Hack Reactor Bootcamp. I'm excited to combine my past experiences with my newly acquired technical skills, aiming to craft inventive solutions and create a significant and positive impact.",
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/ashleyphan-/',
    github: 'https://github.com/aphan17',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'The Bench',
    description:
      'A social media platform connecting gym-goers.',
    stack: ['React', 'FastAPI', 'Python', 'JavaScript', 'PostgreSQL', 'Docker'],
    sourceCode: 'https://gitlab.com/macd-may/module3-project-gamma',
    livePreview: 'https://macd-may.gitlab.io/module3-project-gamma/',
  },
  {
    name: 'Trail Tales',
    description:
      'A web blog application for local hikers in the Seattle Area',
    stack: ['HTML', 'CSS', 'Django', 'Python'],
    sourceCode: 'https://github.com/aphan17/trail-tales',
  },
  {
    name: 'Flow',
    description:
      'A task manager application designed for project planning and tracking',
    stack: ['HTML', 'CSS', 'Django', 'Python'],
    sourceCode: 'https://github.com/aphan17/flow',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'CI/CD',
  'Python',
  'Django',
  'FastAPI'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ashleyphan17@gmail.com',
}

export { header, about, projects, skills, contact }
