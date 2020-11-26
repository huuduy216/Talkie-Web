import {extend} from 'flarum/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';

const translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.nav.';

export default function () {
    extend(IndexPage.prototype, 'navItems', function (items) {
            items.add('catchthefish-rankings', LinkButton.component({
                icon: 'fas fa-fish',
                children: app.translator.trans(translationPrefix + 'rankings'),
                href: 'https://www.facebook.com/talkievn',
            }));
    });
}