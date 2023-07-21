import { modifier } from 'ember-modifier';
import { next } from '@ember/runloop';

export default modifier(function animateHeight(
  element,
  positional,
  { isOpen = false }
) {
  if (!isOpen) {
    element.style.height = '0px';
    return;
  }
  element.style.height = 'auto';
  const height = element.getBoundingClientRect().height;
  element.style.height = '0px';
  next(() => {
    element.style.height = `${height}px`;
  });
});
