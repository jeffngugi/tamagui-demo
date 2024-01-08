import {useContext} from 'react'
import { AppThemeContext } from '../AppThemeContext'

export const useAppThemeContext = () =>{
    const context = useContext(AppThemeContext)

    if(context){
        return context
    }

    throw new Error("Use this hook in CalendarProvider scope");
    
}