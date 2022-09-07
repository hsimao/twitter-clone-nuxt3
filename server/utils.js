export const handleError = (event, statusCode = 500, statusMessage = "") => {
  return sendError(
    event,
    createError({
      statusCode,
      statusMessage
    })
  );
};
