import React, { PureComponent } from "react";
import View from "../modules/converter/components";
import { Root } from "../modules/shared/components";

class App extends PureComponent {
  render() {
    return (
      <Root>
        <View />
      </Root>
    );
  }
}

export default App;
