const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.top = null;
    }

    root() {
        return this.top
    }

    add(data) {
        this.top = addWithin(this.top, data);

        function addWithin(node, data) {
            if (!node) {
                return new Node(data);
            }

            if (node.data === data) {
                return node;
            }

            if (data < node.data) {
                node.left = addWithin(node.left, data);
            } else {
                node.right = addWithin(node.right, data);
            }

            return node;
        }
    }

    has(data) {
        return searchWithin(this.top, data);

        function searchWithin(node, data) {
            if (!node) {
                return false;
            }

            if (node.data === data) {
                return true;
            }

            return (data < node.data) ?
                searchWithin(node.left, data) :
                searchWithin(node.right, data);
        }
    }

    find(data) {
        return findWithin(this.top, data)

        function findWithin(node, data) {
            if (!node) {
                return null;
            }

            if (node.data === data) {
                return node;
            }

            return (data < node.data) ?
                findWithin(node.left, data) :
                findWithin(node.right, data);
        }
    }

    remove(data) {
        this.top = removeWithin(this.top, data)

        function removeWithin(node, data) {
            if (!node) {
                return null;
            }

            if (data < node.data) {
                node.left = removeWithin(node.left, data);
                return node;
            } else if (data > node.data) {
                node.right = removeWithin(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null
                }

                if (!node.left) {
                    node = node.right;
                    return node;
                }

                if (!node.right) {
                    node = node.left;
                    return node;
                }

                let minRight = node.right;
                while (minRight.left) {
                    minRight = minRight.left
                }

                node.data = minRight.data

                node.right = removeWithin(node.right, minRight.data)

                return node
            }
        }
    }

    min() {
        if (!this.top) {
            return null
        }

        let minN = this.top;

        while (minN.left) {
            minN = minN.left
        }

        return minN.data
    }

    max() {
        if (!this.top) {
            return null
        }

        let maxN = this.top;

        while (maxN.right) {
            maxN = maxN.right
        }

        return maxN.data
    }
}


module.exports = {
    BinarySearchTree
};