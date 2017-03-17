import * as React from 'react';
export const Icon: React.SFC<any> = (props: IProps) => {

    const containerClass = props.containerClassName;

    return (
        <div
            id={props.id}
            className={containerClass}
            style={props.containerStyle}
            onClick={props.onClick}
            onMouseOver={props.onMouseOver}
            onMouseOut={props.onMouseOut}>
            <svg
                id={props.id && props.id + '_svg'}
                className={props.className}
                style={{ ...props.style }}
                width={props.width || 35}
                height={props.height || 35}
                viewBox={`0 0 ${props.boxWidth || 35} ${props.boxHeight || 35}`}
                strokeLinecap='round'
                strokeLinejoin='round'
            >
                {props.children}
            </svg>
        </div>
    )
}