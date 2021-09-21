it('Calculate tip test with values of 10 & 15', () => {
  const calculateTip = jest.fn((meal, tip) => Number((meal * (tip/100)).toFixed(2)));
  expect(calculateTip(10,15)).toBe(1.5);
})