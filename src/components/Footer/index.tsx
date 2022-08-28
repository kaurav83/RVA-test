import { FC } from 'react';

import { CustomLink } from '../../elements';

import './index.scss';

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__logo">
            <span className="footer__column-title">RVA Logo</span>
          </div>
          <div className="footer__columns">
            <div className="footer__column footer__column--address">
              <span className="footer__column-title">Address</span>
              <ul className="footer__column-list">
                <li className="footer__column-item">Kyiv, Ukraine</li>
              </ul>
            </div>
            <div className="footer__column  footer__column--contact">
              <span className="footer__column-title">Contact</span>
              <ul className="footer__column-list">
                <li className="footer__column-item">info@rva.solutions</li>
              </ul>
            </div>
            <div className="footer__column footer__column--links">
              <span className="footer__column-title">Links</span>
              <ul className="footer__column-list">
                <li className="footer__column-item">
                  <CustomLink className="footer__column-link" to="/">
                    Main
                  </CustomLink>
                </li>
                <li className="footer__column-item">
                  <CustomLink className="footer__column-link" to="/login">
                    Login
                  </CustomLink>
                </li>
                <li className="footer__column-item">
                  <CustomLink className="footer__column-link" to="/news">
                    News
                  </CustomLink>
                </li>
                <li className="footer__column-item">
                  <CustomLink className="footer__column-link" to="/profile">
                    Profile
                  </CustomLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
