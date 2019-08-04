/*

    Given a weighted graph path the functions below will find the maximum independent set

*/

// Recursive solution
const FindMaxISHelper = (P) => {
    if (P.length === 0) {
        return 0;
    }
    if (P.length === 1) {
        return P[0];
    }
    const index = P.length;
    return Math.max(
        FindMaxISHelper(P.slice(0, index-1)),
        FindMaxISHelper(P.slice(0, index-2)) + P[index - 1]
    );
}

// Dynamic programming solution
const FindMaxIS = (P) => {
    let SOLN = [];

    if (P.length === 0) {
        SOLN[0] = 0;
    }

    if (P.length === 1) {
        SOLN[1] = P[0];
    }

    if (P.length > 2) {
        for (let k=2; k < P.length + 1; k++) {
            SOLN[k] = FindMaxISHelper(P.slice(0, k));
        }
    }

    return SOLN[P.length];
}

module.exports = {
    FindMaxIS,
}
