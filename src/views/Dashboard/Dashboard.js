import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";

import avatar from "assets/img/gryffindor.png";
import avatar2 from "assets/img/hufflepuff.png";
import avatar3 from "assets/img/ravenclaw.png";
import avatar4 from "assets/img/slytherin.png";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Sign Up</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={2} sm={2} md={2}>
                  <Card profile>
                    <CardAvatar profile>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={avatar} alt="..." />
                      </a>
                    </CardAvatar>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Full Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={2} sm={2} md={2}>
                  <Card profile>
                    <CardAvatar profile>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={avatar2} alt="..." />
                      </a>
                    </CardAvatar>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={2} sm={2} md={2}>
                  <Card profile>
                    <CardAvatar profile>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={avatar3} alt="..." />
                      </a>
                    </CardAvatar>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={2} sm={2} md={2}>
                  <Card profile>
                    <CardAvatar profile>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={avatar4} alt="..." />
                      </a>
                    </CardAvatar>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Confirm Password"
                    id="confirm-password"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <GridItem xs={20} sm={22} md={6} spacing={12}>
              <CardFooter>
                <Button color="primary">Sign Up</Button>
              </CardFooter>
            </GridItem>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
