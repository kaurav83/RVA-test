import { FC } from 'react';

import { Hero, H1, OfferText, Button } from '../../elements';
import { Card } from '../Card';
import { ICardNews } from '../../types';

import './index.scss';
import data_news from '../../mock_data/data_news.json';
import data_news_categories from '../../mock_data/data_news_categories.json';

export const News: FC = () => {
  const renderCards = () => {
    return data_news.map((card: ICardNews) => (
      <Card key={card.id} card={card} className="news__card" />
    ));
  };

  const renderLinks = () => {
    return data_news_categories.map(({ category, id }: Record<string, string>) => (
      <li key={id} className="news__categories-item">
        {category}
      </li>
    ));
  };

  return (
    <div className="news">
      <Hero className="news__hero">
        <div className="news__hero-info">
          <H1 className="news__title">News</H1>
          <p className="news__description">
            We are an outsourcing IT company that develops applications and services, blockchain
            solutions and electronic payment systems, as well as tokenization and launch of DeFi
            projects. Our main resource is a strong and well-coordinated team of experts. We set
            ambitious goals, constantly learn and develop, creating products that change the world
            today and tomorrow.
          </p>
        </div>
      </Hero>
      <div className="news__content container">
        <div className="news__block-wrapper">
          <aside className="news__aside">
            <p className="news__categories-text">Categories</p>
            <ul className="news__categories-list">{renderLinks()}</ul>
          </aside>
          <div className="news__cards">{renderCards()}</div>
        </div>
      </div>
      <OfferText className="news__offer-text">Ready to Discuss Your Project?</OfferText>
      <p className="news__fill-form-text">
        Fill the form and we’ll get in touch with you within 24 hours.
      </p>
      <div className="news__button">
        <Button buttonType="button">Get in estimate</Button>
      </div>
    </div>
  );
};
