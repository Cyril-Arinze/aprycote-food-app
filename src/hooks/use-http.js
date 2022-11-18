import { useCallback, useReducer } from 'react';

const httpReducer = (state, action) => {
  if (action.type === 'SEND') {
    return {
      data: null,
      status: 'pending',
      error: null,
    };
  }
  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      status: 'completed',
      error: null,
    };
  }
  if (action.type === 'ERROR') {
    return {
      data: null,
      status: 'completed',
      error: action.error,
    };
  }
  return state;
};

const useHttp = (requestFn) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    data: null,
    status: 'pending',
    error: null,
  });

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: 'SEND' });
      try {
        const responseData = await requestFn(requestData);
        dispatch({ type: 'SUCCESS', responseData });
      } catch (error) {
        dispatch({ type: 'ERROR', error: error.message });
      }
    },
    [requestFn]
  );

  return {
    sendRequest,
    ...httpState,
  };
};
export default useHttp;
