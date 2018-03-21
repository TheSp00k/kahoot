import * as React from 'react';
import { css } from 'react-emotion';
import { playerItemStyle, playerTableListHeaderItemStyle, playerTableListStyle } from 'app/components/PlayerPoints/playerItems.styles';
import { compose } from 'recompose';


export const calculateTotalItemScore = (item) => {
    let bonusInfo = calculateItemBonus(item);
    let quantity = bonusInfo.quantity;
    let totalScore = bonusInfo.bonusScore;
    return totalScore + quantity * item.score;
}

export const calculateItemBonus = (item) => {
    const result = {
        bonusScore: 0,
        quantity: item.qty
    };
    if (item.bonusConditions && result.quantity >= item.bonusConditions.challenge) {
        result.bonusScore = item.bonusConditions.reward;
        result.quantity = result.quantity - item.bonusConditions.challenge;
    }
    return result;
}

export const PlayerItemsList = (props) => {
    console.log(props);
    return (
        <div className={css(playerTableListStyle)}>
            <table>
                <thead>
                    <tr>
                        <th className={css(playerTableListHeaderItemStyle)}>Item</th>
                        <th className={css(playerTableListHeaderItemStyle)}>Qty</th>
                        <th className={css(playerTableListHeaderItemStyle)}>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.playerItems.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td><div className={css(item.style, playerItemStyle)}>{item.title}</div></td>
                                    <td>{item.qty}</td>
                                    <td>{calculateTotalItemScore(item)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
