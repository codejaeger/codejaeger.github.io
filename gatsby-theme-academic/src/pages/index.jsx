import React from 'react';

import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Awards from '../components/PageFragments/HomePage/Awards';
import Experience from '../components/PageFragments/HomePage/Experience';
import News from '../components/PageFragments/HomePage/News';
import UniversityGallery from '../components/PageFragments/HomePage/UniversityGallery';
import SEO from '../components/Seo';

export default () => (
  <>
    <SEO
      title="About"
      description=""
      path=""
      keywords={['NodeJS', 'Gatsby']}
    />
    <AboutMe />
    <Experience />
    <Awards />
    <News />
    <UniversityGallery />
  </>
);
