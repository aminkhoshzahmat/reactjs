import React, {Component} from 'react';

class ForceUpdate extends React.Component
{

    /**
     * Hata tu should update hame bekhayd nemitunid jolo force update beigirid.
     */
    shouldComponentUpdate() {
        return false;
    }

    /**
     * force update dge niaz be state nadare, khodesh updat mikokne
     * @returns {JSX.Element}
     */
    render()
    {
        console.log('rerender')
        return (
            <div>
                <p>Random: {Math.random()}</p>
                <button onClick={() => this.forceUpdate()}>Generate</button>
            </div>
        );
    }
}

export default ForceUpdate;
