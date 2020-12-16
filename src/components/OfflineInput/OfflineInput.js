import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col} from "react-bootstrap";
import classes from "./OfflineInput.module.css"
import {initState} from "../../store/actions/initState";
import {inputHandler, saveOfflineToBase} from "../../store/actions/offlineInput";


class OfflineInput extends Component {

    inputChange = () => {
        // TODO Убрать лоадер со страниццы в режими оффлайн
        const key = localStorage.getItem('key')
        const save = JSON.parse(localStorage.getItem('save'))
        if (key != null) {
            this.props.saveOfflineToBase(key, save)
        }

        if (this.props.offline === false && key === null) {
            this.props.inputHandler()
        } else if (this.props.offline === true && key === null) {
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
        inputHandler: () => dispatch(inputHandler()),
        initState: () => dispatch(initState()),
        saveOfflineToBase: (key, save) => dispatch(saveOfflineToBase(key, save))
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(OfflineInput);