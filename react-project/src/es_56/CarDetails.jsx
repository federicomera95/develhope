import { useRef } from "react"


const CarDetails = () => {
    
    const formRef = useRef({model: 'Fiat', year: 2015, color: 'White'});
    
    const handleChangeForm = (e) => {
        e.preventDefault()
        formRef.current.reset();
    }

    return (
        <form ref={formRef} onChange={handleChangeForm}>
            <input name='model' defaultValue={formRef.current.model}/>
            <input name='year' defaultValue={formRef.current.year}/>
            <input name='color' defaultValue={formRef.current.color}/>
            <button type='submit'>Save</button>
            <button type='reset'>Reset</button>
        </form>
    );
}

export default CarDetails;