import React  from 'react';
import {Button, Container} from "react-bootstrap";
import classes from "./CreateNewLot.module.css"
import {useLot} from "../../ContextLot/ContextLot";



const CreateNewLot = () => {
    const {newLot} = useLot()
    const {disabledButtonNewLot} = useLot()

    return (
        <Container className={classes.content}>
            <Button
                disabled={disabledButtonNewLot}
                onClick={newLot}
                variant='warning'
            >
                Новый жребий
            </Button>
        </Container>
    );

};

export default CreateNewLot;