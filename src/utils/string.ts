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
