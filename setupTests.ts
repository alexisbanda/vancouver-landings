import { vi } from 'vitest';

// Mock IntersectionObserver for testing environment
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});

vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);
