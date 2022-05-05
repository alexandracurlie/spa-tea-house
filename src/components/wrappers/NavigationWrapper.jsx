import React, {useCallback} from "react";
import {useHistory} from "react-router-dom";

export const NavigationWrapper = (Component) => ({path, ...props}) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleClick = useCallback(() => {
    if (path) {
      history.push(path);
    } else {
      history.goBack();
    }
  }, [history, path]);

  return <Component {...props} onClick={handleClick} />;
}

