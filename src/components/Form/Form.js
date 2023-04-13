import React from 'react';
import Button from '../Button/Button';

function Form({ onSubmit, buttonText, error, children }) {
    return (
        <form onSubmit={onSubmit}>
            {children}
            {error && <div className="error">{error}</div>}
            <Button label={buttonText} />
        </form>
    );
}

export default Form;
