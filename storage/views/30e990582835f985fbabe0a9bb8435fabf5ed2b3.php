Hey <?php echo e($user->username); ?>!

<?php echo e($blueprint->discussion->user->username); ?> started a new private discussion with you as recipient, titled '<?php echo e($blueprint->discussion->title); ?>'.

View it here: <?php echo e(app()->url()); ?>/d/<?php echo e($blueprint->discussion->id); ?>-<?php echo e($blueprint->discussion->slug); ?>

