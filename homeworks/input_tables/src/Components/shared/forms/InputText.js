import {Component} from "react";

export default class InputText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditMode: this.props.mode,
            isValid: true,
            textValue: this.props.value || 'hello',
        }
    }


    componentDidMount() {
        // to test error boundary
        // throw new Error('whoops!')
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
                    style={{
                        width: '200px',
                        display: this.state.isEditMode ? 'inline-block' : 'none'
                    }}
                    // value={this.props.value}
                    // defaultValue={this.props.value}
                    onChange={this.getInputValue}
                    onKeyDown={this.commitInputChanges.bind(this)}
                />
                <span
                    style={{
                        width: '200px',
                        display: this.state.isEditMode ? 'none' : 'inline-block'
                    }}
                    onClick={() => this.toggleEditMode()}
                >
                    {this.state.textValue !== '' ? this.state.textValue : 'No text to show'}
                </span>
                <button style={{cursor: 'pointer', border: '0', fontSize:'20px'}}
                   onClick={() => this.toggleEditMode()}>
                    {this.state.isEditMode ? '💾' : '📝'}
                </button>
            </div>
        );
    }
};
