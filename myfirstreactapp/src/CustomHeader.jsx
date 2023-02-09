import CustomNav from "./CustomNav";
import React from "react";
import Welcome from "./Welcome";

class CustomHeader extends React.Component {
  render() {
    return (
      <>
        <CustomNav bgColor={this.props.bgColor} />
      </>
    );
  }
}
export default CustomHeader;
