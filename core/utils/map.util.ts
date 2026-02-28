import { WritableSignal } from '@angular/core';

export const updateMapUtil = <K, V>(map: Map<K, V>, key: K, value: V): Map<K, V> => {
  const newMap = new Map(map);
  newMap.set(key, value);
  return newMap;
};

export const updateMap = <K, V>(map: WritableSignal<Map<K, V>>, key: K, value: V) => {
  map.update((current) => {
    const newMap = new Map(current);
    newMap.set(key, value);
    return newMap;
  });
};

