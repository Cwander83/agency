 <?
  // Register a custom column pattern
  function register_custom_patterns()
  {
    // register_block_pattern(
    //   'my-theme/two-columns', // Unique name for the pattern
    //   array(
    //     'title'       => __('Two Columns', 'my-theme'),
    //     'categories'  => array('containers'),
    //     'keywords'    => array('columns', 'layout'), // Optional: For easier searching
    //     'description' => __('A simple two-column layout.', 'my-theme'), // Optional
    //     'content'     => '<div class="wp-block-columns">
    //                      <div class="wp-block-column"></div>
    //                      <div class="wp-block-column"></div>
    //                      </div>
    //                    ',
    //   )
    // );
  }
  add_action('init', 'register_custom_patterns');



  ?>