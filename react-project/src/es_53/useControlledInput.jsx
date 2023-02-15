import { useState } from "react";


const useControlledInput = () => {

    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const handleChangeInput = ({name,value}) => {
        setData((data)=> { 
            return {
                ...data,
                [name]: value
            }
        }
       )
        
    }

    return {
        data: data,
        onhandleChangeInput: handleChangeInput
    }
}

export default useControlledInput;