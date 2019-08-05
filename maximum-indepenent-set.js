/*
    Given a weighted graph path in the form of: [1, 9, 12, 5, 16], the functions below will 
    find the maximum independent set
*/

// Recursively find max 
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
    let Soln = [];

    if (P.length === 0) {
        return 0;
    }

    if (P.length === 1) {
        return P[0];
    }

    Soln[0] = P[0];
    if (P.length > 1) {
        Soln[1] = Math.max(P[0], P[1]);
        for (let k=2; k < P.length; k++) {
            Soln[k] = Math.max(
                Soln[k-1],
                Soln[k - 2] + P[k],
            )
        }
    }
    return Soln[P.length - 1];
}

module.exports = {
    FindMaxIS,
}
