import React from 'react';

import {Card} from '../card/card.component';
import './../card-list/card-list.style.css'

export const CardList = props => (
    <div className="card-list">{
    props.kitty.map(kitty => (
        <Card key={kitty.id} kitty={kitty}/>
    ))}
    </div>
);