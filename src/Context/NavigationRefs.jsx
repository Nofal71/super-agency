import { createContext, useRef } from "react";

export const ScrollContext = createContext()

export const ScrollProvider = ({ children }) => {

    const services = useRef(null)

    const refs = {
        services: services
    }

    return (
        <ScrollContext.Provider value={{ refs }}>
            {children}
        </ScrollContext.Provider>
    )

}