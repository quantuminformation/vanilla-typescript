/**
 * Use this when you want to attach this component to existing DOM
 *
 * Guidlines:
 *
 * Try and modify as little of the exiting dom's html as possible
 */

export interface IAttachableComponent {
  attach: (hostElement: string) => void
  detach: () => void
}
