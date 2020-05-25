import React from "react";
import s from './FormsControl.module.css'

const CreateElement = ({input,meta,element,...props}) =>{
    return(
        <div className={s.formControl}>
            {React.createElement(element,{...props,...input})}
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}

export const  Textarea = (props) =>{
    return(
        <CreateElement {...props} element={'textarea'}/>
        )
}
export const  Input = (props) =>{
    return(
        <CreateElement {...props} element={'input'}/>
    )
}





