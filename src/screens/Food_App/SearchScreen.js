import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from './components/SearchBar';
import yelp from '../Food_App/api/yelp';
import ResultList from './components/ResultList';
 
const SearchScreen = () => {
    const [term, setterm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async(searchTerm) => {
       try{                                                               //console.log(yelp);
        const response = await yelp.get('/search',{
            params: {
                limit: 10,
                q: searchTerm
            }
        });
                                                           //console.log(results);      //console.log(response);
        setResults(response.data.restaurants);
        } catch(e){
            setErrorMessage('Something Went Wrong!');
        }
    };
    
     useEffect(() => {                            // useEffect is used to display initial default screen 
         searchApi('barbeque');
        }, []);

        const filterResultsByPrice = (price_range) => {
            //price_range == '1'|| '2' || '3' || '4' || '5'
            return results.filter(result => {
                return result.price_range === price_range;
            });
        };

    return (
        <View>
            <SearchBar 
             term = {term}
             onTermChange = {(newTerm) => setterm(newTerm)}
             onTermSubmit = {() => searchApi(searchTerm)}
             />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ResultList results = {filterResultsByPrice('1')} title = "Cost Effective"/>
            <ResultList results = {filterResultsByPrice('2')} title = "Bit Pricier"/>
            <ResultList results = {filterResultsByPrice('3')} title  = "Big Spender"/>
        </View>
    );
};
const styles = StyleSheet.create({});
export default SearchScreen;