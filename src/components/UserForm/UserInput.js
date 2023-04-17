import React, {useState, useRef} from 'react';
import './UserInput.css';
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card';
import Modal from '../UI/Modal/Modal';

export default function UserInput(props){

    const enteredName = useRef("");
    const enteredAge = useRef("");

    // const [enteredName, setName] = useState("");
    // const [enteredAge, setAge] = useState("");
    const [error, setError] = useState(null);

    // const nameChangeHandler = (event) => {
    //     setName(event.target.value);
    // }
    
    // const ageChangeHandler = (event) => {
    //     setAge(event.target.value);
    // }

    const submitHandler = (event) => {
        event.preventDefault();

        const nameValue = enteredName.current.value;
        const ageValue = enteredAge.current.value;

        if (nameValue.trim().length === 0 || ageValue.trim().length === 0){
            setError({title: "Erro de input", message: "Um ou mais campos do formulário estão em branco."});
            return;
        }

        if (+ageValue < 0){
            setError({title: "Idade inválida", message:"A idade de ser maior que 0."})
            return;
        }
        
        const enteredUser = {
            id: Math.random().toString(),
            name: nameValue, 
            age: ageValue
        };

        props.onUserAdd(enteredUser);

        enteredName.current.value = "";
        enteredAge.current.value = "";
    }

    const closeModalHandler = () => {
        setError(null);
    };

    return(
        <>
            {error && <Modal title={error.title} message={error.message} onClose={closeModalHandler}/>}
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="username">Nome </label>
                        <input
                            id="username"
                            type="text"
                            // value={enteredName}
                            // onChange={nameChangeHandler}
                            ref={enteredName}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="age">Idade (em anos) </label>
                        <input
                            id="age"
                            type="number"
                            // value={enteredAge}
                            // onChange={ageChangeHandler}
                            ref={enteredAge}
                        />
                    </div>
                    <div className="actions">
                        <Button type="submit">Add User</Button>
                    </div>
                </form>
            </Card>
        </>
    );
}