import * as React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  Button,
} from '@mui/material';
import 'swiper/css';
import SwiperComponent from 'components/swiper';

type CupCardProps = Omit<Cup, 'categoryId' | 'materialTypeId' | 'colorId'>;

const CupCard: React.FC<CupCardProps> = ({
  id,
  title,
  description,
  images,
  price,
}) => {
  const [isShowId, setId] = React.useState(false);

  const handleClickState = () => {
    setId((currentState) => !currentState);
  };
return (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Paper
      elevation={3}
      sx={{ width: { xs: '100%', sm: '100%', md: '100%' } }}
    >
      <SwiperComponent images={images} />
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
}}
      >
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h6">{price}</Typography>
      </Box>
      <Typography sx={{
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: '4',
        WebkitBoxOrient: 'vertical',
      }}
      >
        {description}
      </Typography>
      {isShowId && (
        <Box>
          {id}
        </Box>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={handleClickState}>
          Peržiūrėti
        </Button>
        <Button onClick={handleClickState}>
          Dėti į krepšelį
        </Button>
      </Box>
    </Paper>
  </Grid>
);
};

export default CupCard;

/*
  1. Iškelti Swiper komponentą į globalių komponentų aplanką

  2. Po nuotrauką atvaizduokite Pavadinimą

  3. Išskirkite tekstui (description) ne daugiau nei 4 eilutes. PS. line-clamp

  4. Kaina atvaizduokite po nuotrauke dešinėje pusėje, taip kad netrūkdytų pavadinimui

  5. Sukurkite 2 mygtukus, vienas šalia kito
    * Peržiūrėti - kurį paspaudut atspausdinamas produkto id
    * Dėti į krepšelį - kursį paspaudus atspausdinamas produkto id

  6. pritaikykite koretelės reikiamą aukštį naudojant:
    * https://smartdevpreneur.com/5-mui-sx-breakpoint-examples/
        * skiltis - Create Responsive Layout with MUI SX Breakpoints
*/
