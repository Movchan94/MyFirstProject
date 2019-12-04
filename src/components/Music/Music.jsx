import React, { Component } from 'react';
import MIDISounds from "midi-sounds-react";


class Music extends Component {
    playTestInstrument() {
        this.midiSounds.playChordNow(3, [60], 2.5);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to midi-sounds-react example 1</h1>
                </header>
                <p className="App-intro">Press Play to play instrument sound.</p>
                <p><button onClick={this.playTestInstrument.bind(this)}>Play</button></p>
                <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />
            </div>
        );
    }
}

export default Music;