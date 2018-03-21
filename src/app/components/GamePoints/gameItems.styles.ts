import { defaultBorder } from "app/app.styles";

export const gameItemStyle = {
    display: 'inline-block',
    width: '60px',
    height: '40px',
    paddingTop: '20px',
    textAlign: 'center',
    cursor: 'pointer'
};

export const smallGameItemStyle = {
    width: '30px',
    height: '40px',
    padding: 0
};
export const gameItemsContainerStyle = {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    borderRight: defaultBorder
};

export const gameItemsListStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'wrap',
    padding: '10px'
};
