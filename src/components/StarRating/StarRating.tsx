import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import styles from "./star-rating.module.css";

const StarRating = ({ rate }: { rate: number }) => {
  const getStarIcon = (currentRate: number): IconProp => {
    return currentRate > rate ? faStarRegular : faStar;
  };

  return (
    <div className={styles["star-rating"]}>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <label key={`star_${currentRate}`}>
            <FontAwesomeIcon
              className={styles["star-rating__icon"]}
              icon={getStarIcon(currentRate)}
            />
          </label>
        );
      })}
      <p className={styles["star-rating__text"]}>{rate.toFixed(1)}/5.0</p>
    </div>
  );
};

export default StarRating;
