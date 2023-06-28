const getEmbededUrl = (url) => {
  const formattedUrl = url.replace('watch?v=', 'embed/');

  return formattedUrl;
};

export default getEmbededUrl;
