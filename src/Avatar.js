import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';


class Avatar extends Component{
  render(){
    return(
      <div>
         <Row>
           <Col xs={10}></Col>
                <Col xs={2}>
                  <Image src="https://cdn-images-1.medium.com/fit/c/200/200/1*NcQplbqMre6a85bapcNQtg.jpeg" thumbnail circle />
          </Col>
         </Row>
      </div>
    );
  }

}

 export default Avatar;  
