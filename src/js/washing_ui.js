$("#washing-form").submit(function(event) {

    const characterClass = $("#form--msClassName").val();
    const characterLevel = $("#form--characterLevel").val();
    const characterMP = $("#form--characterMP").val();

    const washableMP = GetWashableManaPoints(characterClass, characterLevel, characterMP);
    const numWashesLeft = GetWashes(characterClass, washableMP);

    const freshAPsLeft = GetFreshAPsLeft(characterLevel);
    const optimalResetAPsLeft = Math.max(numWashesLeft - freshAPsLeft, 0);
    const mpWashedNowOptimal = GetWashedManaPoints(characterClass, optimalResetAPsLeft);
    const mpWashedLaterOptimal = GetWashedManaPoints(characterClass, freshAPsLeft);

    const hpGainWashNowMin = GetMinimalHealthPointGainWashNow(characterClass, numWashesLeft);
    const hpGainWashNowAvg = GetAverageHealthPointGainWashNow(characterClass, numWashesLeft);
    const hpGainWashOptimalMin = GetMinimalHealthPointGainOptimal(characterClass, freshAPsLeft, optimalResetAPsLeft);
    const hpGainWashOptimalAvg = GetAverageHealthPointGainOptimal(characterClass, freshAPsLeft, optimalResetAPsLeft);

    var elements = [];
    if (hpGainWashNowAvg != hpGainWashOptimalAvg) {
        const element1 = document.createElement("p");
        const textNode1 = document.createTextNode(`[Option 1] You can wash ${washableMP} MP now using ${numWashesLeft} APRs to gain at least ${hpGainWashNowMin} HP and on average ${hpGainWashNowAvg} HP.`);
        element1.appendChild(textNode1);
        elements.push(element1);

        const element2 = document.createElement("p");
        const textNode2 = document.createTextNode(`[Option 2] You can wash ${mpWashedNowOptimal} MP now using ${optimalResetAPsLeft} APRs, and then use ${freshAPsLeft} fresh APRs to wash ${mpWashedLaterOptimal} MP. This gains at least ${hpGainWashOptimalMin} HP and on average ${hpGainWashOptimalAvg} HP.`);
        element2.appendChild(textNode2);
        elements.push(element2);
    } else {
        const element = document.createElement("p");
        const textNode = document.createTextNode(`You can wash ${washableMP} MP at any time using ${numWashesLeft} APRs to gain at least ${hpGainWashNowMin} HP and on average ${hpGainWashNowAvg} HP.`);
        element.appendChild(textNode);
        elements.push(element);
    }

    const outputNode = document.getElementById("form-output");
    outputNode.textContent = "";
    for (var i = 0; i < elements.length; i++) {
        outputNode.appendChild(elements[i]);
    }
    event.preventDefault();
});
