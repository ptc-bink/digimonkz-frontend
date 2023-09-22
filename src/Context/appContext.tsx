import React, { useState } from 'react';

const AppContext = React.createContext([{}, () => { }]);

const AppContextProvider = (props: any) => {

    const [state, setState] = useState({
        ownerFlag: 1,
    });
    
    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContextProvider };