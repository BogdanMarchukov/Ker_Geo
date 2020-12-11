import React, {Component} from 'react';
import {connect} from 'react-redux';
import {INPUT_OFFLINE} from "../../store/actions/actionTypes";
import {Container, Row, Col} from "react-bootstrap";
import classes from "./OfflineInput.module.css"
import {initState} from "../../store/actions/initState";


class OfflineInput extends Component {

    inputChange = () => {
        if (this.props.offline === false) {
            this.props.inputHandler()
        } else if (this.props.offline === true) {
            this.props.inputHandler()
            this.props.initState()
        }
    }

    render() {
        return (
            <Container className={classes.OfflineInput}>
                <Row className={"justify-content-center"}>
                    <Col lg={3} xs={7}>
                        <input
                            checked={this.props.offline}
                            type="checkbox"
                            onChange={this.inputChange}
                        />
                        <label>
                            Pежим Offline
                        </label>
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state) {

    return {
        offline: state.cls.offline
    }
}


function mapDispatchToProps(dispatch) {
    return {
        inputHandler: () => dispatch({type: INPUT_OFFLINE}),
        initState: () => dispatch(initState())
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(OfflineInput);