import Component from '../../common/Component';
import Button from '../../common/components/Button';
import LogInModal from './LogInModal';
import SignUpModal from './SignUpModal';
import SessionDropdown from './SessionDropdown';
import SelectDropdown from '../../common/components/SelectDropdown';
import NotificationsDropdown from './NotificationsDropdown';
import ItemList from '../../common/utils/ItemList';
import listItems from '../../common/helpers/listItems';

/**
 * The `HeaderSecondary` component displays secondary header controls, such as
 * the search box and the user menu. On the default skin, these are shown on the
 * right side of the header.
 */
export default class HeaderSecondary extends Component {
  view() {
    return <ul className="Header-controls">{listItems(this.items().toArray())}</ul>;
  }

  config(isInitialized, context) {
    // Since this component is 'above' the content of the page (that is, it is a
    // part of the global UI that persists between routes), we will flag the DOM
    // to be retained across route changes.
    context.retain = true;
  }

  /**
   * Build an item list for the controls.
   *
   * @return {ItemList}
   */
  animateSignUp(){
    const svg = `<svg class="item-signUp" type="button" title="Đăng ký" viewBox="-1 0 50 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="46" height="17" fill="#E5E5E5"/>
    <g id="Frame1">
    <rect width="46" height="17" fill="white"/>
    <text id="dd" dominant-baseline="text-after-edge" fill="#667C99" xml:space="preserve" style="white-space: pre" font-family="system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Ubuntu,Cantarell,Oxygen,Roboto,Helvetica,Arial,sans-serif" font-size="13" letter-spacing="0em"><tspan x="-1" y="13.1016">&#x110;</tspan></text>
    <text id="aw" dominant-baseline="text-after-edge" fill="#667C99" xml:space="preserve" style="white-space: pre" font-family="system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Ubuntu,Cantarell,Oxygen,Roboto,Helvetica,Arial,sans-serif" font-size="13" letter-spacing="0em"><tspan x="8" y="13.1016">&#x103;</tspan></text>
    <text id="n" dominant-baseline="text-after-edge" fill="#667C99" xml:space="preserve" style="white-space: pre" font-family="system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Ubuntu,Cantarell,Oxygen,Roboto,Helvetica,Arial,sans-serif" font-size="13" letter-spacing="0em"><tspan x="15" y="13.1016">n</tspan></text>
    <text id="g" dominant-baseline="text-after-edge" fill="#667C99" xml:space="preserve" style="white-space: pre" font-family="system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Ubuntu,Cantarell,Oxygen,Roboto,Helvetica,Arial,sans-serif" font-size="13" letter-spacing="0em"><tspan x="22" y="13.1016">g</tspan></text>
    <text id="k" dominant-baseline="text-after-edge" fill="#667C99" xml:space="preserve" style="white-space: pre" font-family="system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Ubuntu,Cantarell,Oxygen,Roboto,Helvetica,Arial,sans-serif" font-size="13" letter-spacing="0em"><tspan x="32" y="13.1016">k</tspan></text>
    <text id="ys" dominant-baseline="text-after-edge" fill="#667C99" xml:space="preserve" style="white-space: pre" font-family="system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Ubuntu,Cantarell,Oxygen,Roboto,Helvetica,Arial,sans-serif" font-size="13" letter-spacing="0em"><tspan x="39" y="13.1016">&#xfd;</tspan></text>
    </g>
    </svg>`;
    return m('div',[m.trust(svg)])
  }
  animateLogIn(){
    const svg = `<svg class="item-logIn" type="button" title="Đăng nhập" viewBox="0 -1 61 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="61" height="18" fill="#E5E5E5"/>
    <g id="Frame2">
    <rect width="61" height="18" fill="white"/>
    <text id="n_3" dominant-baseline="text-after-edge" fill="#667C99" xml:space="preserve" style="white-space: pre" font-family="system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Ubuntu,Cantarell,Oxygen,Roboto,Helvetica,Arial,sans-serif" font-size="13" letter-spacing="0em"><tspan x="33" y="13.1016">n</tspan></text>
    <text id="h" dominant-baseline="text-after-edge" fill="#667C99" xml:space="preserve" style="white-space: pre" font-family="system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Ubuntu,Cantarell,Oxygen,Roboto,Helvetica,Arial,sans-serif" font-size="13" letter-spacing="0em"><tspan x="40" y="13.1016">h</tspan></text>
    <text id="aaj" dominant-baseline="text-after-edge" fill="#667C99" xml:space="preserve" style="white-space: pre" font-family="system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Ubuntu,Cantarell,Oxygen,Roboto,Helvetica,Arial,sans-serif" font-size="13" letter-spacing="0em"><tspan x="47" y="13.1016">&#x1ead;</tspan></text>
    <text id="p" dominant-baseline="text-after-edge" fill="#667C99" xml:space="preserve" style="white-space: pre" font-family="system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Ubuntu,Cantarell,Oxygen,Roboto,Helvetica,Arial,sans-serif" font-size="13" letter-spacing="0em"><tspan x="54" y="13.1016">p</tspan></text>
    <text id="aw_2" dominant-baseline="text-after-edge" fill="#667C99" xml:space="preserve" style="white-space: pre" font-family="system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Ubuntu,Cantarell,Oxygen,Roboto,Helvetica,Arial,sans-serif" font-size="13" letter-spacing="0em"><tspan x="9" y="13.1016">&#x103;</tspan></text>
    <text id="n_2" dominant-baseline="text-after-edge" fill="#667C99" xml:space="preserve" style="white-space: pre" font-family="system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Ubuntu,Cantarell,Oxygen,Roboto,Helvetica,Arial,sans-serif" font-size="13" letter-spacing="0em"><tspan x="16" y="13.1016">n</tspan></text>
    <text id="g_2" dominant-baseline="text-after-edge" fill="#667C99" xml:space="preserve" style="white-space: pre" font-family="system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Ubuntu,Cantarell,Oxygen,Roboto,Helvetica,Arial,sans-serif" font-size="13" letter-spacing="0em"><tspan x="23" y="13.1016">g</tspan></text>
    <text id="dd_2" dominant-baseline="text-after-edge" fill="#667C99" xml:space="preserve" style="white-space: pre" font-family="system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Ubuntu,Cantarell,Oxygen,Roboto,Helvetica,Arial,sans-serif" font-size="13" letter-spacing="0em"><tspan x="0" y="13.1016">&#x110;</tspan></text>
    </g>
    </svg>`;
    return m('div',[m.trust(svg)])
  }
  items() {
    const items = new ItemList();

    items.add('search', app.search.render(), 30);

    if (app.forum.attribute('showLanguageSelector') && Object.keys(app.data.locales).length > 1) {
      const locales = [];

      for (const locale in app.data.locales) {
        locales.push(
          Button.component({
            active: app.data.locale === locale,
            children: app.data.locales[locale],
            icon: app.data.locale === locale ? 'fas fa-check' : true,
            onclick: () => {
              if (app.session.user) {
                app.session.user.savePreferences({ locale }).then(() => window.location.reload());
              } else {
                document.cookie = `locale=${locale}; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
                window.location.reload();
              }
            },
          })
        );
      }

      items.add(
        'locale',
        SelectDropdown.component({
          children: locales,
          buttonClassName: 'Button Button--link',
        }),
        20
      );
    }

    if (app.session.user) {
      items.add('notifications', NotificationsDropdown.component(), 10);
      items.add('session', SessionDropdown.component(), 0);
    } else {
      if (app.forum.attribute('allowSignUp')) {
        items.add(
          'signUp',
          Button.component({
            children: this.animateSignUp(),
            className: 'Button Button--link',
            onclick: () => app.modal.show(new SignUpModal()),
          }),
          10
        );
      }

      items.add(
        'logIn',
        Button.component({
          children: this.animateLogIn(),
          className: 'Button Button--link',
          onclick: () => app.modal.show(new LogInModal()),
        }),
        0
      );
    }

    return items;
  }
}
