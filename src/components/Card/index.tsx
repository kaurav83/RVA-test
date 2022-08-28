import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ICardNews } from '../../types';

import './index.scss';

type Props = {
  card: ICardNews;
  className?: string;
};

export const Card: FC<Props> = ({ card, className }) => {
  const { picture, createdAt, description, status, link1, link2 } = card;

  return (
    <div className={`card ${className}`}>
      <img src={picture} alt="Some unique text" />
      <div className="card__info">
        <time className="card__date">{createdAt}</time>
        <span className="card__status">{status}</span>
        <p className="card__description">{description}</p>
        <div className="card__link-group">
          <Link className="card__link" to="/news">
            {link1}
          </Link>
          <Link className="card__link" to="/news">
            {link2}
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  className: '',
};
