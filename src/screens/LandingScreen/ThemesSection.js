import { Box, Card, Container, Grid, Heading, Image } from 'theme-ui';
import theme from '../../lib/theme';
import Feature from '../../components/feature';

const ThemesSection = () => {
  return (
    <Box
      id="themes-section"
      as="section"
      sx={{
        py: [4, 5],
        color: 'white',
        minHeight: '100vh',
        height: 'fit-content',
        backgroundColor: theme.colors.dark,
        // width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container>
        <Heading
          as="h2"
          variant="title"
          sx={{ my: [0, 4], textAlign: 'center' }}
        >
          Why Participate in HackNITR 2.0 ?
        </Heading>
        <Grid
          pt={[3, 4]}
          pb={[4, 5]}
          gap={[4, 3, 4]}
          columns={[null, 3]}
          sx={{
            textAlign: 'left',
            mt: [4],
            '> a, > div': {
              borderRadius: 'extra',
              boxShadow: 'elevated',
              px: [3, null, 4],
              py: [4, null, 5]
            },
            span: {
              boxShadow:
                '-2px -2px 6px rgba(255,255,255,0.125), inset 2px 2px 6px rgba(0,0,0,0.1), 2px 2px 8px rgba(0,0,0,0.0625)'
            },
            svg: { fill: 'currentColor' }
          }}
        >
        <Card
            variant="interactive"
            sx={{
              background: 'linear-gradient(-32deg, #6f31b7 14%, #fb558e 82%)',
              color: 'white',
              svg: { color: '#fb558e' }
            }}
          >
            <Feature
              icon="code"
              color="white"
              name="Build for community."
              desc="Find solutions and build for the social good."
            />
          </Card>

          <Card
            variant="interactive"
            sx={{
              backgroundImage: 'url("../../public/images/schwags.jpeg")',
              color: '#5d114c',
              svg: { color: 'rgb(255,88,88)' }
            }}
          >
          </Card>

          <Card
            variant="interactive"
            sx={{
              background: 'linear-gradient(-32deg, #6f31b7 14%, #fb558e 82%)',
              color: 'white',
              svg: { color: '#fb558e' }
            }}
          >
            <Feature
              icon="idea"
              color="white"
              name="Innovate with new technologies"
              desc="Execute your tech stack with amazing projects"
            />
          </Card>

          <Card
            variant="interactive"
            sx={{
              // background: 'linear-gradient(-32deg, #6f31b7 14%, #fb558e 82%)',
              backgroundImage: 'url("https://techcrunch.com/wp-content/uploads/2019/06/Hackathon-team-diverse.jpg")',
              backgroundSize: 'cover',
              color: 'white',
              svg: { color: '#fb558e' },
              overflow: 'hidden'
            }}
          >
          </Card>

          <Card
            variant="interactive"
            sx={{
              background: 'linear-gradient(-32deg, #6f31b7 14%, #fb558e 82%)',
              color: 'white',
              svg: { color: '#fb558e' }
            }}
          >
            <Feature
              icon="event-check"
              color="white"
              name="Awesome schwags"
              desc="Participate and get a chance to win prizes "
            />
          </Card>

          <Card
            variant="interactive"
            sx={{
              backgroundImage: 'url("https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/technology-stack-for-web-application-main.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              svg: { color: '#fb558e' }
            }}
          >

          </Card>
        </Grid>
      </Container>
    </Box>
  );
};

export default ThemesSection;