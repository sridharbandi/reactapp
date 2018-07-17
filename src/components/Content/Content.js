import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {withStyles} from '@material-ui/core/styles';
import Aux from "../../hoc/Aux";


const styles = theme => ({
    textColor: {
        color: 'white',
    }
});

class Content extends Component {
    state = {
        text: '',
        textentered: ''
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
                                    className: this.props.classes.textColor
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
                            <Button
                                id="idbutton"
                                variant="raised"
                                fullWidth
                                color="secondary">
                                Get Text
                            </Button>
                        </form>
                        <br />
                        <Typography variant="body1" component="p" className={this.props.classes.textColor}>
                            Text Entered: {this.state.textentered}
                        </Typography>
                    </Grid>
                </Grid>
            </Aux>
        )
    }
}
export default (withStyles(styles)(Content));