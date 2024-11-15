import React from 'react';

const SubstringText = ({ text , length }) => { 
    
    return (
        <>
            <p>
                {
                    text.length > length ? `${text.substring(0,length)}...` : text
                }
            </p>
        </>
    );
};

export default SubstringText;