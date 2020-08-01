let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes =
  [
    `"The purpose of our lives is to be happy".— Dalai Lama.`,
    `"Life is what happens when you're busy making other plans." — John Lennon.`,
    `"Get busy living or get busy dying." — Stephen King.`,
    `"You only live once, but if you do it right, once is enough." — Mae West.`,
    `"All our dreams can come true, if we have the courage to pursue them." – Walt Disney.`,
    `"The secret of getting ahead is getting started." – Mark Twain.`,
    `"It’s hard to beat a person who never gives up." – Babe Ruth.`,
    `"I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’" – Leah Busque.`,
    `"If people are doubting how far you can go, go so far that you can’t hear them anymore." – Michele Ruiz.`
  ];


btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;

});