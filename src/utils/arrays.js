export default {
    /**
     * @method toArray
     * @description Converts non-array variable to array.
     * @param {Any} variable
     * @return {Array}
     */
    toArray(variable) {
        return Array.isArray(variable) ? variable : [variable];
    },

    /**
     * @method includes
     * @description Checks if provided array includes value/values.
     * @param {Array} array Source array.
     * @param {Array|Any} values Any kind of values (string, number, array).
     * @param {Boolean} strict Comparison strategy. When {true}, should include all values.
     * @return {Boolean}
     */
    includes(array, values, strict = false) {
        const valuesCollection = Array.isArray(values) ? values : [values];
        let includes = false;

        /* Use "for" loop to stop iteration once resolved {true} in non-strict mode */
        for (let i = 0; i < valuesCollection.length; i++) {
            const expectedValue = valuesCollection[i];

            if (array.includes(expectedValue)) {
                includes = true;

                if (!strict) { break; }
            } else if (strict) {
                includes = false;
            }
        }

        return includes;
    },

    /**
     * @method fromNodes
     * @description Converts array-like Object(s) to array.
     * @param {HTMLCollection|NodeList|DOMElement} nodes
     * @return {Array} Array of the provided nodes.
     */
    fromNodes(nodes) {
        if (Array.isArray(nodes)) { return nodes; }
        return (nodes instanceof HTMLCollection || nodes instanceof NodeList) ? Array.from(nodes) : [nodes];
    },

    /**
     * @method merge
     * @description Shallow merge set of String/Array into Array and unqiue.
     * @param {Array} arrays
     * @return {Array}
     */
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

    /**
     * @method join
     * @description Joins array values using certain delimiter.
     * @param {Array} arrays
     * @return {Array}
     */
    join(...arrays) {
        return this.merge(...arrays).join(' ');
    },

    /**
     * @method unique
     * @description Remove duplicated from the Array entries.
     * @param {Array} array Source array.
     * @return {Array} Reference to the modified array.
     */
    unique: array => Array.from(new Set(array)),

    /**
     * @method trim
     * @description Removes empty values from Array.
     * @param {Array} array
     * @return {Array}
     */
    trim(array) {
        return array.filter(Boolean);
    },

    /* Find and remove item from an array */
    /**
     * @method trim
     * @description Find and remove item from an array.
     * @param {Array} array Source array.
     * @param {Any} item Item to remove.
     * @return {Array}
     */
    remove(array, item) {
        const i = array.indexOf(item);
        if (i !== -1) {
            array.splice(i, 1);
        }

        return array;
    },

    /**
     * @method flatten
     * @description Flattens passed array into one-level array.
     * @param {Array} array
     * @return {Array}
     */
    flatten(array) {
        if (Array.isArray(array)) {
            return array.reduce((done, current) => done.concat(current), []);
        }

        return array;
    }
};