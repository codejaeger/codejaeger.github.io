import React from 'react';

import * as styles from './homePage.module.less';

const News = () => {
  const newsItems = [
    {
      date: 'Aug 2025',
      title: 'Started Ph.D. in Computer Science',
      description: 'Began Ph.D. program at UNC Chapel Hill, advised by Prof. Praneeth Chakravarthula at VCAIL Lab.',
    },
    {
      date: 'Jul 2025',
      title: 'Research Internship at AMD',
      description: 'Completed summer research internship working on interactive generative rendering.',
    },
    {
      date: 'May 2025',
      title: 'Completed M.S. in Computer Science',
      description: 'Successfully completed Master of Science degree at University of North Carolina, Chapel Hill.',
    },
    {
      date: 'Jul 2023',
      title: 'Started Graduate Studies at UNC-CH',
      description: 'Began graduate studies in Computer Science at University of North Carolina, Chapel Hill.',
    },
    {
      date: 'Jul 2023',
      title: 'Left AI Engineer Role at KLA-Tencor',
      description: 'Concluded role as AI Engineer at KLA-Tencor through Advanced Computing Labs, IIT Madras.',
    },
    {
      date: 'Jun 2021',
      title: 'Joined KLA-Tencor as AI Engineer',
      description: 'Started role as AI Engineer at KLA-Tencor through Advanced Computing Labs, IIT Madras, working on ML inference optimization.',
    },
    {
      date: 'Jun 2021',
      title: 'Graduated from IIT Bombay',
      description: 'Completed B.Tech in Computer Science from Indian Institute of Technology, Bombay with GPA 4.3.',
    },
  ];

  return (
    <div className={styles.homepageSection}>
      <h2 style={{ marginBottom: '1rem' }}>Recent Updates</h2>
      <div className={styles.newsContainer}>
        {newsItems.map((item, index) => (
          <div key={index} className={styles.newsItem}>
            <div className={styles.newsDate}>{item.date}</div>
            <div className={styles.newsContent}>
              <h4 className={styles.newsTitle}>{item.title}</h4>
              <p className={styles.newsDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;