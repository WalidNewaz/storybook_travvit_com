/**
 * String utilities
 */

/**
 * HTML template literal tag function
 *
 * @example html`<div>${variable}</div>`
 *
 * @param strings
 * @param values
 * @returns
 */
export const html = (strings: TemplateStringsArray, ...values: any[]) =>
  String.raw({ raw: strings }, ...values);

/**
 * Abbreviate a string, adding ellipsis if it's too long
 * @param str
 */
export const abbreviate = (str: string, length = 20) =>
  str.length > length ? str.slice(0, length) + '...' : str;
