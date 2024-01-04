import { FC } from 'react';
import { PhotoCard } from '../../ApiServices/Interfaces/IPhoto';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Tooltip,
} from '@mui/material';

const CardItem: FC<PhotoCard> = ({ id, title, url }) => {
  console.log(id);
  console.log(url);

  return (
    // <>hhhh</>
    <Card sx={{ minWidth: 80, minHeight: '15rem' }}>
      <CardActions>
        <CardMedia
          component='img'
          image={url}
          alt={title}
          sx={{ width: '10rem', height: '100%' }}
        />
        <CardContent>
          <Tooltip
            title={
              <h1 style={{ fontSize: '0.8rem' }}>
                {/* {urlIsDisabled ? 'לא קיים קישור לסביבה זו' : 'קישור לסביבה'} */}
              </h1>
            }
            followCursor
          >
            {/* this <span> is needed to display the tooltip on disabled button  */}
            <span>
              <Button
                href={url}
                // disabled={urlIsDisabled}
                target='_blank'
                variant='text'
                sx={{ fontSize: '1.5rem' }}
              >
                {title}
              </Button>
            </span>
          </Tooltip>
        </CardContent>
      </CardActions>
    </Card>
  );
};
export default CardItem;
