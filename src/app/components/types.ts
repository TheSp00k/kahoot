export interface IGameItemProps {
    id: number;
    title: string;
    style?: any;
    score: number;
    bonusConditions?: {
        challenge: number;
        reward: number;
    };
}

export interface IPlayerItemProps {
    id: number;
    title: string;
    style?: any;
    score: number;
    qty: number;
    bonusConditions?: {
        challenge: number;
        reward: number;
    };
}


export interface IGameItemsListProps {
    gameItemsList: Array<IGameItemProps>;
    onGameItemSelect: (gameItem: IGameItemProps) => void;
}