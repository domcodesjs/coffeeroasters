import styled from 'styled-components';

const Home = () => {
  return (
    <StyledDiv className='wrapper'>
      {/* hero */}
      <section className='hero'>
        <div className='hero__content'>
          <h1>Great coffee made simple.</h1>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button>Create your plan</button>
        </div>
      </section>

      {/* collection */}
      <section className='collection'>
        <h1>our collection</h1>
        <div className='collection__choices'>
          <div className='collection__choices__item'>
            <img
              src='/assets/home/desktop/image-gran-espresso.png'
              alt='Gran Espresso'
            />
            <div className='collection__choices__item__content'>
              <h3>Gran Espresso</h3>
              <p>
                Light and flavorful blend with cocoa and black pepper for an
                intense experience
              </p>
            </div>
          </div>
          <div className='collection__choices__item'>
            <img src='/assets/home/desktop/image-planalto.png' alt='Planalto' />
            <div className='collection__choices__item__content'>
              <h3>Planalto</h3>
              <p>
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts
              </p>
            </div>
          </div>
          <div className='collection__choices__item'>
            <img src='/assets/home/desktop/image-piccollo.png' alt='Piccollo' />
            <div className='collection__choices__item__content'>
              <h3>Piccollo</h3>
              <p>
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry
              </p>
            </div>
          </div>
          <div className='collection__choices__item'>
            <img src='/assets/home/desktop/image-danche.png' alt='Danche' />
            <div className='collection__choices__item__content'>
              <h3>Danche</h3>
              <p>
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* why */}
      <section className='why'>
        <div className='why__bg'></div>
        <h1 className='why__title'>Why choose us?</h1>
        <p className='why__text'>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className='why__choices'>
          <div className='why__choices__item'>
            <img src='/assets/home/desktop/icon-coffee-bean.svg' alt='Bean' />
            <div className='why__choices__item__content'>
              <h3>Best quality</h3>
              <p>
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>
          <div className='why__choices__item'>
            <img src='/assets/home/desktop/icon-gift.svg' alt='Gift' />
            <div className='why__choices__item__content'>
              <h3>Exclusive benefits</h3>
              <p>
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </div>
          <div className='why__choices__item'>
            <img src='/assets/home/desktop/icon-truck.svg' alt='Truck' />
            <div className='why__choices__item__content'>
              <h3>Free shipping</h3>
              <p>
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* how */}
      <section className='how'>
        <h1>How it works</h1>
        <div className='how__choices'>
          <div className='how__choices__item'>
            <h2>01</h2>
            <div className='how__choices__item__content'>
              <h3>Pick your coffee</h3>
              <p>
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>
          </div>
          <div className='how__choices__item'>
            <h2>02</h2>
            <div className='how__choices__item__content'>
              <h3>Choose the frequency</h3>
              <p>
                Customize your order frequency, quantity, even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal.
              </p>
            </div>
          </div>
          <div className='how__choices__item'>
            <h2>03</h2>
            <div className='how__choices__item__content'>
              <h3>Receive and enjoy!</h3>
              <p>
                We ship your package within 48 hours, freshly roasted. Sit back
                and enjoy award-winning world-className coffees curated to
                provide a distinct tasting experience.
              </p>
            </div>
          </div>
        </div>
        <button className='how__btn'>Create your plan</button>
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
    background-image: url(/assets/home/mobile/image-hero-coffeepress.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .hero__content {
    text-align: center;
  }

  .hero__content h1 {
    color: var(--color-light-cream);
    font-size: 4rem;
    line-height: 1.1;
  }

  .hero__content p {
    margin-top: 2.4rem;
    color: var(--color-light-cream);
    line-height: 1.5;
  }

  .hero__content button {
    margin-top: 4rem;
    padding: 1.6rem 3rem;
    border-radius: 0.6rem;
    border: none;
    color: var(--color-light-cream);
    font-size: 1.8rem;
    background: var(--color-dark-cyan);
  }

  @media (min-width: 576px) {
    .hero__content {
      max-width: 42rem;
      margin: 0 auto;
    }
  }

  @media (min-width: 768px) {
    .hero {
      padding: 10.4rem 5.8rem;
      background-image: url(/assets/home/tablet/image-hero-coffeepress.jpg);
    }

    .hero__content {
      text-align: left;
      max-width: 40rem;
      margin: 0;
    }

    .hero__content h1 {
      font-size: 4.8rem;
    }
  }

  @media (min-width: 992px) {
    .hero {
      padding: 12rem 5.6rem;
    }

    .hero__content h1 {
      font-size: 6.4rem;
      width: 50rem;
    }
  }

  @media (min-width: 1200px) {
    .hero {
      padding: 16rem 8rem;
      background-image: url(/assets/home/desktop/image-hero-coffeepress.jpg);
    }

    .hero__content h1 {
      font-size: 7.2rem;
      width: 50rem;
    }
  }
  /* end hero */

  /* collection */
  .collection {
    margin-top: 12rem;
  }

  .collection h1 {
    font-size: 4rem;
    text-align: center;
    background-color: --color-light-cream;
    background-image: linear-gradient(
      to bottom,
      var(--color-grey),
      var(--color-light-cream)
    );
    background-size: 100%;
    background-repeat: repeat;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  .collection__choices {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 4.8rem;
  }

  .collection__choices__item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .collection__choices__item:first-child {
    margin-top: 3.2rem;
  }

  .collection__choices__item img {
    width: 15rem;
  }

  .collection__choices__item__content {
    width: 28.2rem;
    text-align: center;
  }

  .collection__choices__item__content h3 {
    margin-top: 2.4rem;
    font-size: 2.4rem;
  }

  .collection__choices__item__content p {
    margin-top: 1.6rem;
  }

  @media (min-width: 768px) {
    .collection {
      margin-top: 14.4rem;
      position: relative;
      padding-top: 6rem;
    }

    .collection h1 {
      font-size: 9.6rem;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      text-align: center;
      z-index: -1;
      opacity: 0.5;
    }

    .collection__choices__item {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .collection__choices__item img {
      width: 22rem;
    }

    .collection__choices__item__content {
      text-align: left;
      margin-left: 3.2rem;
    }

    .collection__choices__item__content h3 {
      margin-top: -2.2rem;
    }
  }

  @media (min-width: 992px) {
    .collection {
      padding-top: 12rem;
    }

    .collection h1 {
      font-size: 12rem;
    }

    .collection__choices {
      grid-template-columns: repeat(4, minmax(0, 26rem));
      grid-gap: 2.4rem;
      justify-content: center;
    }

    .collection__choices__item {
      flex-direction: column;
      text-align: center;
    }

    .collection__choices__item:first-child {
      margin-top: 0;
    }
    .collection__choices__item img {
      width: 25rem;
      padding-left: 5.8rem;
    }

    .collection__choices__item__content {
      margin-top: 7.2rem;
      text-align: center;
    }

    .collection__choices__item__content p {
      max-width: 22rem;
      margin: 2.4rem auto 0 auto;
    }
  }
  /* end collection */

  /* why */
  .why__bg {
    height: 90rem;
    background: var(--color-dark-grey-blue);
    border-radius: 1rem;
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .why {
    width: 100%;
    margin-top: 12rem;
    position: relative;
    padding: 0 2.4rem;
  }

  .why__title {
    padding-top: 6.4rem;
    font-size: 2.8rem;
    color: var(--color-light-cream);
    text-align: center;
  }

  .why__text {
    text-align: center;
    color: var(--color-light-cream);
    line-height: 1.5;
    margin-top: 2.4rem;
  }

  .why__choices {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2.4rem;
  }

  .why__choices__item {
    background: var(--color-dark-cyan);
    border-radius: 0.8rem;
    padding: 7.2rem 0 4.8rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-light-cream);
  }

  .why__choices__item:first-child {
    margin-top: 6.4rem;
  }

  .why__choices__item img {
    width: 7.2rem;
  }

  .why__choices__item__content {
    width: 25rem;
  }

  .why__choices__item__content h3 {
    text-align: center;
    margin-top: 5.6rem;
    font-size: 2.4rem;
  }

  .why__choices__item__content p {
    text-align: center;
  }

  @media (min-width: 768px) {
    .why__bg {
      height: 57rem;
    }

    .why {
      margin-top: 14.4rem;
    }

    .why__title {
      padding-top: 5.6rem;
      font-size: 3.2rem;
    }

    .why__text {
      width: 54rem;
      margin: 2.4rem auto 0 auto;
    }

    .why__choices__item {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 4.2rem 0;
      width: 57rem;
      margin: 0 auto;
    }

    .why__choices__item:first-child {
      margin-top: 7rem;
    }

    .why__choices__item img {
      width: 5.6rem;
    }

    .why__choices__item__content {
      margin-left: 5.6rem;
    }

    .why__choices__item__content h3 {
      margin: 0;
      text-align: left;
    }

    .why__choices__item__content p {
      margin-top: 1.6rem;
      text-align: left;
      width: 34rem;
    }
  }

  @media (min-width: 992px) {
    .why__bg {
      height: 57rem;
    }

    .why {
      width: 100%;
    }

    .why__title {
      font-size: 4rem;
    }

    .why__text {
      margin-top: 3.2rem;
    }

    .why__choices {
      margin-top: 8.8rem;
      grid-template-columns: repeat(3, minmax(0, 35rem));
      justify-content: center;
    }

    .why__choices__item {
      width: auto;
      flex-direction: column;
      margin: 0;
      padding: 7.2rem 0 4.8rem 0;
    }

    .why__choices__item:first-child {
      margin: 0;
    }

    .why__choices__item__content {
      margin: 0;
    }

    .why__choices__item__content h3 {
      text-align: center;
      margin-top: 5.6rem;
    }

    .why__choices__item__content p {
      width: auto;
      text-align: center;
      margin-top: 2.4rem;
    }
  }
  /* end why */

  /* how */
  .how {
    margin-top: 12rem;
  }

  .how h1 {
    font-size: 2.4rem;
    text-align: center;
    color: var(--color-grey);
  }

  .how__choices {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 4rem;
    margin-top: 6.4rem;
  }

  .how__choices__item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .how__choices__item h2 {
    font-size: 7.2rem;
    text-align: center;
    color: var(--color-pale-orange);
  }

  .how__choices__item__content {
    margin-top: 3.2rem;
  }

  .how__choices__item__content h3 {
    font-size: 2.8rem;
    text-align: center;
  }

  .how__choices__item__content p {
    margin-top: 1.6rem;
    line-height: 1.5;
    text-align: center;
    width: 32rem;
  }

  .how__btn {
    display: block;
    margin: 8rem auto 0 auto;
    text-align: center;
    padding: 1.6rem 3rem;
    border-radius: 0.6rem;
    border: none;
    color: var(--color-light-cream);
    font-size: 1.8rem;
    background: var(--color-dark-cyan);
  }

  @media (min-width: 768px) {
    .how {
      margin-top: 14.4rem;
      width: 100%;
    }

    .how h1 {
      text-align: left;
    }

    .how__choices {
      margin-top: 4rem;
      grid-template-columns: repeat(3, minmax(0, 23rem));
      grid-gap: 1.6rem;
    }

    .how__choices__item {
      align-items: flex-start;
    }

    .how__choices__item h2 {
      text-align: left;
    }

    .how__choices__item__content h3 {
      text-align: left;
      line-height: 1.2;
      width: auto;
    }

    .how__choices__item__content p {
      text-align: left;
      width: auto;
    }

    .how__btn {
      margin: 6rem 0 0 0;
    }
  }

  @media (min-width: 992px) {
    .how__choices {
      grid-gap: 9rem;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .how__choices__item__content h3 {
      width: 20rem;
      font-size: 3.2rem;
    }
  }

  @media (min-width: 1200px) {
    .how__choices__item__content p {
      max-width: 38rem;
    }
  }
  /* end how */
`;

export default Home;
