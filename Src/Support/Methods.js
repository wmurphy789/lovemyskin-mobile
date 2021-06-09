// place where we will store common methods for all app

import * as React from "react";
const navigate = (navigation, path) => {
  navigation.navigate(path);
};
const goBack = (navigation) => {
  navigation.goBack();
};
export default Methods = {
  navigate,
  goBack,
};

export const navigationRef = React.createRef();
