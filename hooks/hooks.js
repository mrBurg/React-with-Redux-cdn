const { useMemo } = React;
const { useDispatch, bindActionCreators } = ReactRedux;
const { useLocation } = ReactRouterDOM;

export const useRouter = useLocation;

export const useActions = (actions, deps) => {
  const dispatch = useDispatch();

  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map((a) => bindActionCreators(a, dispatch));
      }

      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch]
  );
};
