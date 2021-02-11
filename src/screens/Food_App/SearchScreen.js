import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from './components/SearchBar';
import yelp from '../Food_App/api/yelp';
import ResultList from './components/ResultList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            console.log("Searching term:" + term);
            const response = await yelp.get('/search', {
                params: {
                    count: 20,
                    q: term
                }
            });
            // console.log(response.data.restaurants);
            // console.log("Total result found:" + response.data.restaurants.length);
            setResults(response.data.restaurants);
        } catch (e) {
            setErrorMessage('Something Went Wrong!');
        }
    };

    useEffect(() => {                            // useEffect is used to display initial default screen 
        searchApi('barbeque');
    }, []);

    const filterResultsByPrice = (price_range) => {
        //price_range == '1'|| '2' || '3' || '4' || '5'
        //console.log("price_range:" + price_range);

        const filteredResult = results.filter(result => {
            //console.log(result.restaurant.price_range + " === " + price_range);
            return result.restaurant.price_range === price_range;
        });
        console.log("Filtered result by price_range:" + price_range, filteredResult.length);
        return filteredResult;
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi()}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ResultList results={filterResultsByPrice(1)} title="Cost Effective" />
            <ResultList results={filterResultsByPrice(2)} title="Bit Pricier" />
            <ResultList results={filterResultsByPrice(3)} title="Big Spender" />
            <ResultList results={filterResultsByPrice(4)} title="Bigger Spender" />

        </View>
    );
};
const styles = StyleSheet.create({});
export default SearchScreen;