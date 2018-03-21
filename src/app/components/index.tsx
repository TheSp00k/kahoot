import * as React from 'react';
import { GameItemsContainer } from './GamePoints/GameItemsContainer';
import { css } from 'react-emotion';
import { appWrapperStyle } from 'app/app.styles';
import { PlayerItemsContainer } from 'app/components/PlayerPoints/PlayerItemsContainer';
import { compose, withStateHandlers } from 'recompose';
import { gameItemsListMock } from 'app/app.mocks';


export const AppTemplate = (props) => {
  return (
    <div className={css(appWrapperStyle)}>
      <GameItemsContainer gameItemsList={gameItemsListMock} onGameItemSelect={props.onGameItemSelect} />
      <PlayerItemsContainer playerItemsList={props.playerItemsList} />
    </div>
  );
}

interface IGameItemProps {
  id: number;
  title: string;
  style?: any;
  score: number;
}

const findItemIndexInPlayerItemsList = (arr, val) => arr.findIndex((arrVal) => val.id === arrVal.id);

export const App = compose(
  withStateHandlers(
    (props) => ({
      playerItemsList: []
    }),
    {
      onGameItemSelect: ({ playerItemsList }) => (newItem) => {
        console.log(playerItemsList, newItem);
        const newItemIndex = findItemIndexInPlayerItemsList(playerItemsList, newItem);
        if (newItemIndex === -1) {
          newItem.qty = 1;
          playerItemsList.push(newItem);
        } else {
          const tmpItem = Object.assign({}, playerItemsList[newItemIndex]);
          tmpItem.qty += 1;
          playerItemsList[newItemIndex] = tmpItem;
        }
        return playerItemsList;
      }
    }
  )
)(AppTemplate);