import React, { ReactNode } from 'react';

interface CenteredViewProps {
    children: ReactNode;
    maxWidth?: number;
    isHome?: boolean;
}

const CenteredView: React.FC<CenteredViewProps> = ({ children, maxWidth = 800, isHome = true }) => {

    const additionalStyles: React.CSSProperties = isHome ? {} : {
        backgroundImage: 'linear-gradient(to bottom, rgba(243, 253, 167, 0.33), rgba(0, 0, 0, 0))',
    };

    const containerStyles: React.CSSProperties = {
        maxWidth,
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        height: '100vh',
        ...additionalStyles,
    };

    return (
        <div style={containerStyles}>
            {children}
        </div>
    );
};

export default CenteredView;
