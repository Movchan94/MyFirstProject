import React from 'react';
import styles from './Music.module.css'
import dmx from './../common/tracks/dmx.mp3';
import Rammstein from './../common/tracks/rammstein_-_deutschland_(zf.fm).mp3';
import Eminem from './../common/tracks/eminem_-_not_afraid_(zvukoff.ru).mp3';




class Music extends React.Component {
    render() {
        return (
            <div className={styles.tracks}>
                <div>
                   <span className={styles.track}>DMX - </span><audio className= {styles.audioPlayer} src= {dmx} controls/>
                </div>
                <div>
                    <span className={styles.track}>Rammstein - </span><audio className= {styles.audioPlayer} src= {Rammstein} controls/>
                </div>
                <div>
                    <span className={styles.track}>Eminem - </span><audio className= {styles.audioPlayer} src = {Eminem} controls/>
                </div>
            </div>

        );
    }
}


export default Music
