import * as React from 'react';

interface IHeaderProps {
    headerTitle: string;
}

export const Header = (props: IHeaderProps) => {
    return (
        <div>{props.headerTitle}</div>
    );
};
