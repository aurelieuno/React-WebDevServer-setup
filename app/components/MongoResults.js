import React from "react";
import axios from "axios";

const ProductRow = (props) => (

      <div>
      {props.rows.map(el=>
          <tr>
            <td>{el.name}</td>
          </tr>
        )}
      </div>
    );



class MongoResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  componentDidMount() {
     axios.get("/data")
    .then (res => this.setState({data: res.data}).bind(this))
    .catch(error => console.log(error))
  }

  render() {

    const data = this.state.data;

    return (
      <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        {data &&
          <tbody><ProductRow rows={data}/></tbody>}
      </table>

      </div>
    );
  }
}

module.exports=  MongoResults;





