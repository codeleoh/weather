document.querySelector('.busca').addEventListener('submit', (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== '') {
        showWarning('Carregando...')

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${econdeURI(input)}&appid=b95fa5771bb30a97f7e77f16336dab71`;
    }
});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}