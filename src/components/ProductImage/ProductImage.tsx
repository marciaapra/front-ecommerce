import Image from "next/image";
import noImage from "../../assets/no-image.png";

import styles from "./product-image.module.css";

const ProductImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <Image
      className={styles["image"]}
      src={imageUrl !== "" ? imageUrl : noImage}
      alt={"imagem do produto"}
      width={200}
      height={200}
    />
  );
};

export default ProductImage;
