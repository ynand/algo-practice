var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        let start = 1, end = n;
        
        while (start <= end) {
            const pivot = Math.floor((start + end) / 2);
            if (isBadVersion(pivot)) {
                end = pivot - 1;
            } else {
                start = pivot + 1;
            }
        }
        return start;
    };
};