function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getCurrentAmount(id) {
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    return currentBalanceNumber;
}

function getCampaignAmount(id) {
    const campaignAmount = document.getElementById(id).innerText;
    const campaignAmountNumber = parseFloat(campaignAmount);
    return campaignAmountNumber;
}

function toggleButton(id) {
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}