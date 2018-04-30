import React, { Component } from 'react';
import {View, Animated, TouchableWithoutFeedback} from 'react-native';

class Ball extends Component {

    componentWillMount(){
        this.moveBall();
    }

    moveBall(){
        const endPosition = {x:200, y:500};
        this.position = new Animated.ValueXY(0,0);
        Animated.spring(this.position, {
            toValue: endPosition
        }).start();
    }

    render(){
        return (
            <TouchableWithoutFeedback onPress={this.moveBall()}>
                <Animated.View style={this.position.getLayout() } >
                        <View style={styles.ball} />
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    ball: {
        height:60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'blue'
    }
};

export default Ball;