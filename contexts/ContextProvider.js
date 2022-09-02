import React, { useState, useEffect, useContext, createContext } from 'react'

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const _api = "http://192.168.100.14/root/api/rva_parking/test.php";
    //const api = "https://tdlsoft.site/rva_statistique/api/post.php";
    //var api = "https://fin-vat.com/rva_statistique/api/post.php";
    const [hasLogged, setHasLogged] = useState(null);
    const [nomUser, setNomUser] = useState("Diwata");
    const [connected, setConnected] = useState(true);
    const [api, setApi] = useState(_api);
    //const [api, setApi] = useState(api);
    useEffect(() => {

    }, [])

    return (
        <StateContext.Provider value={{ hasLogged, setHasLogged, nomUser, setNomUser, api,connected, setConnected }}>
            {children}
        </StateContext.Provider>
    );

}
export const useStateContext = () => useContext(StateContext);
