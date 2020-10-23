import {extend}  from 'flarum/extend';
import app from 'flarum/app';
import PermissionGrid from 'flarum/components/PermissionGrid';
import ChatSettingsModal from './components/ChatSettingsModal'

app.initializers.add('pushedx-chat', app => {
    app.extensionSettings['xelson-chat'] = () => app.modal.show(new ChatSettingsModal());

    extend(PermissionGrid.prototype, 'replyItems', items => {
        items.add('pushedx-chat.permissions.chat', {
            icon: 'fas fa-comments',
            label: app.translator.trans('pushedx-chat.admin.permissions.post'),
            permission: 'pushedx-chat.permissions.chat'
        });
        items.add('pushedx-chat.permissions.edit', {
            icon: 'fas fa-pencil-alt',
            label: app.translator.trans('pushedx-chat.admin.permissions.edit'),
            permission: 'pushedx-chat.permissions.edit'
        });
        items.add('pushedx-chat.permissions.delete', {
            icon: 'far fa-trash-alt',
            label: app.translator.trans('pushedx-chat.admin.permissions.delete'),
            permission: 'pushedx-chat.permissions.delete'
        });
    });

    extend(PermissionGrid.prototype, 'moderateItems', items => {
        items.add('pushedx-chat.permissions.moderate.delete', {
            icon: 'far fa-trash-alt',
            label: app.translator.trans('pushedx-chat.admin.permissions.moderate.delete'),
            permission: 'pushedx-chat.permissions.moderate.delete'
        });
    });
});
