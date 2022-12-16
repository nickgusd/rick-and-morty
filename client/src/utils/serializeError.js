/**
 *
 * @param {Error} error
 * @param {Object} [options]
 * @param {boolean} [options.returnFullDataObject]
 * @param {boolean} [options.includeSourceError]
 * @returns {{status, message, name, sourceError: (Error|undefined), stack }}
 */ 
 export const serializeError = (
    error,
    options = {
      returnFullDataObject: false,
      includeSourceError: false,
    },
  ) => {
    const { includeSourceError, returnFullDataObject } = options;
    const errorMessage = (() => {
      const defaultErrorMessage = error?.message || "An error occurred.";
      const networkErrorMessage = "Your computer doesn't seem to be connected to the internet";
      try {
        if (defaultErrorMessage.startsWith("Cannot read properties of undefined"))
          return "Something went wrong, please try again";
  
        if (error?.response?.data?.response) {
          if (returnFullDataObject) {
            return error?.response?.data?.response ?? defaultErrorMessage;
          } else {
            return error?.response?.data?.response[0] ?? defaultErrorMessage;
          }
        }
  
        if (error?.message === "Network Error")
          // In the first step we check if it's Axios network error. If it has "response" field it has
          // to be Axios error, if not, we return `defaultErrorMessage`.
          return networkErrorMessage;
        if (error?.response) {
          // Custom error response from API is stored inside "data" object in "response" object.
          // Manta API sometimes sends whole HTML pages as error data, so we have to check if the
          // "data" exists and is actually an object and return it only then - otherwise, return
          // `defaultErrorMessage`.
          if (typeof error?.response?.data === "object") {
            // Manta API puts most of the custom error messages under `error` key, so for easier
            // development we return value of that key by default. If for some reason you want
            // to have access to whole `data` object, you have to specify it in params
            if (returnFullDataObject) {
              return error.response.data ?? defaultErrorMessage;
            } else {
              return error.response.data?.error ?? defaultErrorMessage;
            }
          } else {
            return defaultErrorMessage;
          }
        } else {
          return defaultErrorMessage;
        }
      } catch (e) {
        return defaultErrorMessage;
      }
    })();
    return {
      status: error?.response?.status,
      message: errorMessage,
      name: error?.name,
      sourceError: includeSourceError ? error : undefined,
      stack: error?.stack,
    };
  };