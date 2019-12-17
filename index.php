<?php
/*
*  Plugin name: Magistrate Page Popups
*  Description: Adds entry popup to single blog post pages with the category 'magisterial-district-court'
*  Version: 1.0
*/

function addPopup() {
  if ( is_single() ) {
    if ( in_category( 'magisterial-district-court' ) ) {
      # Register Scripts and Styles
      $plugin_url = plugin_dir_url( __FILE__ );
      wp_register_style('addPopupStyles', $plugin_url . './css/main.css');
      wp_register_script('addPopupJS', $plugin_url . './js/main.js', '', '', true);
      wp_enqueue_style('addPopupStyles');
      wp_enqueue_script('addPopupJS');
    }
  }
}

add_action('wp', 'addPopup');

















