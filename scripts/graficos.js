google.charts.load('current', { 'packages': ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
    graficoAlcalinidade()
    graficoPh()
    graficoTemperatura()
}

function graficoAlcalinidade() {
    const data = google.visualization.arrayToDataTable([
        ['Dia', 'Alcalinidade'],
        ['1', 15],
        ['2', 7],
        ['3', 9],
        ['4', 12]
    ])

    const options = {
        title: 'Alcalinidade nas últimas 4 semanas',
        hAxis: { title: 'Semanas', titleTextStyle: { color: '#00ff00' } },
        vAxis: { minValue: 0 }
    }

    const chart = new google.visualization.AreaChart(document.getElementById('grafico-alcalinidade'))
    chart.draw(data, options)
}

function graficoPh() {
    const data = google.visualization.arrayToDataTable([
        ['Dia', 'PH'],
        ['1', 6],
        ['2', 7.2],
        ['3', 5.3],
        ['4', 6.7]
    ]);

    const options = {
        title: 'PH nas últimas 4 semanas',
        hAxis: { title: 'Semanas', titleTextStyle: { color: '#0000ff' } },
        vAxis: { minValue: 0 }
    };

    const chart = new google.visualization.AreaChart(document.getElementById('grafico-ph'));
    chart.draw(data, options);
}

function graficoTemperatura() {
    const data = google.visualization.arrayToDataTable([
    ['Dia', 'Temperatura'],
        ['1', 27],
        ['2', 24],
        ['3', 29],
        ['4', 22]
    ]);

    const options = {
    title: 'Temperatura nas últimas 4 semanas',
        hAxis: { title: 'Semanas', titleTextStyle: { color: '#f00' } },
        vAxis: { minValue: 0 }
    };

    const chart = new google.visualization.AreaChart(document.getElementById('grafico-temperatura'));
    chart.draw(data, options);
}