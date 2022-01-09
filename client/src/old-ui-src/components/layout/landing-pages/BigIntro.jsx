import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import { Button } from "@material-ui/core";
import "../../../../assets/css/big-intro.css";
import "../../../../assets/css/big-intro.mobile.css";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const StyledButtonLink = styled(AnchorLink)`
  &:hover {
    text-decoration: none;
  }
`;
const DiscoverButtonLink = (props) => {
  return (
    <Fragment>
      <StyledButtonLink {...props} />
    </Fragment>
  );
};

const Content = () => {
  return (
    <div className="context  ">
      <Row style={{ margin: 0 }}>
        <Col lg={{ size: 6, offset: 1 }} md={12} className="frosted-glass">
          <h1>
            One system, <br /> One connection
          </h1>
          <p>Enterprise Business Capabilities (EBC) Software</p>
          <DiscoverButtonLink href="#about" style={{}}>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={"mr-2"}
            >
              Discover More
            </Button>
          </DiscoverButtonLink>
        </Col>
        <Col md={{ size: "auto", offset: 1 }}></Col>
      </Row>
    </div>
  );
};

const BigIntro = () => {
  const boxes = () => {
    let array = [],
      numberOfBox = 15;
    for (let i = 0; i < numberOfBox; i++) array.push(i);
    return array;
  };

  const styles = {
    container: {
      position: "relative",
      top: 0,
      minHeight: "50vh",
    },
  };

  return (
    <div style={styles.container}>
      <Content />
      <div className="area">
        <ul className="circles">
          {boxes().map((i) => (
            <li key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BigIntro;
