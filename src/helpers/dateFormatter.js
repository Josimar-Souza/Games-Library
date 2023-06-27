const dateFormatter = (date) => {
  const separatedDate = new Date(date)
    .toJSON()
    .slice(0, 10)
    .split('-');

  let formattedDate = '';

  for (let index = separatedDate.length - 1; index >= 0; index -= 1) {
    if (index !== 0) {
      formattedDate += `${separatedDate[index]}/`;
    } else {
      formattedDate += `${separatedDate[index]}`;
    }
  }

  return formattedDate;
};

export default dateFormatter;
