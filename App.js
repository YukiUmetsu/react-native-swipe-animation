import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from "./src/Deck";
import {Button, Card} from "react-native-elements";

const DATA = [
    { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
    { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {deckRenderCount: 0};
    }

    renderCard(item){
        return (
            <Card
                key={item.id}
                title={item.text}
                image={{uri: item.uri}}
            >
                <Text style={{ marginBottom: 10}}>
                    Customize the card
                </Text>
                <Button icon={{name: 'code'}} backgroundColor="#30A9F4" title="View Now!"/>
            </Card>
        );
    }


    getData(){
        if(this.state.deckRenderCount === 0){
            return DATA;
        } else {
            return DATA.map((item, dataIndex)=> {
                return {...item, id: this.getNextId(dataIndex)};
            });
        }
    }

    getNextId(dataIndex){
        return DATA.length*this.state.deckRenderCount+(dataIndex+1);
    }

    getMoreCards(lastIndex){
        this.setState({deckRenderCount: lastIndex+1});
    }

    render() {
        return (
          <View style={styles.container}>
            <Deck
                data={this.getData()}
                renderCard={this.renderCard}
                getMoreCards={this.getMoreCards.bind(this)}
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
