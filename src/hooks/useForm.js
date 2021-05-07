import { useState } from 'react';
const useForm = ( initialState = {} ) =>{
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ( { target } ) =>{
        // console.log(e.target.name);
        // console.log(e.target.value);

        setValues({
            ...values,
            [ target.name ]: target.value
        })
    } 

    return [ values , handleInputChange, reset ];
    
}

export default useForm;