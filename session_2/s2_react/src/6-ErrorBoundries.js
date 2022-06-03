import React, {Component} from 'react';

/**
 * ba inkar bejaye inke kole app beterke, faghat mohavate error boundry moshkel mikhore, na birunesh
 * mitunim wrapper kole app konim, jaye inke hamechi sefid beshe, ye peyghame khata khub bedim.
 */
export default class Parent extends Component
{
    render()
    {
        return (
            <div>
                {/*<ErrorBoundries>5</ErrorBoundries>*/}
                Safe place to show
                <ErrorBoundries>
                    <Child/>
                </ErrorBoundries>
                {/*<Child/>*/}
            </div>
        );
    }
}

class ErrorBoundries extends Component
{
    state = {
        hasError: false
    }

    /**
     * error ke tu childred pish umade ro mide, na hata khodesh, faghat children, yani hata tu badane ErrorBoundries bashe. (recomend react hast)
     * ya
     * az method "componentDidCatch" estefade konim
     */
    static getDerivedStateFromError(error){
        console.log(error)
        return {
            hasError: true
        }
    }

    // componentDidCatch(error, errorInfo) {
    //     this.setState({hasError: error})
    // }

    render() {
        if (this.state.hasError) {
            return 'Oooooops, something went wrong.'
        }
        return this.props.children;
    }

}

class Child extends Component
{
    state = {
        counter: 0
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.counter === 5) {
            throw new Error('App crashed!!!')
        }
    }

    render()
    {
        return (
            <div>
                Child: {this.state.counter}
                <button onClick={() => this.setState({counter: this.state.counter + 1})}>+</button>
            </div>
        );
    }
}
