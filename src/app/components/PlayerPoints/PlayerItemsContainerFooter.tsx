import * as React from 'react';
import { playerItemsContainerFooterStyle, footerPartStyle, footerBonusPartStyle, newGameButton } from 'app/components/PlayerPoints/playerItems.styles';
import {
    calculateTotalItemScore,
    calculateItemBonus
} from 'app/components/PlayerPoints/PlayerItemsList';
import { css } from 'react-emotion';
import { compose, withProps } from 'recompose';
import { IPlayerItemProps } from 'app/components/types';

interface IPlayerItemsContainerFooterTemplate {
    totalBonusScore?: number;
    totalScore?: number;
    onClearPlayerItemList?: () => () => void;
};

export const PlayerItemsContainerFooterTemplate = (props: IPlayerItemsContainerFooterTemplate): JSX.Element => {
    return (
        <div className={css(playerItemsContainerFooterStyle)}>
            <div className={css(footerPartStyle, footerBonusPartStyle)}>Bonuses {props.totalBonusScore}</div>
            <div className={css(footerPartStyle)}>
                Total {props.totalScore}
                <button className={css(newGameButton)} onClick={props.onClearPlayerItemList}>New game</button>
            </div>
        </div>
    );
};

interface IPlayerItemsContainerFooterProps {
    playerItemsList: Array<IPlayerItemProps>;
    totalScore: number;
    totalBonusScore?: number;
    onClearPlayerItemList?: () => () => void;
}

export const PlayerItemsContainerFooter = compose<IPlayerItemsContainerFooterProps, any>(
    withProps<IPlayerItemsContainerFooterTemplate, IPlayerItemsContainerFooterProps>((props: IPlayerItemsContainerFooterProps) => ({
        totalScore: props.playerItemsList.reduce((prevSum, item2) => prevSum + calculateTotalItemScore(item2), 0)
    })),
    withProps<IPlayerItemsContainerFooterTemplate, IPlayerItemsContainerFooterProps>((props: IPlayerItemsContainerFooterProps) => ({
        totalBonusScore: props.playerItemsList.reduce((item1, item2) => {
            const bonusScore = calculateItemBonus(item2).bonusScore;
            const bonusConditionsItem2 = item2.bonusConditions;
            if (bonusScore > 0 && bonusConditionsItem2) {
                return item1 + (bonusScore - (bonusConditionsItem2.challenge * item2.score));
            }
            return item1;
        }, 0)
    }))
)(PlayerItemsContainerFooterTemplate);
