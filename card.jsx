import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';






const Cart=()=>{
return(
  <>
  <div className='card'>
  <h2>EDUCATION AND CERTIFICATION</h2>


      <Row>
        <Col md={4}>
        <Card>
        <Card.Body>
        <Card.Title>SCHOOL</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">GURUKUL SENIOR SECONDARY <br/> SCHOOL REWA MP</Card.Subtitle>
        <Card.Text>
        BOARD-CBSC
        </Card.Text>
        <Card.Text>
         Complited 10th from CBSC with -79%
        </Card.Text>
        <Card.Text>
         Complited 12th from CBSC with -73%
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
        
        
        </Col> 


        <Col md={4} className='colloge'>
        <Card>
        <Card.Body>
        <Card.Title>GRADUATION</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">ORIENTAL INSTITUTE OF <br/> SCIENCE AND TECNOLOGY BHOPAL</Card.Subtitle>
        <Card.Text>
         UNIVERSITY-RGPV
        </Card.Text>
        <Card.Text>
         SGPA-7.8
        </Card.Text>
        <Card.Text>
         CGPA-7.4
        </Card.Text>
        
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
        
        
        </Col>


        <Col md={4} >
        <Card>
        <Card.Body>
        <Card.Title>CERTIFICATION</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">1-completed internship on web development at codtech<br/>2-completed internship on python development at codsoft</Card.Subtitle>
        <Card.Text>
        completed internship on web development at OIST BHOPAL
        </Card.Text>
        <Card.Text>
        completed certification on C++ at Exellence Bhopal
        </Card.Text>
        <Card.Text>
        completed certification on full stack python at Cybrom 
        </Card.Text>
        
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
        
        
        </Col>
      </Row>
   
    </div>
  </>
)
}
export default Cart