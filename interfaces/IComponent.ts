/**
 * Use this when you want to create a component that doesn't depend on any preexisting DOM
 *
 * Guidlines:
 *
 * In destroy you should remember and remove any DOM listeners
 */

export interface IComponent {
  destroy: () => void
  show: () => void
}
