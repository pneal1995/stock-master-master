import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import _ from 'lodash';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import ExampleList from "../../components/examples"

class News extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: null
        };

    }

    render() {
        const { classes } = this.props;
        const value = this.state.value;

        return (
            <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose">
                <h4  className={classes.cardTitleWhite}>
                  Market News
            </h4>
              </CardHeader>
                            <CardBody>
                                <ExampleList/>
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div >
        );
    }
}
function mapStateToProps(state) {
    return {
        

    }
}
function mapDispatchToProps(dispatch) {

    return {
    
    }
}
News.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(connect(mapStateToProps, mapDispatchToProps)(News));