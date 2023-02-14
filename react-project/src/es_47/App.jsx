import Login from "./Login";

const App = ()=> {

    const onLogin = () => {
        console.log('login')
    }


    return <Login onLogin={onLogin}/>
}

export default App;