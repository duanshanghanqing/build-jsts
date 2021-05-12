import React, { FC, ReactElement, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import './index.css';
import './index.less';
import './index.scss';

export type size = 'lg' | 'ml' | 'sm';

// Omit<attribute,Properties to ignore>
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean,
    size?: size,
    prepand?: string | ReactElement,
    append?: string | ReactElement,
}

export const Input: FC<InputProps> = (props) => {
    const classes = classNames('vik-input', {
        'vik-disabled': false
    });
    return (
        <div className={classes}>
            <input />
        </div>
    );
}

export default Input;