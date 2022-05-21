import { Box } from '@mui/system';
import { people, profiles } from './people';
import { ProfileContainer, TextContainer } from './styles';

const Section5: React.FunctionComponent = () => {
  return (
    <>
      <TextContainer>
        <h2>Quienes somos</h2>
        <p>
          Chillmarin somos una empresa destinada a diseñar, desarrollar y
          programar tus proyectos digitales. Contamos con un equipo
          multidisciplinar que se encarga de llevar a cabo ágil y eficazmente el
          proyecto, para que resulte funcional y escalable. Nos adaptamos a tus
          ideas y las hacemos realidad, nos preocupamos en manejar la última
          tecnología y las mejores estructuras para que tu proyecto sea todo un
          éxito.
        </p>
      </TextContainer>
      <Box
        sx={{
          padding: '4rem 8rem',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {people.map((person: profiles, i: number) => (
          <ProfileContainer key={person.id}>
            <img src={person.img} alt={person.name} />
            <p>{person.name}</p>
            <span>{person.job}</span>
          </ProfileContainer>
        ))}
      </Box>
    </>
  );
};

export default Section5;
