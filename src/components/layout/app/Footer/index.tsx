import { Box } from '@mui/system';
import { FooterContainer, SkewContainer } from './styles';

export const Footer = () => {
  return (
    <Box sx={{
      marginTop: '60px',
    }}>
      <SkewContainer></SkewContainer>
      <FooterContainer>
        <h1>Footer</h1>
      </FooterContainer>
    </Box>
  );
};
