import * as React from 'react';
// import { css } from 'react-emotion';
import { playerItemsContainerFooterStyle } from 'app/components/PlayerPoints/playerItems.styles';

import { PlayerItemsList, calculateTotalItemScore, calculateItemBonus } from 'app/components/PlayerPoints/PlayerItemsList';
import { css } from 'react-emotion';
import { compose, withProps } from 'recompose';



export const PlayerItemsContainerFooterTemplate = (props) => {
    console.log(props.totalScore);
    return (
        <div className={css(playerItemsContainerFooterStyle)}>
            <div>Bonuses {props.totalBonusScore}</div>
            <div>Total {props.totalScore}</div>

        </div>
    );
};

export const PlayerItemsContainerFooter = compose(
    withProps((props) => ({
        totalScore: props.playerItemsList.reduce((item1, item2) => item1 + calculateTotalItemScore(item2), 0)
    })),
    withProps((props) => ({
        totalBonusScore: props.playerItemsList.reduce((item1, item2) => {
            const bonusScore = calculateItemBonus(item2).bonusScore;
            if (bonusScore > 0) {
                return item1 + (bonusScore - (item2.bonusConditions.challenge * item2.score))
            }
        }, 0)
    }))
)(PlayerItemsContainerFooterTemplate);
