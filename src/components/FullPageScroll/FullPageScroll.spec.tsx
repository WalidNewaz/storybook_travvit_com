import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FullPageScroll } from './FullPageScroll';

// TODO: Fix the following test that depends on wheel events
describe.skip('FullPageScroll', () => {
  it('should scroll up and down on wheel event', () => {
    const scrollHeight = 3000; // Set the desired scroll height

    // Mocking the scroll behavior
    const originalScrollHeight = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      'scrollHeight',
    ) as PropertyDescriptor;
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      get() {
        return scrollHeight;
      },
    });

    const { container } = render(
      <FullPageScroll>
        <div style={{ height: '100vh' }}>Page 1</div>
        <div style={{ height: '100vh' }}>Page 2</div>
        <div style={{ height: '100vh' }}>Page 3</div>
      </FullPageScroll>,
    );

    // Scroll down
    fireEvent.wheel(window, { deltaY: 100 });
    // fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(window.scrollY).toBe(100);
    // expect(container.scrollTop).toBe(100);

    // Scroll up
    fireEvent.wheel(container, { deltaY: -100 });
    // fireEvent.wheel(window, { target: { scrollY: -100 } });
    // expect(window.scrollY).toBe(0);
    expect(container.scrollTop).toBe(0);

    // Restore the original scrollHeight property
    Object.defineProperty(
      HTMLElement.prototype,
      'scrollHeight',
      originalScrollHeight,
    );
  });
});
