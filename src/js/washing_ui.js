$("#washing-form").submit(function(event) {
    const characterClass = $("#form--msClassName").val();
    const characterLevel = $("#form--characterLevel").val();
    const characterMP = $("#form--characterMP").val();

    const washableMP = GetWashableManaPoints(characterClass, characterLevel, characterMP);
    const numWashesLeft = GetWashes(characterClass, washableMP);
    const actualWashedMP = GetWashedManaPoints(characterClass, numWashesLeft);

    const hpGainWashNowMin = GetMinimalHealthPointGainWashNow(characterClass, numWashesLeft);
    const hpGainWashNowAvg = GetAverageHealthPointGainWashNow(characterClass, numWashesLeft);
    const freshAPsLeft = GetFreshAPsLeft(characterLevel);

    const washingStrategy = GetOptimalWashingStrategy(characterClass);
    var elements = [];

    // this is terrible, don't read this
    if (washingStrategy === "either") {
        var element = document.createElement("p");
        const textNode = document.createTextNode(`[Wash using APs or APRs] You can wash ${actualWashedMP} MP at any time using ${numWashesLeft} APs or APRs to gain at least ${hpGainWashNowMin} HP and on average ${hpGainWashNowAvg} HP.`);
        element.appendChild(textNode);
        elements.push(element);
    } else if (washingStrategy === "reset") {
        var element = document.createElement("p");
        const textNode = document.createTextNode(`[Wash using APs only] You can wash ${actualWashedMP} MP at any time using ${numWashesLeft} APRs (do not use APs) to gain at least ${hpGainWashNowMin} HP and on average ${hpGainWashNowAvg} HP.`);
        element.appendChild(textNode);
        elements.push(element);
    } else if (washingStrategy === "fresh") {
        const optimalWashLaterAPs = Math.min(freshAPsLeft, numWashesLeft);
        const optimalWashNowAPsLeft = Math.max(numWashesLeft - optimalWashLaterAPs, 0);
        const mpWashedLaterOptimal = GetWashedManaPoints(characterClass, optimalWashLaterAPs);
        const mpWashedNowOptimal = GetWashedManaPoints(characterClass, optimalWashNowAPsLeft);
        const hpGainWashOptimalMin = GetMinimalHealthPointGainOptimal(characterClass, optimalWashLaterAPs, optimalWashNowAPsLeft);
        const hpGainWashOptimalAvg = GetAverageHealthPointGainOptimal(characterClass, optimalWashLaterAPs, optimalWashNowAPsLeft);

        if (optimalWashNowAPsLeft > 0) {
            // we have enough leftover MP to wash some MP into HP now
            var element1 = document.createElement("p");
            const textNode1 = document.createTextNode(`[Option 1: Wash everything now (non-optimal)] You can wash ${actualWashedMP} MP now using ${numWashesLeft} APRs to gain at least ${hpGainWashNowMin} HP and on average ${hpGainWashNowAvg} HP.`);
            element1.appendChild(textNode1);
            elements.push(element1);
    
            var element2 = document.createElement("p");
            const textNode2 = document.createTextNode(`[Option 2: Wash using fresh APs (optimal)] You can wash ${mpWashedNowOptimal} MP now using ${optimalWashNowAPsLeft} APRs, and then use ${optimalWashLaterAPs} fresh APs to wash ${mpWashedLaterOptimal} MP. This gains at least ${hpGainWashOptimalMin} HP and on average ${hpGainWashOptimalAvg} HP.`);
            element2.appendChild(textNode2);
            elements.push(element2);
        } else {
            // we don't have enough leftover MP to wash some MP into HP now; everything has to be fresh
            var element1 = document.createElement("p");
            const textNode1 = document.createTextNode(`[Option 1: Wash everything now (non-optimal)] You can wash ${actualWashedMP} MP now using ${numWashesLeft} APRs to gain at least ${hpGainWashNowMin} HP and on average ${hpGainWashNowAvg} HP.`);
            element1.appendChild(textNode1);
            elements.push(element1);
    
            var element2 = document.createElement("p");
            const textNode2 = document.createTextNode(`[Option 2: Wash using fresh APs (optimal)] You can wash ${mpWashedLaterOptimal} MP using ${optimalWashLaterAPs} fresh APs to gain at least ${hpGainWashOptimalMin} HP and on average ${hpGainWashOptimalAvg} HP.`);
            element2.appendChild(textNode2);
            elements.push(element2);
        }
    }

    const outputNode = document.getElementById("form-output");
    outputNode.textContent = "";
    for (var i = 0; i < elements.length; i++) {
        outputNode.appendChild(elements[i]);
    }
    event.preventDefault();
});
