const getEmbededUrl = (url) => {
  if (typeof (url) !== 'string') return '';

  const formattedUrl = url.replace('watch?v=', 'embed/');

  return formattedUrl;
};

export default getEmbededUrl;
