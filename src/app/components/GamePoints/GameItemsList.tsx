import * as React from 'react';
import { css } from 'react-emotion';
import { gameItemStyle, gameItemsListStyle } from './gameItems.styles';

interface IGameItemProps {
    title: string;
    style?: any;
    score: number;
}

interface IGameItemsListProps {
    gameItemsList: Array<IGameItemProps>;
    onGameItemSelect: (gameItem: IGameItemProps) => void;
}

export const GameItemsList = (props: IGameItemsListProps) => {
    return (
        <div className={css(gameItemsListStyle)}>
            {
                props.gameItemsList.map((gameItem: IGameItemProps, index: number) => {
                    return (
                        <div
                            onClick={() => props.onGameItemSelect(gameItem)}
                            className={css(gameItem.style, gameItemStyle)}
                            key={index}>
                            {gameItem.title}
                        </div>
                    );
                })
            }
        </div>
    );
};
