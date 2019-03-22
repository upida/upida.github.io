export function $(selector, parent = document) {
  return parent.querySelector(selector);
}

export function $$(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

export function mapClickToAction(containerSelector) {
  const containerEl = $(containerSelector);
  const targetContainerEl = $(containerEl.dataset.target);

  const children = containerEl.children;
  Array.prototype.forEach.call(children, e => {
    const el = $(e.dataset.target);
    if (!el.classList.contains('click-to-action-active')) {
      el.hidden = true;
    }
  });

  containerEl.addEventListener('click', e => {
    if (e.target.tagName !== 'LI') return;

    const dataset = e.target.dataset.target;
    if (dataset) {
      const target = $(dataset);
      const active = $('.click-to-action-active', targetContainerEl);
      if (active === target) {
        return;
      }

      active.classList.remove('click-to-action-active');
      active.hidden = true;
      target.classList.add('click-to-action-active');
      target.hidden = false;

      const elClicked = e.target;
      const activeElClicked = $('.active', containerEl);
      activeElClicked.classList.remove('active');
      elClicked.classList.add('active');
    }
  });
}
