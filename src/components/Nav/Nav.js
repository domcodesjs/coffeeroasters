import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <div className='wrapper'>
      <StyledNav className='nav'>
        <a href='/'>
          <img
            className='nav__logo'
            src='/assets/shared/desktop/logo.svg'
            alt='Logo'
          />
        </a>
        <ul className='nav__menu__desktop'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/subscribe'>Create Your Plan</Link>
          </li>
        </ul>
        <button className='nav__menu-open'>
          <img src='/assets/shared/mobile/icon-hamburger.svg' alt='Menu' />
        </button>
      </StyledNav>
    </div>
  );
};

const StyledNav = styled.nav`
  .mobile__nav {
    z-index: 1000;
    background: var(--color-light-cream);
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    padding: 3.2rem 2.4rem 0 2.4rem;
  }

  .mobile__nav__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--color-light-cream);
  }

  .mobile__nav__header__logo {
    width: 16rem;
  }

  .mobile__nav__header__close {
    width: 1.4rem;
    height: 1.4rem;
  }

  .mobile__nav__content {
    padding-top: 8rem;
  }

  .mobile__nav__content li {
    text-align: center;
    font-size: 2.4rem;
    font-family: 'Fraunces', serif;
    color: var(--color-dark-grey-blue);
    font-weight: 900;
  }

  .mobile__nav__content li:nth-of-type(odd) {
    margin: 3.2rem 0;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  margin-top: 3.2rem;

  .nav__logo {
    width: 16rem;
  }

  .nav__menu__desktop {
    display: none;
  }

  .nav__menu-open {
    background: none;
    border: none;
    outline: none;
  }

  @media (min-width: 768px) {
    margin-top: 4rem;

    .nav__logo {
      width: 24rem;
    }

    .nav__menu__desktop {
      display: block;
    }

    .nav__menu__desktop li {
      display: inline-block;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1.2rem;
      color: var(--color-grey);
    }

    .nav__menu__desktop li:not(:first-child) {
      margin-left: 3.2rem;
    }

    .nav__menu-open {
      display: none;
    }
  }
`;

export default Nav;
