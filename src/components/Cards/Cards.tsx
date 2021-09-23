import * as React from "react";
import { useState } from "react";
// import cards from "../../store/cards";
import styles from "./../Cards/Cards.module.css";

interface CardsProps {
  cards: any;
  removeCard: (card: string, board: string) => void;
  position: any;
  isClass?: any;
  dragStart?: (e: any) => void;
  dragEnter?: (e: any) => void;
  dragLeave?: (e: any) => void;
  dragOver?: (e: any) => void;
  dragEnd?: (e: any) => void;
  drop?: (e: any) => void;
}

export const Cards: React.FunctionComponent<CardsProps> = (
  props: CardsProps
) => {
  const [isActive, setIsActive] = useState(false);

  const activate = () => {
    setIsActive(true);
  };
  const deActivate = () => {
    setIsActive(false);
  };

  const deleteCard = (e: any) => {
    props.removeCard(
      e.target.parentNode.parentNode.parentNode.id,
      props.cards.idBoard
    );
  };

  return (
    <div
      className={
        props.isClass === props.cards.id
          ? [styles.card, styles.start].join(" ")
          : styles.card
      }
      onMouseEnter={activate}
      onMouseLeave={deActivate}
      id={props.cards.id}
      draggable="true"
      onDragStart={props.dragStart}
      onDragEnd={props.dragEnd}
      onDragOver={props.dragOver}
      onDragEnter={props.dragEnter}
      onDragLeave={props.dragLeave}
      onDrop={props.drop}
      data-position={props.position}
    >
      <div className={styles.card_content}>{props.cards.name}</div>
      {isActive ? (
        <div className={styles.card_manage}>
          <span className={styles.card_manage_span}>
            <i className="far fa-edit"></i>
          </span>
          <span className={styles.card_manage_span} onClick={deleteCard}>
            <i className="far fa-trash-alt"></i>
          </span>
        </div>
      ) : null}
      <div className={styles.badges}>
        <i className="fas fa-align-left"></i>
      </div>
    </div>
  );
};
