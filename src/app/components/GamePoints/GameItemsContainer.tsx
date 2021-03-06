import * as React from 'react';
import { css } from 'react-emotion';
import { GameItemsList } from './GameItemsList';
import { headerMocks } from 'app/app.mocks';

import { gameItemsContainerStyle } from 'app/components/GamePoints/gameItems.styles';
import { Header } from 'app/components/common/Header';
import { IGameItemProps } from 'app/components/types';

interface IGameItemsContainerProps {
    gameItemsList: Array<IGameItemProps>;
    onGameItemSelect: () => void;
}

export const GameItemsContainer = (props: IGameItemsContainerProps) => {
    return (
        <div className={css(gameItemsContainerStyle)}>
            <Header headerTitle={headerMocks.gameItemsHeaderTitle} />
            <GameItemsList gameItemsList={props.gameItemsList} onGameItemSelect={props.onGameItemSelect}/>
        </div>
    );
};
