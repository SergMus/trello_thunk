import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./../CardList/CardsList.module.css";
import { Cards } from "./../Cards/Cards";
import { NavLink } from "react-router-dom";
import { ListAddCard } from "../ListAddCard";
import { setLists } from "../../store";

interface CardsListProps {
  lists: any;
  cards: any;
  addListCard: (
    cardName: string,
    activeListId: string,
    activeBoard: string
  ) => void;
  removeCard: (card: string, board: string) => void;
}
interface StateProperties {
  indexArr: any;
}

export const CardsList: React.FunctionComponent<any> = (
  props: CardsListProps
) => {
  useEffect(() => {
    setOrderedCards(props.cards);
  }, [props.cards]);
  const initialDndState = {
    draggedFrom: "",
    draggedTo: "",
    isDragged: false,
    originalOrder: [],
    updatedOrder: [],
  };
  const [dragAndDrop, setDragAndDrop] = useState(initialDndState);
  const [orderedCards, setOrderedCards] = useState(props.cards);
  const [isClass, setIsClass] = useState(undefined);
  const [indexArr, setIndexArr] = useState<StateProperties[]>([]);

  useEffect(() => {}, [indexArr]);

  const dragEnter = (e: any) => {
    e.target.style.boxShadow = "-5px -5px 5px -5px rgba(34, 60, 80, 0.6)";
    // console.log(e, "enter");
  };
  const dragLeave = (e: any) => {
    e.target.style.boxShadow = "none";
    // console.log(e, "leave");
  };

  const dragStart = (e: any) => {
    setIsClass(e.target.id);

    const initialPosition = e.target.dataset.position;
    setDragAndDrop({
      ...dragAndDrop,
      isDragged: true,
      draggedFrom: initialPosition,
      originalOrder: orderedCards,
    });
  };
  const dragEnd = (e: any) => {
    setIsClass(undefined);
  };
  const dragOver = (e: any) => {
    e.preventDefault();
    let newList: any = dragAndDrop.originalOrder;
    let draggedFrom: any = Number(dragAndDrop.draggedFrom);
    let draggedTo: any = Number(e.target.dataset.position);
    let itemDragged = newList[draggedFrom];

    const remainingItems = newList.filter(
      (item: any, index: any) => index !== draggedFrom
    );

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };
  const drop = (e: any) => {
    setOrderedCards(dragAndDrop.updatedOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: "",
      draggedTo: "",
      isDragged: false,
    });
    e.target.style.boxShadow = "none";
  };

  function sendIndex() {
    var index = 0;
    var lastIndex = 0;
    var nextList = 0;
    var ind = 0;
    return (counter: any) => {
      if (counter === 0) {
        ind = nextList + 1;
        if (ind > nextList) {
          lastIndex = index;
          lastIndex++;
          index = lastIndex;
        }
        return index;
      }
      index++;
      return index;
    };
  }
  const b = sendIndex();

  return (
    props.lists &&
    props.lists.map((item: any, index: any) => {
      return (
        <div className={styles.list_wrapper} key={index}>
          <div className={styles.list_content}>
            <div className={styles.list_header}>
              {item.name}
              <span className={styles.dots}>
                <i className="fas fa-ellipsis-h"></i>
              </span>
            </div>
            <div className={styles.list_cards}>
              {orderedCards &&
                orderedCards
                  .filter((elem: any) => {
                    return (
                      elem.idList === item.id && elem.idBoard === item.idBoard
                    );
                  })
                  .map((item: any, i: any) => {
                    return (
                      <Cards
                        cards={item}
                        position={b(i) - 1}
                        removeCard={props.removeCard}
                        dragStart={dragStart}
                        dragEnd={dragEnd}
                        dragEnter={dragEnter}
                        dragLeave={dragLeave}
                        dragOver={dragOver}
                        drop={drop}
                        isClass={isClass}
                      />
                    );
                  })}
            </div>
            <div className={styles.list_footer}>
              <ListAddCard
                addListCard={props.addListCard}
                listId={item.id}
                boardId={item.idBoard}
              />
            </div>
          </div>
        </div>
      );
    })
  );
};
