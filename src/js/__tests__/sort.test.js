import orderByProps from '../sort';

test('testing orderByProps, two parameters', () => {
  const swordsman = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  const result = orderByProps(swordsman, ['name', 'level']);

  expect(result).toEqual(expected);
});

test('testing orderByProps, all parameters', () => {
  const swordsman = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'health', value: 10 },
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
  ];

  const result = orderByProps(swordsman, ['name', 'level', 'health', 'defence', 'attack']);

  expect(result).toEqual(expected);
});
