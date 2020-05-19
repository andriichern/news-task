import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardActionButton,
  CardPrimaryAction,
} from '@rmwc/card';
import { Typography } from '@rmwc/typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/opacity.css';
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/ripple/dist/mdc.ripple.css';
import '@material/typography/dist/mdc.typography.css';

const maxImgHeight = 240; // This value could be calculated based on image aspect ratio etc.

const ArticleCard = ({ cellWidth, title, imageUrl }) => {
  return (
    <Card>
      <CardPrimaryAction>
        <LazyLoadImage
          alt={`Photo for ${title}`}
          effect="opacity"
          src={`${imageUrl}&height=${maxImgHeight}&width=${cellWidth}`}
          width={cellWidth}
          height={maxImgHeight}
        />
        <Typography use="body1">{title}</Typography>
      </CardPrimaryAction>
      <CardActions>
        <CardActionButton outlined>Edit</CardActionButton>
        <CardActionButton raised danger>
          Delete
        </CardActionButton>
      </CardActions>
    </Card>
  );
};

ArticleCard.propTypes = {
  cellWidth: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ArticleCard;
