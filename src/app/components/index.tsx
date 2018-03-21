import * as React from 'react';
import { GameItemsContainer } from './GamePoints/GameItemsContainer';
import { css } from 'react-emotion';
import { appWrapperStyle } from 'app/app.styles';
import { PlayerItemsContainer } from 'app/components/PlayerPoints/PlayerItemsContainer';
import { compose, withStateHandlers } from 'recompose';
import { gameItemsListMock } from 'app/app.mocks';
import { IPlayerItemProps, IGameItemProps } from 'app/components/types';

interface IAppTemplateProps {
  playerItemsList: Array<IPlayerItemProps>;
  gameItemsList: Array<IGameItemProps>;
  onGameItemSelect: () => (IGameItemProps: IGameItemProps) => void;
  onClearPlayerItemList: () => () => void;
}

export const AppTemplate = (props: IAppTemplateProps) => {
  return (
    <div className={css(appWrapperStyle)}>
      <GameItemsContainer
        gameItemsList={gameItemsListMock}
        onGameItemSelect={props.onGameItemSelect}
      />
      <PlayerItemsContainer playerItemsList={props.playerItemsList} onClearPlayerItemList={props.onClearPlayerItemList} />
    </div>
  );
}

const findItemIndexInPlayerItemsList = (
  arr: Array<IPlayerItemProps>,
  val: IPlayerItemProps
) => arr.findIndex((arrVal) => val.id === arrVal.id);

export const App = compose<any, any>(
  withStateHandlers<any, any>(
    (props: IAppTemplateProps) => ({
      playerItemsList: []
    }),
    {
      onGameItemSelect: ({ playerItemsList }) => (newItem) => {
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
      },
      onClearPlayerItemList: () => () => ({
        playerItemsList: []
      })
    }
  )
)(AppTemplate);