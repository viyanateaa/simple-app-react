import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {Row, Col, Button} from 'react-bootstrap';;

class AddButton extends Component{
  render(){
    return(
      <div>
        <Row>
               <Col xs={10}></Col>
               <Col xs={2}>
                 <Button bsStyle="danger" bsSize="large">
                   <FontAwesome name='plus' />
                 </Button>
               </Col>
             </Row>
      </div>
    );
  }
}
export default AddButton;
