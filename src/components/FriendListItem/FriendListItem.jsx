import css from "./FriendListItem.module.css";
import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = clsx(css.status, isOnline ? css.online : css.offline);

  return (
    <div className={css.item}>
      <img className={css.image} src={avatar} alt="Avatar" width="48" />
      <p className={css.title}>{name}</p>
      <p className={statusClass}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
