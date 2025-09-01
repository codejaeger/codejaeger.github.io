import { Row, Col } from 'rsuite';
import React from 'react';

import * as styles from './homePage.module.less';

const UniversityGallery = () => {
  const universities = [
    {
      name: 'University of North Carolina, Chapel Hill',
      image: '/uncch.png',
      period: '2023 - Present',
      degree: 'Ph.D. & M.S. in Computer Science',
    },
    {
      name: 'Indian Institute of Technology, Madras',
      image: '/iitm.svg',
      period: '2022 - 2023',
      degree: 'Non-degree, part-time',
    },
    {
      name: 'Indian Institute of Technology, Bombay',
      image: '/iitb.png',
      period: '2017 - 2021',
      degree: 'B.Tech in Computer Science',
    },
  ];

  return (
    <div className={styles.homepageSection}>
      <h2 style={{ marginBottom: '2rem' }}>Academic Journey</h2>
      <Row gutter={[20, 20]} type="flex" justify="center">
        {universities.map((uni, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <div className={styles.universityCard}>
              <div className={styles.universityLogo}>
                <img src={uni.image} alt={uni.name} className={styles.universityImage} />
              </div>
              <div className={styles.universityInfo}>
                <h4 className={styles.universityName}>{uni.name}</h4>
                <p className={styles.universityDegree}>{uni.degree}</p>
                <p className={styles.universityPeriod}>{uni.period}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UniversityGallery;