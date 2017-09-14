/**
 * Use this when you want to create a component that doesn't depend on any preexisting DOM
 *
 * Guidlines:
 *
 * In destroy you should remember and remove any DOM listeners
 */

export interface IComponent {

  /**
   * Destory your component in this method, you should remove all listeners that this sets up on your document
   * @returns {Promise<void>}
   */
  destroy: () => Promise<void>
  /**
   * Add your component to your document. You should set up your listeners here.
   * @returns {Promise<void>}
   */
  show: () => Promise<void>
}
