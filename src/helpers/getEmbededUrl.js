const getEmbededUrl = (url) => {
  const formattedUrl = url.replace('watch?v=', 'embed/');
  console.log(formattedUrl);
  return formattedUrl;
};

export default getEmbededUrl;
