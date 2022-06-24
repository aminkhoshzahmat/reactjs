import React from 'react';

/**
 *  <React.StrictMode> be hame in method haye UNSAFE gir mide,
 *  va in warning ha faghat vase development hast, na build.
 *
 *  <React.StrictMode> harja deletun bekhad mitunid estefade konid, na serfan tu root.
 */
class LegacyLifeCycle extends React.Component
{
    /**
     * ina dge mansukh shodan,
     * component mikhad mount beshe
     */
    UNSAFE_componentWillMount() {
    }

    /**
     * component mikhad udpate beshe
     */
    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
    }

    /**
     * hamun getDerivedFromProps hast.
     */
    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    }

    render()
    {
        return (
            <div>

            </div>
        );
    }
}

export default LegacyLifeCycle;
