export const isProductionEnvironment = process.env.NODE_ENV === 'production';

export const isTestEnvironment = Boolean(
  process.env.PLAYWRIGHT_TEST_BASE_URL ||
    process.env.PLAYWRIGHT ||
    process.env.CI_PLAYWRIGHT,
);

export const allowedFileTypes = [
  'image/jpeg', 
  'image/png', 
  'application/pdf', 
  'application/json', 
  // 'application/yaml',
  // 'application/x-yaml', 
  // 'text/javascript', 
  // 'text/html', 
  // 'text/xml', 
  // 'text/css', 
  // 'text/markdown',
  // 'text/plain',
  // 'text/csv'
]
