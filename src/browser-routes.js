import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import ListPostScreen from './components/routes/ListPostScreen';
import PostScreen from './components/routes/PostScreen';

export const routes = (
    <Switch>
        <Route path="/posts/:id" component={PostScreen} />
        <Route path="/posts" component={ListPostScreen} />
        <Route path="/" component={ListPostScreen} />
    </Switch>
);
