import { FC } from 'react';
import { useSelector } from 'react-redux';
import { H1, Hero } from '../../elements';

import { profileData } from '../../redux/selectors/profile';

import './index.scss';

export const Profile: FC = () => {
  const {
    email,
    name,
    phone,
    username,
    website,
    address: { city, street, zipcode } = {},
    company: { catchPhrase, name: companyName } = {},
  } = useSelector(profileData);

  return (
    <div className="profile">
      <Hero className="profile__hero">
        <table className="profile__table">
          <thead>
            <tr>
              <th>
                <H1 className="profile__title">Profile</H1>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="profile__tr">
              <th className="profile__th">
                <img
                  className="profile__img"
                  src="https://placeimg.com/256/256/animals"
                  alt="avatar"
                />
              </th>
              <td className="profile__td" />
            </tr>
            <tr>
              <th className="profile__th">Name:</th>
              <td className="profile__td">{name}</td>
            </tr>
            <tr>
              <th className="profile__th">Email:</th>
              <td className="profile__td">{email}</td>
            </tr>
            <tr>
              <th className="profile__th">Phone:</th>
              <td className="profile__td">{phone}</td>
            </tr>
            <tr>
              <th className="profile__th">Username:</th>
              <td className="profile__td">{username}</td>
            </tr>
            <tr>
              <th className="profile__th">Website:</th>
              <td className="profile__td">{website}</td>
            </tr>
            <tr>
              <th className="profile__th">Company:</th>
              <td className="profile__td">{companyName}</td>
            </tr>
            <tr>
              <th className="profile__th">Catch Phrase:</th>
              <td className="profile__td">{catchPhrase}</td>
            </tr>
            <tr>
              <th className="profile__th">Address:</th>
              <td className="profile__td">
                {city}, {street}
              </td>
            </tr>
            <tr>
              <th className="profile__th">Zipcode:</th>
              <td className="profile__td">{zipcode}</td>
            </tr>
          </tbody>
        </table>
      </Hero>
    </div>
  );
};
