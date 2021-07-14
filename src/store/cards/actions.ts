import { CARDS_TYPES } from "./types";
import { getToken } from '../auth';


export const setCards = (cards: any) =>{
   return {
       type: CARDS_TYPES.SET_CARDS,
       payload: cards
   }
}

export const fetchCards = (boardName: string)=>{
    const baseUrl = 'https://api.trello.com/1/';
    
    return async (dispatch: any, getState: any)=>{
        const AppState = getState();
        const token = getToken(AppState);

        const response = await fetch(
        `${baseUrl}boards/${boardName}/cards?key=${process.env.REACT_APP_API_KEY}&token=${token}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }
        )
        const data = await response.json();
        dispatch(setCards(data));
    }
}

export const fetchToAddCard = (cardName: string, activeListId: string, activeBoard: string)=>{
    const baseUrl = 'https://api.trello.com/1/';
    
    return async (dispatch: any, getState: any)=>{
        const AppState = getState();
        const token = getToken(AppState);
        
        try {
        const response = await fetch(
            `${baseUrl}cards?key=${process.env.REACT_APP_API_KEY}&token=${token}&idList=${activeListId}&name=${cardName}`, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                //   body: JSON.stringify(cardName)
                }
            )
            if (response.status === 200) {
                const data = await response.text();
                console.log(data);   
            }    
        } catch (error) {
            console.log(error); 
        } finally {
            dispatch(fetchCards(activeBoard))
        }
    }
}

export const fetchRemoveCard = (cardId: string, boardId: string) => {
    const baseUrl = 'https://api.trello.com/1/';
    
    return async (dispatch: any, getState: any)=>{
        const AppState = getState();
        const token = getToken(AppState);
        
        const response = await fetch(
            `${baseUrl}cards/${cardId}?key=${process.env.REACT_APP_API_KEY}&token=${token}`, {
                method: 'DELETE',
                // mode: 'no-cors',
                // headers: {
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json'
                //   },
            }
        )

        dispatch(fetchCards(boardId))
    }    
}