module.exports.paramId = (name) => {
  return {
    id: {
      isMongoId: true,
      notEmpty: true,
      errorMessage: `This is not a correct ${name}`
    }
  }
}
