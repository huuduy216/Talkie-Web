Hey <?php echo $user->display_name; ?>!

<?php echo $blueprint->discussion->user->display_name; ?> made a discussion in a tag you're following: <?php echo $blueprint->discussion->title; ?>


To view the new discussion, check out the following link:
<?php echo app()->url(); ?>/d/<?php echo $blueprint->discussion->id; ?>


---

<?php echo $blueprint->post->content; ?>

