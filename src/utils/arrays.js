export default {
  merge(...arrays) {
    let merged = [];

    arrays.map((array) => {
      !(Array.isArray(array)) && (array = [array]);
      merged.push(...array);
    });

    merged = this.trim(merged);
    merged = this.unique(merged);

    return merged;
  },

  join(...arrays) {
    return this.merge(...arrays).join(' ');
  },

  unique: array => Array.from(new Set(array)),

  trim(array) {
    return array.filter(Boolean);
  }
};