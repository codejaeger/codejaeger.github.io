module.exports = {
  // pathPrefix: '',
  siteUrl: 'https://codejaeger.github.io',
  title: 'Debabrata Mandal',
  description: 'codejaeger ',
  author: 'Debabrata Mandal',
  // authorAlternative: '',
  introduction: [
    'I am third-year a Computer Science Ph.D. student at the University of North Carolina at Chapel Hill, advised by Prof. [Praneeth Chakravarthula](https://www.cs.unc.edu/~cpk/) at the [VCAIL Lab](https://www.visualcomputing.ai/). Currently, I am working on a mixture of computational optics, generative models and out-of-domain generalization, specifically exploring deep-optics and computational image reconstruction to improve achievable image quality with meta-lenses.',
    'My research interests broadly encompass physics-inspired deep learning for learning nano-photonic metastructures, optimization for optics design, and real-time video diffusion models. I am actively working on designing hardware for metalenses including HDR, wide-field, broadband and real-time systems, while also exploring the integration of camera dynamics into generative models. In Summer 2025, I did a research internship at AMD working on interactive generative rendering.',
    'Prior to my Ph.D., I gained valuable industry experience as an AI Engineer at [KLA-Tencor through ACL](https://ir.kla.com/news-events/press-releases/detail/413/kla-corporation-opens-new-artificial-intelligence-advanced) (Advanced Computing Labs, IIT Madras), where I worked under [Dr. Pradeep Ramachandran](https://www.linkedin.com/in/pramach2/?originalSubdomain=in) and collaborated with [Prof. Nitin Chandrachoodan](https://chandrachoodan.gitlab.io) on efficient GPU memory algorithms, designing software infrastructures for ML inference workloads in semiconductor inspection and defect detection systems. During my undergraduate years, I was fortunate to collaborate with [Prof. Parag Chaudhuri](https://www.cse.iitb.ac.in/~paragc/) at ViGIL, IIT Bombay, working on realistic hand shape modeling.',
    'I have also been fortunate enough to have worked on diverse projects spanning computer graphics, reinforcement learning, and computational imaging - from developing intelligent game-playing agents using deep Q-learning at [Ubisoft](https://www.ubisoft.com/en-us) India to creating physics-based animations, 2D network graph visualization libraries in Julia, and implementing advanced image processing algorithms. As an open source enthusiast, I have contributed to [Google Summer of Code](https://summerofcode.withgoogle.com/) with [Boost.C++](https://www.boost.org), been an [LFX Mentee](https://lfx.linuxfoundation.org/tools/mentorship/) with [Open Horizon](https://lfedge.org/projects/open-horizon/), and contributed to [Javis.jl](https://juliaanimators.github.io/Javis.jl/stable/) for 2D drawing and visualization software. I have been recognized with [LiFT\'21 and LiFT\'22 scholarships](https://www.linuxfoundation.org/about/lift-scholarships) for advanced open source training, Bertelsmann Tech scholarship, and [Kaggle ML Research Spotlight](https://www.kaggle.com/discussions/general/370095).',
    '\n```markdown\nDoing research may be similar to MCMC sampling, you start at zero knowledge and after a \n\n burnout may get enlightened with an idea!\n```'
  ],
  avatar: '/2me.jpg',
  professions: [
    'Ph.D. student at UNC-CH'
  ],
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  // birthday: '',
  location: 'North Carolina, USA',
  email: 'debman at cs dot unc dot edu',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT
    || 'https://tc-imba.disqus.com/embed.js',
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
  },
  social: [
    {
      url: '/resume.pdf',
      icon: ['ai', 'cv'],
    }, {
      url: 'https://github.com/codejaeger',
      icon: ['fab', 'github'],
    }, {
      url: 'https://scholar.google.com/citations?user=_0p4hC8zf7MC&hl=en',
      icon: ['fa', 'graduation-cap'],
    }, {
      url: 'https://www.linkedin.com/in/debabrata-mandal-0702a0167/',
      icon: ['fab', 'linkedin'],
    },
  ],
  // facebook: 'https://www.facebook.com/rolwin.monteiro',
  // instagram: 'https://www.instagram.com/reevan100/',
  // rss: '/rss.xml',
  wakatime: {
    username: 'tcimba',
    activity: '7add4047-08f9-4da8-b649-aa114503678f',
    language: '460a84ab-722a-4b80-b896-cabaa13ad7eb',
    editor: 'd851639a-28d8-4884-949f-d338a858f7e9',
    os: 'caf7d0d1-8fd2-4595-a991-363c8583fea9',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT
    || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  education: [
    {
      date: 'Aug 2025 - Jul 2028',
      icon: 'graduation-cap',
      title: 'Ph.D in Computer Science',
      location: 'University of North Carolina, Chapel Hill',
    }, {
      date: 'Jul 2023 - May 2025',
      icon: 'graduation-cap',
      title: 'M.S in Computer Science',
      location: 'University of North Carolina, Chapel Hill',
    }, {
      date: 'Aug 2022 - May 2023',
      icon: 'university',
      title: 'Non-degree, part-time',
      location: 'IIT Madras, India',
    }, {
      date: 'Jun 2017 - June 2021',
      icon: 'university',
      content: 'gpa: 4.3',
      title: 'B.Tech in Computer Science',
      location: 'IIT Bombay, India',
    }],
  interests: [
    {
      icon: 'eye',
      title: 'Computer Graphics',
    }, {
      icon: 'microscope',
      title: 'Computational Optics',
    }, {
      icon: 'brain',
      title: 'Machine Learning',
    }, {
      icon: 'camera',
      title: 'Computer Vision',
    }, {
      icon: ['fab', 'linux'],
      title: 'Open Source Community',
    }],
  experience: [
    {
      title: 'Industry Experience',
      position: 'left',
      data: [
        {
          date: 'Jun 2025 - Aug 2025',
          title: 'Research Intern',
          location: 'AMD, Santa Clara, CA',
          description: '• Accelerated interactive generative rendering pipelines<br>• Optimized real-time performance for graphics applications',
        },
        {
          date: 'Jun 2021 - Jul 2023',
          title: 'AI Engineer',
          location: 'KLA-Tencor, Chennai, India',
          description: '• ML inference optimization for semiconductor inspection tools<br>• Efficient GPU memory algorithms with Dr. Pradeep Ramachandran<br>• Collaborated with Prof. Nitin Chandrachoodan on performance optimization',
        },
        {
          date: 'Jun 2020 - Aug 2020',
          title: 'Full Stack & DevOps Intern',
          location: 'GoodHealth, India',
          description: '• API development for Django-REST & Flask applications<br>• AWS Elastic Beanstalk deployment using Docker<br>• GitLab CI/CD pipeline automation',
        },
        {
          date: 'May 2020 - Jun 2020',
          title: 'Summer Intern',
          location: 'Samsung India, India',
          description: '• 100k+ server-client connections using Go websockets<br>• Performance benchmarking with containerized environments<br>• Low-resource server platform optimization',
        },
        {
          date: 'May 2019 - Jul 2019',
          title: 'Summer Intern',
          location: 'Ubisoft India Studios, India',
          description: '• Deep Q-Learning for optimal gameplay state-action mapping<br>• SSD framework with MobileNetv1 for object detection<br>• Game image feature extraction and analysis',
        },
      ],
    }, {
      title: 'Teaching & Research',
      position: 'right',
      data: [
        {
          date: 'Aug 2024 - May 2025',
          title: 'Graduate Teaching Assistant',
          location: 'UNC Chapel Hill, NC',
          description: '• TA for "Introduction to Data Science" (200 students)<br>• Weekly recitations and office hours<br>• Student mentoring and curriculum support',
        },
        {
          date: 'Jul 2023 - May 2024',
          title: 'Research Assistant',
          location: 'UNC Chapel Hill, NC',
          description: '• Computational optics and deep learning research<br>• VCAIL Lab under Prof. Praneeth Chakravarthula<br>• Meta-lens design and optimization',
        },
        {
          date: 'Sep 2018 - Jul 2019',
          title: 'Team Member',
          location: 'IIT Bombay Mars Rover Team, Mumbai',
          description: '• Autonomous navigation using ROS platform<br>• SLAM algorithms: G-mapping, hector-mapping, Cartographer-2D<br>• Kinectv2 sensor integration and testing',
        },
      ],
    }, {
      title: 'Open Source & Volunteer',
      position: 'left',
      data: [
        {
          date: 'May 2020 - Aug 2020',
          title: 'Google Summer of Code Student Developer',
          location: 'Boost.C++, Remote',
          description: '• Generic multidimensional histogram container for Boost.GIL<br>• Template meta-programming and variadic templates<br>• 3 contrast enhancement algorithms (MATLAB/OpenCV level)',
        },
        {
          date: 'Mar 2021 - Jun 2021',
          title: 'Open Horizon Mentee',
          location: 'Linux Foundation, Remote',
          description: '• LFX Mentorship program participant<br>• Open Horizon edge computing platform development<br>• Distributed systems and IoT contributions',
        },
      ],
    },
  ],
  awards: [
    {
      date: '2022',
      title: 'LiFT\'22 Scholar',
    }, {
      date: '2021',
      title: 'LiFT\'21 Scholar',
    }, {
      date: '2021',
      title: 'Kaggle ML Research Spotlight',
    }, {
      date: '2020',
      title: 'Bertelsmann Tech Scholarship',
    },
  ],
  tagColors: [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
  ],
  tags: [
    {
      id: 'javascript',
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    {
      id: 'rxjs',
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    {
      id: 'typescript',
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    {
      id: 'reactjs',
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    {
      id: 'gatsby',
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    {
      id: 'html',
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    {
      id: 'css',
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    {
      id: 'python',
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  ],
};
