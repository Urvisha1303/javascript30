const findTenMostPopulatedCountries = ()=> {
    return countries_data.map(country => ({name: country.name, population : country.population}))
    .sort((a,b)=> b.population - a.population)
    .slice(0,10)
}
console.log(findTenMostPopulatedCountries());

const findTenMostSpokenLanguges = ()=>{
    let count ={};
    countries_data.forEach(country => {
        country.languages.forEach(languages=>{
            if(count[languages]){
                count[languages]++
            }else{
                count [languages]= 1
            }
        })
    })
    // console.log(count);
    
    const countArray = Object.keys(count).map(language =>({name: language, count : count[language]}))
    // console.log(countArray);
    const countSort = countArray.sort((a,b)=> b.count - a.count ).slice(0,10)
    return countSort;
    
   
}
console.log(findTenMostSpokenLanguges());

const renderPopulationData = () => {
    const started = document.querySelector('.get-started');
    started.innerHTML = '';  // Clear previous content
    const countriesObject = findTenMostPopulatedCountries();
    const maxPopulation = Math.max(...countriesObject.map(country => country.population));
    countriesObject.forEach((country) => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country_item');
        const nameDiv = document.createElement('div');
        nameDiv.id = 'name'
        nameDiv.textContent = `${country.name}`;
        countryDiv.appendChild(nameDiv);

        const polbarDiv = document.createElement('progress')
        polbarDiv.value = `${country.population}`;
        polbarDiv.max = maxPopulation;
        polbarDiv.id = 'polbar';
        const percentage = (country.population / maxPopulation) * 100;
        countryDiv.appendChild(polbarDiv);
        const countDiv = document.createElement('div');
        countDiv.id = 'number';
        countDiv.textContent = `${country.population}`;
        countryDiv.appendChild(countDiv);

        started.appendChild(countryDiv);
    });
}

const renderLanguageData = () => {
    const started = document.querySelector('.get-started');
    started.innerHTML = '';
    const languagesObject = findTenMostSpokenLanguges();
    languagesObject.forEach((language) => {
        const languageDiv = document.createElement('div');
        languageDiv.classList.add('language-item'); // Adding a class for styling purposes
        const nameDiv = document.createElement('div');
        nameDiv.id = 'name'
        nameDiv.textContent = `${language.name}`;
        languageDiv.appendChild(nameDiv);

        // <progress id="file" value="32" max="100"> 32% </progress>

        const polbarDiv = document.createElement('progress')
        polbarDiv.value = `${language.count}`;

        polbarDiv.max = '100';
        polbarDiv.id = 'polbar';
        languageDiv.appendChild(polbarDiv);


        const countDiv = document.createElement('div');
        countDiv.id = 'number';
        countDiv.textContent = `${language.count}`;
        languageDiv.appendChild(countDiv);
        started.appendChild(languageDiv);
    });
}

document.getElementById('populationButton').addEventListener('click', renderPopulationData);
document.getElementById('languagesButton').addEventListener('click', renderLanguageData);


