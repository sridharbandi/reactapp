import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {withStyles} from '@material-ui/core/styles';
import Aux from "../../hoc/Aux";


const styles = theme => ({
    textField: {
        color: 'white',
    }
});

class Content extends Component {
    state = {
        text: '',
    };

    textChangeHandler = (event) => {
        this.setState({text: event.target.value});
    };

    render() {
        return (
            <Aux>
                <Grid container justify='center' spacing={0}>
                    <Grid item xs={10} sm={4}>
                        <form noValidate autoComplete="off">
                            <TextField
                                InputProps={{
                                    className: this.props.classes.textField
                                }}
                                id="idtext"
                                label="Text"
                                type="text"
                                margin="normal"
                                value={this.state.text}
                                onChange={this.textChangeHandler}
                                required
                                fullWidth
                                error
                            />
                        </form>
                    </Grid>
                </Grid>
            </Aux>
        )
    }
}
export default (withStyles(styles)(Content));