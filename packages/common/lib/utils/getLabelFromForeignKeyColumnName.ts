import { transformToReadable } from "./transformToReadable";

/**
 * Get a label from a foreign key column name.
 * @example createLabelFromForeignKeyColumn('user_id') => 'User'
 * @example createLabelFromForeignKeyColumn('user') => 'User'
 * @param str - The foreign key column name.
 * @returns The label.
 */
export function getLabelFromForeignKeyColumnName(str: string): string {
  if (str.endsWith('_id')) {
    return transformToReadable(str.slice(0, -3));
  };

  return str;
}