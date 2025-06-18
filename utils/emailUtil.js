exports.sendConfirmationEmail = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Email sent to user ${userId}`);
      resolve();
    }, 500);
  });
};
