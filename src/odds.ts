const getNumOdd = (probability) => {
    const pVal = probability.slice(0, probability.length - 1);
    return Math.round(parseFloat(pVal));
}

const getOddAvg = (odds) => {
    const oddsLen = odds.length;
    let total = 0;

    for (let i = 0; i < oddsLen; i++) {
        total += odds[i];
    }

    return Math.round(total / oddsLen);
}

export const get1X2Odds = (oddsList) => {
    const odds = {
        'Home': {
            all: [],
            avg: 0,
        },
        'Draw': {
            all: [],
            avg: 0,
        },
        'Away': {
            all: [],
            avg: 0,
        },
    };

    if (!oddsList) {
        return odds;
    }

    const listLen = oddsList.length;

    for (let i = 0; i < listLen; i++) {
        const { name, probability } = oddsList[i];
        odds[name]['all'].push(getNumOdd(probability));
    }

    odds['Home']['avg'] = getOddAvg(odds['Home']['all']);
    odds['Draw']['avg'] = getOddAvg(odds['Draw']['all']);
    odds['Away']['avg'] = getOddAvg(odds['Away']['all']);
    return odds;
}

export const getBTTSOdds = (oddsList) => {
    const odds = {
        'Yes': {
            all: [],
            avg: 0,
        },
        'No': {
            all: [],
            avg: 0,
        },
    };

    if (!oddsList) {
        return odds;
    }

    const listLen = oddsList.length;

    for (let i = 0; i < listLen; i++) {
        const { name, probability } = oddsList[i];
        odds[name]['all'].push(getNumOdd(probability));
    }

    odds['Yes']['avg'] = getOddAvg(odds['Yes']['all']);
    odds['No']['avg'] = getOddAvg(odds['No']['all']);
    return odds;
}

export const getOUOdds = (oddsList) => {
    const odds = {
        'Over': {
            all: [],
            avg: 0,
        },
        'Under': {
            all: [],
            avg: 0,
        },
    };

    if (!oddsList) {
        return odds;
    }

    const listLen = oddsList.length;

    for (let i = 0; i < listLen; i++) {
        const { label, probability, total } = oddsList[i];

        if (total === '2.5')
            odds[label]['all'].push(getNumOdd(probability));

    }

    odds['Over']['avg'] = getOddAvg(odds['Over']['all']);
    odds['Under']['avg'] = getOddAvg(odds['Under']['all']);

    return odds;
}