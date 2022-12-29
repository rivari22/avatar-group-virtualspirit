import React from "react";
import classNames from "classnames";

import styles from "./AvatarGroup.module.css";

type SizeType = "xs" | "sm" | "md" | "lg";

type CardImageProps = {
  size?: SizeType;
  image?: string;
  name: string;
};

const CardImage = ({ size, image, name }: CardImageProps) => {
  if (!!image) {
    return (
      <img
        src={image}
        alt="avatar"
        className={classNames(
          styles["avatar-gap"],
          styles["avatar"],
          styles[`card-size-${size}`],
          styles[`avatar-gap-${size}`]
        )}
      />
    );
  }

  return (
    <div
      className={classNames(
        styles["avatar-gap"],
        styles["empty-image"],
        styles["avatar"],
        styles[`card-size-${size}`],
        styles[`avatar-gap-${size}`]
      )}
    >
      <h3
        className={classNames(styles[`font-card-${size}`], styles["font-card"])}
      >
        {name}
      </h3>
    </div>
  );
};

type ItemAvatarGroups = Omit<CardImageProps, "size">;

type AvatarGroupProps = {
  size: SizeType;
  maxLength?: number;
  items: Array<ItemAvatarGroups>;
};

const AvatarGroup = ({ size = "md", maxLength, items }: AvatarGroupProps) => {
  return (
    <div className={styles["container"]}>
      {items
        ?.slice(0, maxLength || -1)
        .map((item: ItemAvatarGroups, index: number) => (
          <CardImage
            key={index}
            image={item.image}
            size={size}
            name={item?.name?.[0] + item?.name?.split(" ")?.[1]?.[0]}
          />
        ))}
      {!!maxLength && items?.length > maxLength && (
        <CardImage size={size} name={`+${items?.length - maxLength}`} />
      )}
    </div>
  );
};

export default AvatarGroup;
