import React from 'react';

//This is higher order component which can serve anothe UI component
//UI Component | Stateless
const DynamicColor = (WrappedComponent) => {
    const colors = ['red', 'pink', 'green', 'blue', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const className = randomColor + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        );
    }
}

export default DynamicColor;