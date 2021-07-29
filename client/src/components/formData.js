import React from "react";
import axios from "axios";
import { Link} from "react-router-dom";

export class FormData extends React.Component {
    constructor(props){
        super(props);        
        this.state={
            persons: []
        } 
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        axios.get('http://localhost:8800',)
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
            console.log(this.state.persons)
        })
    }

    render() {
        let serilNo = 1;
        return(
            <div>
                <Link to="./"><button>Add another response</button></Link>
                <Link to="../"><button>Go to Home</button></Link>
            <table>
                <thead>
                    <tr>
                        <th>S. No</th>
                        <th>Firstname</th>
                        <th>Email</th> 
                        <th>phone</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.persons.map(( element ) =>
                                            <tr key={element._id}>
                                            <td>{serilNo++}</td>
                                            <td>{element.name}</td>
                                            <td>{element.email}</td>
                                            <td>{element.phoneNumber}</td>
                                            <td>{element.age}</td>
                                        </tr>     
                    )}
                </tbody>
            </table>
            </div>       
        )
    }
}