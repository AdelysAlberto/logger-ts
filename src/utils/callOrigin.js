import path from 'path';

/**
 * Get relative path from a filename.
 * @returns {string}
 */
const getRelativePath = (filename) => path.relative(process.cwd(), filename);

/**
 * Get function name from a stack trace.
 * @returns {string}
 */
const getCallOrigin = (fn = '') => {
  const oldPrepareStackTrace = Error.prepareStackTrace;

  Error.prepareStackTrace = (_, stack) => stack;

  const { stack } = new Error();

  Error.prepareStackTrace = oldPrepareStackTrace;

  if (!(stack !== null && typeof stack === 'object' && stack.length >= 3)) {
    return '';
  } else {
    //console.log(stack[3].getLineNumber());
    const fileName = stack[3].getFileName();
    //const funtionName = stack[3].getFunctionName();

    return `/${getRelativePath(fileName)} -> ${fn}()`;
  }
};

export { getCallOrigin };
