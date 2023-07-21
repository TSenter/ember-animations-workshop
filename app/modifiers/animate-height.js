import { modifier } from 'ember-modifier';

export default modifier(function animateHeight(
  element,
  positional,
  { isOpen = false }
) {
  const targetHeight = isOpen ? `${element.scrollHeight}px` : '0px';
  element.style.height = targetHeight;
});
