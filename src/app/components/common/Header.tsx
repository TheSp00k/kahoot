import * as React from 'react';
import { css } from 'react-emotion';
import { headerStyle } from 'app/components/common/header.styles';

interface IHeaderProps {
    headerTitle: string;
}

export const Header = (props: IHeaderProps) => {
    return (
        <div className={css(headerStyle)}>{props.headerTitle}</div>
    );
};
