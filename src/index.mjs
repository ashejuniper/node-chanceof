export function chanceof(chance, cb) {
    const result = Math.random();
    const hasOccured = result <= chance;

    if (typeof cb !== 'function') return hasOccured;

    if (hasOccured === true) {
        cb(
            {
                chance,
                result
            }
        );
    }
}
