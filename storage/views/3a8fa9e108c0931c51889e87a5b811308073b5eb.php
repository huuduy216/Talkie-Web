Hey <?php echo e($user->username); ?>,

<?php echo e($blueprint->post->user->username); ?> posted in a private discussion with you as recipient, titled '<?php echo e($blueprint->post->discussion->title); ?>'.

View it here: <?php echo e(app()->url()); ?>/d/<?php echo e($blueprint->post->discussion->id); ?>-<?php echo e($blueprint->post->discussion->slug); ?>/<?php echo e($blueprint->post->number); ?>

