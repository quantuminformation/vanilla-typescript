/**
 * Useful in vanilla apps when you want to get data from a form but don't have frameworky stuff to do it
 */

/**
 * @param {HTMLElement} form
 */
export function getFormValues (form: HTMLElement): string {
  let data = {}
  let inputs: (HTMLInputElement | HTMLTextAreaElement)[] = Array.from(form.querySelectorAll('input,textarea')) as (HTMLInputElement | HTMLTextAreaElement)[]
  inputs.forEach(input => {
    data[input.name] = input.value
  })
  return JSON.stringify(data)
}
