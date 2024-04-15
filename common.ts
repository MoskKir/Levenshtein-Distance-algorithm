/**
 * Implementation of the Levenshtein Distance algorithm.
 * Calculates the minimum edit distance between two words using dynamic programming.
 * Determines the minimum number of operations (insertion, deletion, or substitution)
 * required to transform one word into another.
 *
 * @param word1 The first word.
 * @param word2 The second word.
 * @returns The minimum edit distance between word1 and word2.
 */
export const minimalDistance = (word1: string, word2: string): number => {
    let n = word1.length;
    let m = word2.length;

    if (n === 0) return m;
    if (m === 0) return n;

    const dp: number[][] = Array(n + 1)
        .fill(0)
        .map(() => Array(m + 1).fill(0));

    for (let i = 0; i <= n; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= m; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1, // deletion
                    dp[i][j - 1] + 1, // insertion
                    dp[i - 1][j - 1] + 1 // substitution
                );
            }
        }
    }

    let distance = dp[n][m];
    let curI = n;
    let curJ = m;
    let curWord = word2.split("");

    console.log(curWord.join(''));
    while (distance > 0 && curI > 0 && curJ > 0) {
        const del = dp[curI][curJ - 1];
        const insert = dp[curI - 1][curJ];
        const replace = dp[curI - 1][curJ - 1];

        if (replace < distance) {
            curWord[curJ - 1] = word1[curI - 1];
            curI -= 1;
            curJ -= 1;
            distance = replace;
            console.log(curWord.join(''));
        } else if (del < distance) {
            curWord.splice(curJ - 1, 1);
            curJ -= 1;
            distance = del;
            console.log(curWord.join(''));
        } else if (insert < distance) {
            curWord.splice(curJ, 0, word1[curI - 1]);
            curI -= 1;
            distance = insert;
            console.log(curWord.join(''));
        } else {
            curI -= 1;
            curJ -= 1;
        }
    }

    return dp[n][m];
};
