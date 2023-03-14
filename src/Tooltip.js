import React from 'react';
class Tooltip extends React.Component {
    classn=()=>{
        return `${this.props.position}`;

    }
    render(){
        return (
           <div className={`${this.classn()}`}>
              {/* Thanks for Hovering on "{this.props.position}" position! I'm a tooltip!!  */}
              Thanks for Hovering! I'm a tooltip!! 
           </div>
        );
    }
}

export default Tooltip;