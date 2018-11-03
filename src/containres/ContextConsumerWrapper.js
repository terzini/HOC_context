import React from "react";

const ContextConsumerWrapper = ( WrappedComponent, context) => {
    return class extends React.Component{
        render(){
           return (
           <context.Consumer>{
                (value) => <WrappedComponent {...this.props} action={value.action}/>
               }
           </context.Consumer>
           )}
    }
}

export default ContextConsumerWrapper;