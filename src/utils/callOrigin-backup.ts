import path from 'path';
const getRelativePath = (filename: string) => path.relative(process.cwd(), filename);

const getCallOrigin = (fn?: string): string => {
  const oldPrepareStackTrace = Error.prepareStackTrace;

  Error.prepareStackTrace = (_, stack) => stack;
  const e = new Error();
  Error.prepareStackTrace = oldPrepareStackTrace;

  let fileName = '';
  let frame, lineNumber, functionName;

  if (e.stack) {
    fileName = e.stack.split('\n')[4];

    frame = e.stack.split('\n')[4]; // change to 3 for grandparent func
    lineNumber = frame.split(':').reverse()[1];
    functionName = frame.split(' ')[5];
  }
  return `/${getRelativePath(fileName)} -> ${fn}()`;
};

export { getCallOrigin };
