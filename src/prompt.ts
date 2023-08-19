const intro1 = 'Przeprowadź analizę podanych poniżej danych i zaproponuj wynik który Twoim zdaniem na ma największe szanse dla meczu ligi ';
const intro2 = 'Weź pod uwagę podane prawdopodobieństwo każdego zdarzenia, historię head-to-head pomiędzy tymi zespołami a także dodatkowe informację. Weź pod uwagę także rezultaty zespołów z ostatnich meczy.'

export const getPrompt = (league: string, gamePrediction) => {
    const { HomeTeam, AwayTeam } = gamePrediction;
    const HomeWin = gamePrediction['1X2']['Home']['avg'];
    const Draw = gamePrediction['1X2']['Draw']['avg'];
    const AwayWin = gamePrediction['1X2']['Away']['avg'];
    const Over25 = gamePrediction['O25']['Over']['avg'];
    const BTTS = gamePrediction['BTTS']['Yes']['avg'];

    return `${intro1} ${league}, pomiędzy ${HomeTeam} i ${AwayTeam}. ${intro2}
    Liga: ${league}
    Gospodarz: ${HomeTeam}
    Gość: ${AwayTeam}

    Prawdopodobieństwo:
    Wygrana gospodarza: ${HomeWin}%
    Remis: ${Draw}%
    Wygrana gości: ${AwayWin}%
    Powyżej 2,5 gola w meczu: ${Over25}%
    Obie drużyny strzelą gola: ${BTTS}%

    Dodatkowe informacje:
    XXXXXXXXXXXXXXXX
    
    Twoja odpowiedź powinna wyglądać na przykład tak:

    Przewidywany wynik to:
    ${HomeTeam} 10:10 ${AwayTeam}
    
    Analiza:
    Lorem ipsum text 22.`   
}