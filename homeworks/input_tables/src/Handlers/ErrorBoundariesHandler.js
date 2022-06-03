import {Component} from "react";

export class ErrorBoundariesHandler extends Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        if (this.state.hasError)
            return 'Something went wrong';
        return this.props.children;
    }
}
