$("#washing-form").submit(function(event) {

    const characterClass = $("#form--msClassName").val();
    const characterLevel = $("#form--characterLevel").val();
    const characterMP = $("#form--characterMP").val();

    const washableMP = GetWashableManaPoints(characterClass, characterLevel, characterMP);
    const numWashes = GetWashes(characterClass, washableMP);
    const hpGain = GetHealthPointGain(characterClass, numWashes);

    const element = document.createElement("p");
    const textNode = document.createTextNode(`You can wash ${washableMP} MP using ${numWashes} APRs to gain ${hpGain} HP.`);
    element.appendChild(textNode);

    const outputNode = document.getElementById("form-output");
    outputNode.textContent = "";
    outputNode.appendChild(element);
    event.preventDefault();
});