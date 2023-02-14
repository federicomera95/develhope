

const Number = ({number}) => {

    const sum = number.reduce((a,b) => { return a+b});

    return (
        <h1>la somma è {sum}</h1>
    );
};

export default Number;