import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <div className='wrapper'>
      <StyledFooter>
        <Link to='/'>
          <img
            className='footer__logo'
            src='/assets/shared/desktop/logo-white.svg'
            alt='Logo'
          />
        </Link>
        <ul className='footer__site__links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About us</Link>
          </li>
          <li>
            <Link to='/subscribe'>Create your plan</Link>
          </li>
        </ul>
        <ul className='footer__social__links'>
          <li>
            <a href='https://www.google.com' rel='noreferrer' target='_blank'>
              <img
                src='/assets/shared/desktop/icon-facebook.svg'
                alt='Facebook'
              />
            </a>
          </li>
          <li>
            <a href='https://www.google.com' rel='noreferrer' target='_blank'>
              <img
                src='/assets/shared/desktop/icon-twitter.svg'
                alt='Twitter'
              />
            </a>
          </li>
          <li>
            <a href='https://www.google.com' rel='noreferrer' target='_blank'>
              <img
                src='/assets/shared/desktop/icon-instagram.svg'
                alt='Instagram'
              />
            </a>
          </li>
        </ul>
      </StyledFooter>
    </div>
  );
};

const StyledFooter = styled.footer`
  margin: 12rem 0 7.2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5.4rem 0;
  background: var(--color-dark-grey-blue);

  .footer__site__links {
    margin-top: 4.8rem;
  }

  .footer__site__links li {
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    color: var(--color-grey);
  }

  .footer__site__links li:nth-of-type(even) {
    margin: 2.4rem 0;
  }

  .footer__social__links {
    margin-top: 4.8rem;
  }

  .footer__social__links li {
    display: inline-block;
  }

  .footer__social__links li:nth-of-type(even) {
    margin: 0 2.4rem;
  }

  @media (min-width: 768px) {
    margin: 14.4rem 0 7.2rem 0;

    .footer__site__links li {
      display: inline;
    }

    .footer__site__links li:nth-of-type(even) {
      margin: 0 3.2rem;
    }
  }

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 4.8rem 8.8rem;
    margin: 20rem 0 8.8rem 0;

    .footer__site__links {
      margin: 0;
    }

    .footer__social__links li:nth-of-type(even) {
      margin: 0;
    }

    .footer__social__links {
      margin: 0;
    }

    .footer__social__links li {
      padding-left: 2.4rem;
    }
  }
`;

export default Footer;
