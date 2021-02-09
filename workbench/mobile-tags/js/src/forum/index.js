import { extend } from 'flarum/extend';
import DiscussionListItem from 'flarum/components/DiscussionListItem';

import tagsLabel from 'flarum/tags/helpers/tagsLabel';
//import sortTags from 'flarum/tag/utils/sortTags';

app.initializers.add('tags', function() {
  // Add tag labels to each discussion in the discussion list.
  extend(DiscussionListItem.prototype, 'infoItems', function(items) {
    const tags = this.props.discussion.tags();

    if (tags && tags.length) {
      let itemClassName = ""
      if (tags.length == 1) {
        itemClassName = "item-tags-single"
      }
      else if (tags.length == 2) {
         itemClassName = "item-tags-double"
      }
      items.replace('tags', { ...tagsLabel(tags), itemClassName}, 10);
    }
  });

});