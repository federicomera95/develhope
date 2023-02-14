import React from "react";
import { Container } from "./Container";


export class App extends React.Component {

    

    render() {
        return (
            <div>
              <Container title={(<h1>My title</h1>)}>
                    <h1>My children</h1>
              </Container>
            </div>
        );
    }
}