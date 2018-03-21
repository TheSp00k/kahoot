import * as React from 'react';
import { playerItemsContainerStyle } from 'app/components/PlayerPoints/playerItems.styles';
import { headerMocks } from 'app/app.mocks';
import { Header } from 'app/components/common/Header';
import { PlayerItemsList } from 'app/components/PlayerPoints/PlayerItemsList';
import { css } from 'react-emotion';
import { PlayerItemsContainerFooter } from 'app/components/PlayerPoints/PlayerItemsContainerFooter';


const getContentToRender = (playerItems) => {
    if (playerItems && playerItems.length > 0) {
        return <PlayerItemsList playerItems={playerItems} />
    }
    return <div>You do not have any items</div>
}

export const PlayerItemsContainer = (props) => {
    return (
        <div className={css(playerItemsContainerStyle)}>
            <Header headerTitle={headerMocks.playerItemsHeaderTitle} />
            {getContentToRender(props.playerItemsList)}
            <PlayerItemsContainerFooter playerItemsList={props.playerItemsList} />
        </div>
    );
};
