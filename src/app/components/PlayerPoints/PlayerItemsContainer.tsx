import * as React from 'react';
import { playerItemsContainerStyle, blankPlayerListStyle } from 'app/components/PlayerPoints/playerItems.styles';
import { headerMocks } from 'app/app.mocks';
import { Header } from 'app/components/common/Header';
import { PlayerItemsList } from 'app/components/PlayerPoints/PlayerItemsList';
import { css } from 'react-emotion';
import { PlayerItemsContainerFooter } from 'app/components/PlayerPoints/PlayerItemsContainerFooter';
import { IPlayerItemProps } from 'app/components/types';


const getContentToRender = (playerItems: Array<IPlayerItemProps>) => {
    if (playerItems && playerItems.length > 0) {
        return <PlayerItemsList playerItemsList={playerItems} />
    }
    return <div className={css(blankPlayerListStyle)}>You do not have any items</div>
}

interface IPlayerItemsContainerProps {
    playerItemsList: Array<IPlayerItemProps>;
    onClearPlayerItemList: () => () => void;
}
export const PlayerItemsContainer = (props: IPlayerItemsContainerProps) => {
    return (
        <div className={css(playerItemsContainerStyle)}>
            <Header headerTitle={headerMocks.playerItemsHeaderTitle} />
            {getContentToRender(props.playerItemsList)}
            <PlayerItemsContainerFooter onClearPlayerItemList={props.onClearPlayerItemList} playerItemsList={props.playerItemsList} />
        </div>
    );
};
