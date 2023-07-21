

// Get all the countries from Asia continent/region using Filter function
const asiaCountries = countriesData.filter(country => country.region === 'Asia');

// Get all the countries with a population of less than 2 lakhs using Filter function
const countriesWithLessThan2LakhsPop = countriesData.filter(country => country.population < 200000);

// Print the following details name, capital, flag using forEach function
countriesData.forEach(country => {
  console.log(`Name: ${country.name.common}, Capital: ${country.capital[0]}, Flag: ${country.flags.png}`);
});

//Print the total population of countries using reduce function
const totalPopulation = countriesData.reduce((acc, country) => acc + country.population, 0);
console.log(`Total Population: ${totalPopulation}`);

// Print the country which uses US Dollars as currency.
const countryUsingUSDollars = countriesData.find(country => country.currencies && country.currencies.USD);
if (countryUsingUSDollars) {
  console.log(`Country using US Dollars: ${countryUsingUSDollars.name.common}`);
} else {
  console.log("No country uses US Dollars as currency.");
}
