import app from 'flarum/app';
import {extend} from 'flarum/extend'
import HeaderPrimary from 'flarum/components/HeaderPrimary'

app.initializers.add('joseph-always-show-suggestion', function () {
  extend(HeaderPrimary.prototype, 'config', function(isInitialized, context){
    if (isInitialized) return;
      const contentContainer = document.getElementsByClassName('App-content')[0]
    if (window.location.pathname === '/' || window.location.pathname === '/flarum/public/'){
      contentContainer.classList.add('mr-0')
    } else {
      contentContainer.classList.remove('mr-0')
    }
  })
});
