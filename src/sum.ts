// Only here to ensure tests + typescript is behaving correctly
export const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0);
