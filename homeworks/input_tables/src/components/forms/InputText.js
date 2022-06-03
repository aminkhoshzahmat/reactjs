import {Component} from "react";

export default class InputText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditMode: true || this.props.mode,
            isValid: true,
            textValue: this.props.value || '',
        }
    }


    toggleEditMode() {
        this.setState({isEditMode: !this.state.isEditMode})
    }

    commitInputChanges(event) {
        if (event.key === 'Enter') {
            this.toggleEditMode()
        }
        // ...
    }

    getInputValue = (event) => {
        const value = event.target.value
        this.setState({textValue: value})
    }

    render() {
        return (
            <div>
                <input
                    style={{float: 'left', display: this.state.isEditMode ? 'block' : 'none'}}
                    // value={this.props.value}
                    // defaultValue={this.props.value}
                    onChange={this.getInputValue}
                    onKeyDown={this.commitInputChanges.bind(this)}
                />
                <span style={{display: this.state.isEditMode ? 'none' : 'inline-block'}}>
                    {this.state.textValue !== '' ? this.state.textValue : 'No text to show'}
                </span>
                <button onClick={() => this.toggleEditMode()}>
                    {this.state.isEditMode ? 'Save' : 'Edit'}
                </button>
            </div>
        );
    }
};
