import orderByProps from './sort';

const swordsman = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

console.log(orderByProps(swordsman, ['name', 'level']));
