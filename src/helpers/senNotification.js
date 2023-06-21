import { notification } from 'antd';

const availableTypes = ['warning', 'error', 'success'];
const availablePlacements = ['top', 'topRight', 'topLeft', 'bottom', 'bottomRight', 'bottomLeft'];

const sendNotification = (message, type = 'warning', placement = 'top') => {
  if (!availableTypes.includes(type)) {
    console.log(`O tipo ${type} não está disponível`);

    return;
  }

  if (!availablePlacements.includes(placement)) {
    console.log(`O posicionamento ${placement} não está disponível`);

    return;
  }

  notification[type]({
    message,
    placement,
  });
};

export default sendNotification;
