import styled from 'styled-components';

const About = () => {
  return (
    <StyledDiv className='wrapper'>
      <section className='hero'>
        <div className='hero__content'>
          <h1>About us</h1>
          <p>
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </div>
      </section>

      <section className='commitment'>
        <div className='commitment__img'></div>
        <div className='commitment__content'>
          <h2>Our commitment</h2>
          <p>
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </section>

      <section className='quality'>
        <div className='quality__content__wrapper'>
          <div className='quality__img'></div>
          <div className='quality__content'>
            <h2>Uncompromising quality</h2>
            <p>
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </div>
        </div>
      </section>

      <section className='locations'>
        <h2>Our headquarters</h2>
        <div className='locations__choices'>
          <div className='locations__choices__item'>
            <img
              src='./assets/about/desktop/illustration-uk.svg'
              alt='United Kingdom'
            />
            <div className='locations__choices__item__content'>
              <h3>United Kingdom</h3>
              <ul>
                <li>68 Asfordby Rd</li>
                <li>Alcaston</li>
                <li>SY6 1YA</li>
                <li>+44 1241 918425</li>
              </ul>
            </div>
          </div>
          <div className='locations__choices__item'>
            <img
              src='./assets/about/desktop/illustration-canada.svg'
              alt='Canada'
            />
            <div className='locations__choices__item__content'>
              <h3>Canada</h3>
              <ul>
                <li>1528 Eglinton Avenue</li>
                <li>Toronto</li>
                <li>Ontario M4P 1A6</li>
                <li>+1 416 485 2997</li>
              </ul>
            </div>
          </div>
          <div className='locations__choices__item'>
            <img
              src='./assets/about/desktop/illustration-australia.svg'
              alt='Australia'
            />
            <div className='locations__choices__item__content'>
              <h3>Australia</h3>
              <ul>
                <li>36 Swanston Street</li>
                <li>Kewell</li>
                <li>Victoria</li>
                <li>+61 4 9928 3629</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  /* hero */
  .hero {
    margin-top: 4rem;
    padding: 10rem 2.4rem;
    border-radius: 1rem;
    background-image: url(../assets/about/mobile/image-hero-whitecup.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: #000;
  }

  .hero__content {
    color: var(--color-light-cream);
    text-align: center;
    max-width: 28rem;
    margin: 0 auto;
  }

  .hero__content h1 {
    font-size: 2.8rem;
  }

  .hero__content p {
    margin-top: 2.4rem;
    line-height: 1.5;
  }

  @media (min-width: 768px) {
    .hero {
      padding: 11.8rem 5.8rem;
      background-image: url(../assets/about/tablet/image-hero-whitecup.jpg);
    }

    .hero__content {
      text-align: left;
      margin: 0;
      max-width: 40rem;
    }

    .hero__content h1 {
      font-size: 3.2rem;
    }

    .hero__content p {
      margin-top: 1.6rem;
    }
  }

  @media (min-width: 992px) {
    .hero {
      padding: 13.7rem 8.5rem;
      background-image: url(../assets/about/desktop/image-hero-whitecup.jpg);
      margin-top: 4.8rem;
    }

    .hero__content {
      max-width: 44rem;
    }

    .hero__content h1 {
      font-size: 4rem;
    }
  }
  /* end hero */

  /* commitment */
  .commitment {
    margin-top: 12rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 4.8rem;
  }

  .commitment__img {
    background-image: url(../assets/about/mobile/image-commitment.jpg);
    border-radius: 0.8rem;
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    height: 40rem;
  }

  .commitment__content {
    text-align: center;
  }

  .commitment__content h2 {
    font-size: 3.2rem;
  }

  .commitment__content p {
    margin-top: 3rem;
    color: var(--color-dark-grey-blue);
    line-height: 1.5;
  }

  @media (min-width: 768px) {
    .commitment {
      margin-top: 14.4rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 47rem;
    }

    .commitment__img {
      background-image: url(../assets/about/tablet/image-commitment.jpg);
      border-radius: 0.8rem;
      background-size: 100% 100%;
      background-position: center;
      width: 28rem;
      height: auto;
    }

    .commitment__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0;
      text-align: left;
    }
  }

  @media (min-width: 992px) {
    .commitment {
      grid-template-columns: auto auto;
      grid-gap: 8rem;
      padding: 0 4.8rem;
      height: 50rem;
      max-width: 110rem;
      margin: 16.8rem auto 0 auto;
    }

    .commitment__img {
      background-image: url(../assets/about/desktop/image-commitment.jpg);
      width: 32rem;
    }

    .commitment__content h2 {
      font-size: 4rem;
    }
  }

  @media (min-width: 1200px) {
    .commitment {
      height: 52rem;
      grid-gap: 12rem;
      max-width: 160rem;
    }

    .commitment__img {
      width: 44.5rem;
    }
  }
  /* end commitment */

  /* quality */
  .quality {
    margin-top: 12rem;
    color: #fff;
    position: relative;
  }

  .quality__img {
    background-image: url(../assets/about/mobile/image-quality.jpg);
    background-size: 100% 100%;
    background-position: center;
    height: 15.6rem;
    width: 28rem;
    border-radius: 0.8rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .quality__content__wrapper {
    padding-top: 7.2rem;
  }

  .quality__content {
    border-radius: 0.8rem;
    padding: 15rem 2.4rem 6.4rem 2.4rem;
    background: var(--color-dark-grey-blue);
    margin: 0 auto;
  }

  .quality__content h2 {
    font-size: 2.8rem;
    text-align: center;
    line-height: 1.1;
    max-width: 28rem;
    margin: 0 auto;
    color: var(--color-light-cream);
  }

  .quality__content p {
    margin: 2.4rem auto 0 auto;
    text-align: center;
    line-height: 1.5;
    max-width: 28rem;
    color: var(--color-light-cream);
  }

  @media (min-width: 768px) {
    .quality {
      margin-top: 14.4rem;
    }

    .quality__content__wrapper {
      padding-top: 16rem;
    }

    .quality__img {
      background-image: url(../assets/about/tablet/image-quality.jpg);
      background-size: 100% 100%;
      background-position: center;
      height: 10rem;
      width: 57rem;
      height: 32rem;
    }

    .quality__content {
      padding: 22rem 7.4rem 6.4rem 7.4rem;
    }

    .quality__content h2 {
      max-width: 54rem;
      font-size: 3.2rem;
    }

    .quality__content p {
      max-width: 54rem;
    }
  }

  /* @media (min-width: 1200px) {
  .quality__img {
    background-image: url(../assets/about/desktop/image-quality.jpg);
    width: 44.5rem;
    height: 47.4rem;
  }

  .quality__content {
    padding: 8.8rem 0 17.6rem 8.8rem;
    margin: 0;
  }

  .quality__content__wrapper {
    padding-top: 8.8rem;
    margin: 0 auto;
    position: relative;
  }
} */
  /* end quality */

  /* headquarters */
  .locations {
    margin-top: 12rem;
  }

  .locations h2 {
    font-size: 2.4rem;
    text-align: center;
    color: var(--color-grey);
  }

  .locations__choices {
    margin-top: 7.2rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 8rem;
  }

  .locations__choices__item img {
    display: block;
    width: 4.8rem;
    height: 4.8rem;
    margin: 0 auto;
  }

  .locations__choices__item__content {
    text-align: center;
  }

  .locations__choices__item__content h3 {
    margin-top: 4.8rem;
    font-size: 2.8rem;
  }

  .locations__choices__item__content ul {
    margin-top: 2.4rem;
  }

  @media (min-width: 768px) {
    .locations {
      margin-top: 14.4rem;
    }

    .locations__choices {
      grid-template-columns: repeat(3, 1fr);
    }

    .locations__choices__item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .locations__choices__item img {
      margin: 0;
    }

    .locations__choices__item__content h3 {
      font-size: 2rem;
    }

    .locations__choices__item__content ul {
      margin-top: 2.4rem;
    }
  }

  @media (min-width: 992px) {
    .locations {
      margin: 16.8rem auto 0 auto;
    }
  }
  /* end headquarters */
`;

export default About;
