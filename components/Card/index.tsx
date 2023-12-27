import React from 'react';
import { cardContainer, imgWrapper, cardBody, cardTitle } from './index.css';

function Card() {
  return (
    <article className={cardContainer}>
      <figure className={imgWrapper}>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="shoes"
          style={{ width: '100%' }}
        />
      </figure>
      <section className={cardBody}>
        <h2 className={cardTitle}>Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </section>
    </article>
  );
}

export default Card;
