import React, { ReactNode } from 'react';

interface CenteredViewProps {
    children: ReactNode;
    maxWidth?: number;
}

const CenteredView: React.FC<CenteredViewProps> = ({ children, maxWidth = 800 }) => {
    return (
        <div style={{ maxWidth, margin: '0 auto', padding: '20px', textAlign: 'center' , height: '100vh'}}>
            {children}
        </div>
    );
};

export default CenteredView;
