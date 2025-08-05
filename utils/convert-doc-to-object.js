const convertDocToObject = (doc) => {
  for (const key of Object.keys(doc)) {
    if (doc[key].toJSON && doc[key].toString) {
      doc[key] = doc[key].toString();
    }
  }

  return doc;
};

export default convertDocToObject;