import clsx from "clsx";
import css from "./Profile.module.css";

export const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.userInfo}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.title}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.tag}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers </span>
          <span className={css.number}>{followers}</span>
        </li>
        <li className={clsx(css.statsItem, css.border)}>
          <span>Views </span>
          <span className={css.number}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes </span>
          <span className={css.number}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
