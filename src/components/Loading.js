import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const loading = () => (
    <div>
        <Segment>
            <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>
        </Segment>
    </div>
);

export default loading;
