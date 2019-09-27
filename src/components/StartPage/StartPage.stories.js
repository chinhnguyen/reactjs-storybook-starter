import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StartPage from './StartPage';

export const actions = {};

storiesOf('StartPage', module).add('normal', () => <StartPage />);
