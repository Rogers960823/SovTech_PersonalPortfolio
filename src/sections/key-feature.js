/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'I am self-driven and disciplined young person, and I quickly adjust according to the change of environment and what is required of me. I push myself to learn as much as possible be it may be Front-End or Backend.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Partnership',
    text:
      'I work very well in a team, I enjoy sharing my ideas but I also comprehend the pivotal fact of also being a team player which I do well on. I believe in strategically aligning myself with people in the company to achieve a common goal, thus I always ensure that I am aligning with strategy and principles of the company.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Pro Interest',
    text:
      'I aspire to be a fully fleshed Full-Stack Developer. I have always been fascinated with how you design, define and develop an application to accomplish your commands, and my wishes are to develop innovative websites that will enable businesses small or Big to operate effeciantly to accomplish complex tasks.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Support',
    text:
      'I believe in supporting each other in a team or organisation, thus I enjoy assisting others when I have the previlledge of knowing something. I also do not shy away from asking other people when I struggle with a task because I believe a Developer is made by a community of helping hands.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.KeyFeature'}} id="feature">
       <Container>
          <SectionHeader
             slogan="Whats the function"
             title="Meet the feature of our product"   
          />

          <Grid sx={styles.grid}>
             {data.map((item) => (
                <FeatureCardColumn
                    key={item.id}
                    src={item.imgSrc}
                    alt={item.altText}
                    title={item.title}
                    text={item.text}
                />
             ))}
          </Grid>
        </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
