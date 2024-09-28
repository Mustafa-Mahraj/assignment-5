//  Donate For Flood At Noakhali, Bangladesh..

document.getElementById('donate-for-noakhali')
    .addEventListener('click', function(){
        const donateAmount = getInputValue('donate-amount');
        const currentBalance = getCurrentAmount('current-balance');
        if(donateAmount > currentBalance){
            alert('Insufficient Balance, Please Cash In and try again')
            return
        }
        else if(donateAmount > 0){
            const newBalance = currentBalance - donateAmount;
            document.getElementById('current-balance').innerText = newBalance + ' BDT';
            const campaignAmount = getCampaignAmount('Campaign-amount');
            const newCampaignAmount = campaignAmount + donateAmount;
            document.getElementById('Campaign-amount').innerText = newCampaignAmount + ' BDT';
            alert('Congratulation, Your Donate is successfully completed');

            //**** Notification Part ****
            const div = document.createElement('div');
            div.style.border = '1px solid #f2f2f2'
            div.style.padding = '20px';
            div.style.borderRadius = '8px';
            div.style.marginBottom = '24px'
            document.getElementById('history-container').append(div)
            const h2 = document.createElement('h2');
            h2.innerText = donateAmount + '  Taka is Donated for famine-2024 at Noakhali , Bangladesh' 
            h2.style.fontSize = '2.5 rem'
            h2.style.fontWeight = '700'
            h2.style.marginBottom = '14px'
            const  p = new Date()
            div.append(h2, p)

        }
        else{
            alert('Invalid Amount')
        }
    })
    

//  Donate For Flood At Feni, Bangladesh..

document.getElementById('donate-for-feni')
    .addEventListener('click', function(){
        const donateAmount = getInputValue('donate-amount-feni');
        const currentBalance = getCurrentAmount('current-balance');  
        if(donateAmount > currentBalance){
            alert('Insufficient Balance, Please Cash In and try again');
            return
        }
        else if(donateAmount > 0){
            const newBalance = currentBalance - donateAmount;
            document.getElementById('current-balance').innerText = newBalance + ' BDT';
            const campaignAmount = getCampaignAmount('campaign-amount-feni');
            const newCampaignAmount = campaignAmount + donateAmount;
            document.getElementById('campaign-amount-feni').innerText = newCampaignAmount + ' BDT';
            alert('Congratulation, Your Donate is successfully completed')

            //**** Notification Part ****
            const div = document.createElement('div');
            div.style.border = '1px solid #f2f2f2'
            div.style.padding = '20px';
            div.style.borderRadius = '8px';
            div.style.marginBottom = '24px'
            document.getElementById('history-container').append(div)
            const h2 = document.createElement('h2');
            h2.innerText = donateAmount + ' Taka is Donated for Flood Relief in Feni,Bangladesh' 
            h2.style.fontSize = '2.5 rem'
            h2.style.fontWeight = '700'
            h2.style.marginBottom = '14px'
            const  p = new Date()
            div.append(h2, p)

        }
        else{
            alert('Invalid Amount')
        }
    })

//  Donate For Qouta Movement, Bangladesh..


document.getElementById('quota-donate-btn')
    .addEventListener('click', function(){
        const donateAmount = getInputValue('quota-donate-amount');
        const currentBalance = getCurrentAmount('current-balance');
        if(donateAmount > currentBalance){
            alert('Insufficient Balance, Please Cash In and try again');
            return
        }
        else if(donateAmount > 0){
            const newBalance = currentBalance - donateAmount;
            document.getElementById('current-balance').innerText = newBalance + ' BDT';
            const campaignAmount = getCampaignAmount('quota-campaign-amount');
            const newCampaignAmount = campaignAmount + donateAmount;
            document.getElementById('quota-campaign-amount').innerText = newCampaignAmount + ' BDT';
            alert('Congratulation, Your Donate is successfully completed')

            //**** */ Notification Part *****
            const div = document.createElement('div');
            div.style.border = '1px solid #f2f2f2'
            div.style.padding = '20px';
            div.style.borderRadius = '8px';
            div.style.marginBottom = '24px'
            document.getElementById('history-container').append(div)
            const h2 = document.createElement('h2');
            h2.innerText = donateAmount + ' Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh' 
            h2.style.fontSize = '2.5 rem'
            h2.style.fontWeight = '700'
            h2.style.marginBottom = '14px'
            const  p = new Date()
            div.append(h2, p)
        }
        else{
            alert('Invalid Amount')
        }
    })