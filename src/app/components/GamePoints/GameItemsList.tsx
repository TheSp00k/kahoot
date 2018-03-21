import * as React from 'react';
import { css } from 'react-emotion';
import { gameItemStyle, gameItemsListStyle, gameItemsListChildStyle } from './gameItems.styles';
import { IGameItemsListProps, IGameItemProps } from 'app/components/types';

export const GameItemsList = (props: IGameItemsListProps) => {
    return (
        <div className={css(gameItemsListStyle)}>
            <div className={css(gameItemsListChildStyle)}>
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
        </div>
    );
};
