export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, key] of map.entries()) {
    if (key === 1) {
      map.set(item, 100);
    }
  }
  return map;
}
