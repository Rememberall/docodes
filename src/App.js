import React from 'react';

import SearchResult from './SearchResult';
import SuperHero from './SuperHero'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Hello, world.</h1>
                    <p>This is awesome!</p>
                    <p>Hello</p>
                    <SearchResult
                        title="Pineapple - Wikipedia"
                        link="en.wikipedia.org/wiki/Pineapple"
                        content="The pineapple (Ananas comosus) is a tropical plant with edible multiple fruit consisting of coalesced berries, also called pineapples, and the most economically ..." />
                    <SearchResult
                        title="Rebecca"
                        link="er.løk.com"
                        content="DET ER HELT SANT"/>
                    <SearchResult
                        title="Martin"
                        link="dumpapp.com"
                        content="Cola mann"/>
                </div>
                <div style={{
                    textAlign: "center",
                }}>
                    <SuperHero
                        name="Wonder Woman"
                        info="Queen of the Amazon on Paradis Island."
                        imageURL="http://stuffpoint.com/dc-comics/image/222100-dc-comics-wonder-woman.jpg"
                    />
                    <SuperHero
                        name="Batman"
                        info="The Dark Knight of Gotham."
                        imageURL="https://s-media-cache-ak0.pinimg.com/236x/1b/57/74/1b57749d4389adae755593eb1d752f39.jpg"
                    />
                    <SuperHero
                        name="Raven"
                        info="The daughter of the demon Trigon."
                        imageURL="http://vignette1.wikia.nocookie.net/marvel_dc/images/4/4c/Raven_005.jpg/revision/latest?cb=20090729160957"
                    />
                </div>
            </div>
        );
    }
}



export default App;