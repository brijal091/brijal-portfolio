import React, { useEffect } from 'react';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import useOnScreen from '@/hooks/useOnScreen';

const sections = [
  { component: About, id: '#about' },
  { component: Experience, id: '#experience' },
  { component: Projects, id: '#projects' },
];

const SectionDetail = (props: any) => {
  return (
    <div className='text-lg mt-12'>
      {sections.map((Section) => (
        <SectionWrapper
          key={Section.id}
          id={Section.id}
          setActiveSection={props.setActiveSection}
        >
          <Section.component />
        </SectionWrapper>
      ))}
    </div>
  );
};

const SectionWrapper = ({ children, id, setActiveSection }: any) => {
  const [ref, isIntersecting] = useOnScreen({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isIntersecting) {
      setActiveSection(id);
    }
  }, [isIntersecting, id, setActiveSection]);

  return (
    <section ref={ref} id={id.substring(1)} style={{ minHeight: '80vh' }}>
      {children}
    </section>
  );
};

export default SectionDetail;
