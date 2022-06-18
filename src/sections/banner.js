/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
// import BannerImg from 'assets/banner-thumb.png';
import ProjectThumb from 'assets/project-thumb.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

export default function Banner() {
  return (
    <section sx={styles.banner}>
       <Container sx={styles.banner.container}>
           <Box sx={styles.banner.contentBox}>
              <Heading as="h1" variant="heroPrimary">
                   Top Quality Digital Personal Portfolio
                   <Heading as="h4" variant="heroSecondary">
                       Reasons why I would love to be part developer at SovTech
                  </Heading>
              </Heading>

              <Text as="p">
                  I believe I have acquired the necessary skills to excel at SovTech and be an asset, and I believe that my degree has prepared me for
                  any type of challenge and pressure that I can encounter. I want to be part of SovTech, it is one of the best companies in Software Development
                  globally and I want to align myself with an organisation that fosters the same quality and principles I believe in. I saw the initives that SovTech
                  is involved in like the HackAThorn enabling young people to showcase their skills and expertise, and also the company promoting woman empowerment
                  also made me feel excited to be part of it and seeing the inclusivity. I believe SovTech is a great place for me to learn and grow as a Software Developer. 
                  And it would be an honour for me to be part of SovTech!!
              </Text>
              <Button variant="primary">Explore</Button>
           </Box>
           <Box sx={styles.banner.imageBox}>
              {/* <Image src={BannerImg} alt='banner'/> */}
              <Image src={ProjectThumb} alt='banner'/>
           </Box>
       </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
