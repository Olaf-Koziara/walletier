import React from "react";
import { VictoryTooltip } from "victory";

class CustomTooltip extends React.Component {
  static defaultEvents = VictoryTooltip.defaultEvents;
  render() {
    const { x, y } = this.props;
    const rotation = `rotate(45 ${x} ${y})`;
    return (
      <g transform={rotation}>
        <VictoryTooltip {...this.props} renderInPortal={false} />
      </g>
    );
  }
}
export default CustomTooltip;
