import { QueryResultContext } from "../Components/QueryEditor/index";
import { useContext } from "react";

/**
 * Accepts a selector function which can be used to select a value at any
 * level of the App context, like the `useSelector` hook from redux
 *
 * @param {(context) => {}} callback
 */

function useQueryResultContext(callback = (context) => context) {
  const ctx = useContext(QueryResultContext);
  return callback(ctx);
}

export default useQueryResultContext;
