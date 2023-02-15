import useControlledInput from "./useControlledInput";


const App = ()=> {

    const {data, onhandleChangeInput} = useControlledInput();


    return (
        <div>
            <input name='username' value={data.username} onChange={({target})=>onhandleChangeInput(target)}/>
            <input name='password' type='password' value={data.password} onChange={({target})=>onhandleChangeInput(target)}/>
        </div>
    );
}

export default App;