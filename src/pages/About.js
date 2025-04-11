import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  // Sample team data
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Medical Director',
      image: 'https://randomuser.me/api/portraits/women/23.jpg',
      bio: 'Dr. Johnson brings over 15 years of experience in geriatric care and home health services. She oversees our clinical standards and training programs.'
    },
    {
      id: 2,
      name: 'Michael Williams',
      role: 'Head of Nursing Staff',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'With extensive experience in critical care nursing, Michael ensures our nursing team delivers exceptional care with compassion and professionalism.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Client Services Manager',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      bio: 'Emily coordinates our service delivery, ensuring our clients receive personalized care plans that address their unique needs and preferences.'
    },
    {
      id: 4,
      name: 'David Chen',
      role: 'Training Coordinator',
      image: 'https://randomuser.me/api/portraits/men/53.jpg',
      bio: 'David leads our comprehensive training programs, ensuring our nursing assistants stay updated with the latest healthcare practices and techniques.'
    }
  ];

  return (
    <>
      {/* About Hero Section */}
      <section className="bg-primary text-white py-5">
        <Container>
          <Row className="py-4">
            <Col lg={8} className="mx-auto text-center">
              <h1 className="fw-bold mb-4">About Nurses & Companions</h1>
              <p className="lead">Dedicated to providing exceptional nursing assistant services with compassion, dignity, and professionalism since 2010.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">Our Story</h2>
              <p>Nurses & Companions was founded in 2010 by a group of healthcare professionals who recognized the growing need for quality in-home nursing assistant services. What began as a small team serving a local community has grown into a trusted healthcare provider with a reputation for excellence.</p>
              <p>Over the years, we've remained committed to our founding principles: personalized care, professional excellence, and genuine compassion. We understand that each client has unique needs, and we work diligently to provide tailored care that supports health, independence, and quality of life.</p>
              <p>Today, Nurses & Companions continues to expand our services while maintaining the personal touch and attention to detail that has defined our care from the beginning.</p>
            </Col>
            <Col lg={6}>
              <div className="rounded shadow-sm overflow-hidden h-100">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Nursing team" className="img-fluid w-100 h-100 object-fit-cover" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission and Values Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="fw-bold mb-4">Our Mission & Values</h2>
              <p className="lead">Guiding principles that drive our commitment to exceptional care</p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h3 className="fw-bold mb-3">Our Mission</h3>
                <p>To enhance the quality of life for our clients by providing compassionate, professional nursing assistant services that promote dignity, independence, and well-being in the comfort of their homes.</p>
                <p className="mb-0">We strive to be a trusted partner in healthcare, delivering personalized support that addresses the unique needs of each individual we serve.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h3 className="fw-bold mb-3">Our Core Values</h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <div className="d-flex">
                      <div className="me-3"><i className="fas fa-heart text-primary fa-2x"></i></div>
                      <div>
                        <h5 className="fw-bold">Compassion</h5>
                        <p>We provide care with genuine empathy, kindness, and respect for each client's dignity.</p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex">
                      <div className="me-3"><i className="fas fa-trophy text-primary fa-2x"></i></div>
                      <div>
                        <h5 className="fw-bold">Excellence</h5>
                        <p>We uphold the highest standards of professional care and continuous improvement.</p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-3">
                    <div className="d-flex">
                      <div className="me-3"><i className="fas fa-user-shield text-primary fa-2x"></i></div>
                      <div>
                        <h5 className="fw-bold">Integrity</h5>
                        <p>We conduct ourselves with honesty, reliability, and ethical practice in all interactions.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <div className="me-3"><i className="fas fa-hands-helping text-primary fa-2x"></i></div>
                      <div>
                        <h5 className="fw-bold">Personalization</h5>
                        <p className="mb-0">We recognize the individuality of each client and tailor our services accordingly.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Team Section */}
      <section className="section-padding">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold">Our Leadership Team</h2>
              <p className="lead">Experienced professionals dedicated to excellence in healthcare</p>
            </Col>
          </Row>
          <Row>
            {teamMembers.map(member => (
              <Col lg={3} md={6} key={member.id} className="mb-4">
                <Card className="border-0 shadow-sm h-100">
                  <Card.Img variant="top" src={member.image} alt={member.name} />
                  <Card.Body className="text-center">
                    <Card.Title className="fw-bold mb-1">{member.name}</Card.Title>
                    <p className="text-primary mb-3">{member.role}</p>
                    <Card.Text>{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-primary text-white">
        <Container>
          <Row className="text-center">
            <Col md={3} className="mb-4 mb-md-0">
              <div>
                <h2 className="fw-bold display-4 mb-2">12+</h2>
                <p className="fs-5 mb-0">Years of Service</p>
              </div>
            </Col>
            <Col md={3} className="mb-4 mb-md-0">
              <div>
                <h2 className="fw-bold display-4 mb-2">5K+</h2>
                <p className="fs-5 mb-0">Clients Served</p>
              </div>
            </Col>
            <Col md={3} className="mb-4 mb-md-0">
              <div>
                <h2 className="fw-bold display-4 mb-2">100+</h2>
                <p className="fs-5 mb-0">Qualified Nurses</p>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <h2 className="fw-bold display-4 mb-2">24/7</h2>
                <p className="fs-5 mb-0">Care Availability</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About; 