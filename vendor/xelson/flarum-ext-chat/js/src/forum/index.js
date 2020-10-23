import {extend} from 'flarum/extend';
import HeaderPrimary from 'flarum/components/HeaderPrimary';
import ChatFrame from './components/ChatFrame';

app.initializers.add('pushedx-chat', app =>
{
    extend(HeaderPrimary.prototype, 'items', function(items) 
    {
        m.redraw.strategy('diff');
        items.add('pushedx-chat-frame', <ChatFrame />);
    });
});
