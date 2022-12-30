const simpleHash = (string) => {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash = (hash << 5) - hash + string.charCodeAt(i);
  }
  return hash;
};

export const generateLinearGradientBackground = (seed) => {
  const hash = simpleHash(seed);
  const first = Math.abs(hash % 360);
  const second = Math.abs(
    (hash + Math.round(((hash % 100) / 100) * 60 + 120)) % 360
  );
  return `linear-gradient(to bottom right, hsl(${first} 100% 40%), hsl(${second} 100% 40%))`;
};
