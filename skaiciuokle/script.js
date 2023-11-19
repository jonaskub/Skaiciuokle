function calculate (){
    const lubuIlgis = document.getElementById('plotislub').value;
    const lubuPlotis = document.getElementById('ilgislub').value;
    const plotas = (lubuIlgis*lubuPlotis).toFixed(2);
    document.getElementById('plotas').innerText = `Lubu plotas yra: ${plotas}m²`
}