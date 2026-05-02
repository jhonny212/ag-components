import { computed, signal } from '@angular/core';
import { IColumn } from '../interfaces/data/table/column.interface';

export interface IGlobalFilter<T> {
  value: string;
  fields?: (keyof T)[];
}

export function useDarkMode() {
  const isDark = signal(document.documentElement.classList.contains('dark'));

  const observer = new MutationObserver(() => {
    isDark.set(document.documentElement.classList.contains('dark'));
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });

  return {
    isDark: isDark.asReadonly(),
    isLight: computed(() => !isDark()),
  };
}

export function filterDataTable<T>(
  data: T[],
  columns: IColumn<T>[],
  globalFilter?: IGlobalFilter<T>,
): T[] {
  if (!globalFilter?.value) return data;

  const search = normalize(globalFilter.value);

  return data.filter((row) => {
    return columns.some((col) => {
      const field = col.data.field;
      const formatFn = col.data.format;

      // ✅ Respetar fields si vienen definidos
      if (globalFilter.fields && field && !globalFilter.fields.includes(field)) {
        return false;
      }

      let value: any;

      // 🧠 Prioridad: format > field
      if (formatFn) {
        value = formatFn(row);
      } else if (field) {
        value = row[field];
      }

      if (value === null || value === undefined) return false;

      const normalizedValue = normalize(value);

      return normalizedValue.includes(search);
    });
  });
}

function normalize(value: any): string {
  return String(value)
    .normalize('NFD') // separa letras y acentos
    .replace(/[\u0300-\u036f]/g, '') // elimina tildes
    .replace(/[^a-zA-Z0-9\s]/g, '') // elimina caracteres especiales
    .toLowerCase()
    .trim();
}
