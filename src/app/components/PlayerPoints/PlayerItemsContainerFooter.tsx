import * as React from 'react';
// import { css } from 'react-emotion';
import { playerItemsContainerFooterStyle } from 'app/components/PlayerPoints/playerItems.styles';

import {
    PlayerItemsList,
    calculateTotalItemScore,
    calculateItemBonus
} from 'app/components/PlayerPoints/PlayerItemsList';
import { css } from 'react-emotion';
import { compose, withProps } from 'recompose';

export const PlayerItemsContainerFooterTemplate = (props) => {
    return (
        <div className={css(playerItemsContainerFooterStyle)}>
            <div>Bonuses {props.totalBonusScore}</div>
            <div>Total {props.totalScore}</div>

        </div>
    );
};

export const PlayerItemsContainerFooter = compose(
    withProps((props) => ({
        totalScore: props.playerItemsList.reduce((prevSum, item2) => prevSum + calculateTotalItemScore(item2), 0)
    })),
    withProps((props) => ({
        totalBonusScore: props.playerItemsList.reduce((item1, item2) => {
            const bonusScore = calculateItemBonus(item2).bonusScore;
            if (bonusScore > 0) {
                return item1 + (bonusScore - (item2.bonusConditions.challenge * item2.score));
            }
            return item1;
        }, 0)
    }))
)(PlayerItemsContainerFooterTemplate);
