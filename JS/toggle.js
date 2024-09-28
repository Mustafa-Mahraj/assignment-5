document.getElementById('show-donate-btn')
    .addEventListener('click', function(){
        toggleButton('donate-section');
        const donateBtn = document.getElementById('show-donate-btn');
        donateBtn.style.backgroundColor = '#00a86d'
        donateBtn.style.color = 'black'
        const historyBtn = document.getElementById('show-history-btn')
        historyBtn.style.backgroundColor = 'white'
        document.getElementById('footer').classList.remove('hidden')
    })
document.getElementById('show-history-btn')
    .addEventListener('click', function(){
        toggleButton('history-section');
        const historyBtn = document.getElementById('show-history-btn');
        historyBtn.style.backgroundColor = '#00a86d'
        historyBtn.style.color = 'black'
        const donateBtn = document.getElementById('show-donate-btn')
        donateBtn.style.backgroundColor = 'white'
        document.getElementById('footer').classList.add('hidden')
    })