function solution(S, P, Q) {
    const result = [];
    for (let i = 0; i < P.length; i++) {
        const substring = S.substr(P[i], Q[i] - P[i] + 1);
        switch (true) {
            case substring.includes('A'):
                result.push(1);
                break;
            case substring.includes('C'):
                result.push(2);
                break;
            case substring.includes('G'):
                result.push(3);
                break;
            case substring.includes('T'):
                result.push(4);
                break;
        }
    }
    return result;
}
