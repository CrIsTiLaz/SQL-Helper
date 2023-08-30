import { AppContext } from "../context/AppContext";
import { useContext } from "react";

/**
 * Accepts a selector function which can be used to select a value at any
 * level of the App context, like the `useSelector` hook from redux
 *
 * @param {(context) => {}} callback
 */

function useAppContext(callback = (context) => context) {
  const ctx = useContext(AppContext);

  return callback(ctx);
}

export default useAppContext;
