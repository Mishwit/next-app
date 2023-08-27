import React from "react";
import Image from "next/image";

import { Button } from "../../atoms/Button";
import { cardContent } from "../../../src/pages/сard-data/card-content";

import styles from "./styles.module.scss";

export const Card = () => (
  <div className={styles.productCard}>
    <Image
      src={cardContent.img}
      alt="Headphones"
      width={258}
      height={258}
      className={styles.cardImg}
    />
    <div className={styles.cardInfo}>
      <span className={styles.cardPrice}>{cardContent.price}</span>
      <h2 className={styles.cardTitle}>{cardContent.title}</h2>
      <p className={styles.cardSubtitle}>{cardContent.subtitle}</p>
      <p className={styles.cardChooseColour}>Choose your colour</p>
      <div className={styles.colourBlock}>
        <div className={styles.colourCircle}></div>
        <div className={styles.colourCircle}></div>
        <div className={styles.colourCircle}></div>
      </div>
      <Button
        type="submit"
        text="Add to cart"
        variant="yellow"
        onClick={() => alert("Added to cart!")}
      />
      <Button
        type="submit"
        text="Buy now"
        variant="white"
        onClick={() => alert("Thanks for buying!")}
      />
      <a href="#" className={styles.cardReviews}>
        Read reviews
      </a>
    </div>
  </div>
);
