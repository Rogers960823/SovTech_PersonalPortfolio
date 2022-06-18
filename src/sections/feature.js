/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Excelerated Performance',
    text:
      'I am looking forward to the training and learning value-added skills that will allow me to be versatile and outstanding.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Pro Subscription',
    title: 'Environment',
    text:
      'I wish and believe SovTech has the great personnels who make the working environment conducive for growth and development.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Partnership deal',
    title: 'Aims and Interests',
    text:
      'My aim is to become a well rounded versatile Developer [Backend and Frondent] know how to work with different Frameworks, also learn Business Development because I enjoy research and sharing innovative ideas. I also have interest in Databases.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Values and Principles',
    text:
      'I strive for excellency, and I belive it is important to not limit myself and to provide Quality service and products through consistent performance. Do thorough research and seek help where needed.',
  },
];

export default function Feature() {
  return (
   <section sx={{ variant: 'section.feature'}}>
      <Container>
        <SectionHeader
            slogan="Quality and Principles"
            title="Amazing talent grows through persistence and patience"
        />

        <Grid sx={styles.grid}>
           {data.map((item) => (
             <FeatureCard 
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
