import { createContext, useContext } from 'react';


export const DashboardContext = createContext<any | undefined>(undefined)

export function useUserContext(){
    const user = useContext(DashboardContext)
    if(user){
        return user
    }
    throw new Error("Use userContext must be used with dashboard context");
}