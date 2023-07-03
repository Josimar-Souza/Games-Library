const getEmbededUrl = (url) => {
  if (typeof (url) !== 'string') return '';

  const formattedUrl = url.replace('watch?v=', 'embed/');

  let finalUrl = '';

  if (formattedUrl.includes('&')) {
    const [videoUrl] = formattedUrl.split('&');

    finalUrl = videoUrl;
  } else {
    finalUrl = formattedUrl;
  }

  return finalUrl;
};

export default getEmbededUrl;
