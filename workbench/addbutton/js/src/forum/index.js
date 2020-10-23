
import app from 'flarum/app';
import AddButton from './components/AddButton';

app.initializers.add('michaelbelgium-discussion-views', function () {
    AddButton();
});