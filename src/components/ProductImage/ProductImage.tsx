import Image from "next/image";
import noImage from "@/assets/no-image.png";

import styles from "./product-image.module.css";

interface ProductImageProps {
  imageUrl: string;
  width: number;
  height: number;
}

const ProductImage = ({ imageUrl, width, height }: ProductImageProps) => {
  return (
    <Image
      className={styles["image"]}
      src={imageUrl !== "" ? imageUrl : noImage}
      alt={"imagem do produto"}
      width={width}
      height={height}
    />
  );
};

export default ProductImage;
