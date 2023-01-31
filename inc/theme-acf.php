<?php
/**
 * Setup ACF option pages for globally defined content
 */
if( function_exists( 'acf_add_options_page' ) ) {
  /** ACF fields for site wide details */
  acf_add_options_page(
    array(
      'page_title' => 'Theme',
      'menu_title' => 'Theme',
      'menu_slug' => 'theme',
      'capability' => 'edit_posts',
      'redirect' => false
    )
  );
}