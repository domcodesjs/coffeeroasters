import styled from 'styled-components';

const Subscribe = () => {
  return (
    <StyledDiv className='wrapper'>
      <section class='hero'>
        <h1>Create a plan</h1>
        <p>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </section>

      <section class='steps'>
        <div class='steps__item'>
          <h2>01</h2>
          <h3>Pick your coffee</h3>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>
        <div class='steps__item'>
          <h2>02</h2>
          <h3>Choose the frequency</h3>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>
        <div class='steps__item'>
          <h2>03</h2>
          <h3>Receive and enjoy!</h3>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
      </section>

      <section class='preferences'>
        <div class='preferences__option'>
          <h2>How do you drink your coffee?</h2>
          <div class='preferences__option__choices'>
            <div class='preferences__option__choices__item'>
              <h3>Capsule</h3>
              <p>Compatible with Nespresso systems and similar brewers</p>
            </div>
            <div class='preferences__option__choices__item'>
              <h3>Filter</h3>
              <p>
                For pour over or drip methods like Aeropress, Chemex, and V60
              </p>
            </div>
            <div class='preferences__option__choices__item'>
              <h3>Espresso</h3>
              <p>
                Dense and finely ground beans for an intense, flavorful
                experience
              </p>
            </div>
          </div>
        </div>

        <div class='preferences__option'>
          <h2>What type of coffee?</h2>
          <div class='preferences__option__choices'>
            <div class='preferences__option__choices__item'>
              <h3>Single origin</h3>
              <p>
                Distinct, high quality coffee from a specific family-owned farm
              </p>
            </div>
            <div class='preferences__option__choices__item'>
              <h3>Decaf</h3>
              <p>
                Just like regular coffee, except the caffeine has been removed
              </p>
            </div>
            <div class='preferences__option__choices__item'>
              <h3>Blended</h3>
              <p>
                Combination of two or three dark roasted beans of organic
                coffees
              </p>
            </div>
          </div>
        </div>

        <div class='preferences__option'>
          <h2>How much would you like?</h2>
          <div class='preferences__option__choices'>
            <div class='preferences__option__choices__item'>
              <h3>250g</h3>
              <p>
                Perfect for the solo drinker. Yields about 12 delicious cups.
              </p>
            </div>
            <div class='preferences__option__choices__item'>
              <h3>500g</h3>
              <p>
                Perfect option for a couple. Yields about 40 delectable cups.
              </p>
            </div>
            <div class='preferences__option__choices__item'>
              <h3>1000g</h3>
              <p>
                Perfect for offices and events. Yields about 90 delightful cups.
              </p>
            </div>
          </div>
        </div>

        <div class='preferences__option'>
          <h2>Want us to grind them?</h2>
          <div class='preferences__option__choices'>
            <div class='preferences__option__choices__item'>
              <h3>Wholebean</h3>
              <p>Best choice if you cherish the full sensory experience</p>
            </div>
            <div class='preferences__option__choices__item'>
              <h3>Filter</h3>
              <p>
                For drip or pour-over coffee methods such as V60 or Aeropress
              </p>
            </div>
            <div class='preferences__option__choices__item'>
              <h3>Cafetiére</h3>
              <p>
                Coarse ground beans specially suited for french press coffee
              </p>
            </div>
          </div>
        </div>

        <div class='preferences__option'>
          <h2>How often should we deliver?</h2>
          <div class='preferences__option__choices'>
            <div class='preferences__option__choices__item'>
              <h3>Every week</h3>
              <p>$14.00 per shipment. Includes free first-class shipping.</p>
            </div>
            <div class='preferences__option__choices__item'>
              <h3>Every 2 weeks</h3>
              <p>$17.25 per shipment. Includes free priority shipping.</p>
            </div>
            <div class='preferences__option__choices__item'>
              <h3>Every month</h3>
              <p>$22.50 per shipment. Includes free priority shipping.</p>
            </div>
          </div>
        </div>

        <div class='preferences__summary'>
          <h2>Order Summary</h2>
          <p>
            “I drink my coffee as <span>Filter</span>, with a<span>Decaf</span>{' '}
            type of bean. <span>250g</span> ground ala
            <span>Cafetiére</span>, sent to me <span>Every Week</span>.”
          </p>
        </div>

        <button class='preferences__btn'>Create my plan!</button>
      </section>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  .hero {
    background-image: url(../assets/plan/mobile/image-hero-blackcup.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: var(--color-light-cream);
    text-align: center;
    padding: 10rem 2.6rem 13.6rem 2.6rem;
    border-radius: 1rem;
    margin-top: 4rem;
  }

  .hero h1 {
    font-size: 4rem;
  }

  .hero p {
    margin-top: 2.4rem;
    line-height: 1.5;
  }
  /* end hero */

  /* steps */
  .steps {
    background-color: var(--color-dark-grey-blue);
    padding: 8rem 2.4rem;
    border-radius: 1rem;
    margin-top: 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .steps__item {
    max-width: 32rem;
  }

  .steps__item:nth-of-type(even) {
    margin: 5.6rem 0;
  }

  .steps__item h2 {
    font-size: 7.2rem;
    color: var(--color-pale-orange);
    text-align: center;
  }

  .steps__item h3 {
    margin-top: 2.4rem;
    font-size: 2.8rem;
    color: var(--color-light-cream);
    text-align: center;
  }

  .steps__item p {
    margin-top: 2.4rem;
    color: var(--color-light-cream);
    text-align: center;
  }
  /* end steps */

  /* preferences */
  .preferences {
    margin-top: 12rem;
  }

  .preferences__summary {
    background-color: var(--color-dark-grey-blue);
    color: var(--color-light-cream);
    padding: 3.2rem 2.4rem;
    border-radius: 0.8rem;
    margin-top: 12rem;
  }

  .preferences__summary h2 {
    color: var(--color-grey);
    font-family: 'Barlow', sans-serif;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 400;
  }

  .preferences__summary p {
    font-family: 'Fraunces', serif;
    font-weight: 900;
    font-size: 2.4rem;
    margin-top: 0.8rem;
  }

  .preferences__summary p span {
    color: var(--color-dark-cyan);
  }

  .preferences__btn {
    display: block;
    background-color: var(--color-dark-cyan);
    border: none;
    color: var(--color-light-cream);
    font-size: 1.8rem;
    padding: 1.6rem 3.2rem;
    border-radius: 0.6rem;
    margin: 5.6rem auto 0 auto;
  }

  .preferences__option:not(:first-child) {
    margin-top: 9.6rem;
  }

  .preferences__option h2 {
    color: #83888f;
    font-size: 2.4rem;
  }

  .preferences__option__choices {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.6rem;
    margin-top: 3.2rem;
  }

  .preferences__option__choices__item {
    height: 14rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f4f1eb;
    border-radius: 0.8rem;
    padding: 2.4rem;
    cursor: pointer;
  }

  .preferences__option__choices__item:hover {
    color: #fff;
    background-color: var(--color-dark-cyan);
  }

  .preferences__option__choices__item h3 {
    font-size: 2.4rem;
  }
  /* end preferences */
`;

// <!-- 01 Preferences
// 02 Bean type
// 03 Quantity
// 04 Grind option
// 05 Deliveries

// Order Summary
// “I drink coffee _____, with a _____ type of bean. _____ ground ala _____,
// sent to me _____.”

// Create my plan! -->

// <!-- Modal -->
// <!-- Order Summary

// “I drink coffee _____, with a _____ type of bean. _____ ground ala _____,
// sent to me _____.”

// Is this correct? You can proceed to checkout or go back to plan selection if something
// is off. Subscription discount codes can also be redeemed at the checkout.

// $_____/month

// Checkout -->
// <!-- End modal -->

export default Subscribe;
