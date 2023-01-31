<?php
/**
 * Register custom taxonomy "topic"
 *
 */
register_taxonomy(
  'news-topic',
  array( 'news-item' ),
  array(
    'labels' => array(
      'name' => _x( 'Topics', 'Taxonomy General Name', 'avia' ),
      'singular_name' => _x( 'Topic', 'Taxonomy Singular Name', 'avia' ),
      'menu_name' => __( 'Topics', 'avia' ),
      'all_items' => __( 'All Topics', 'avia' ),
      'parent_item' => __( 'Parent Topic', 'avia' ),
      'parent_item_colon' => __( 'Parent Topic:', 'avia' ),
      'new_item_name' => __( 'New Topic Name', 'avia' ),
      'add_new_item' => __( 'Add New Topic', 'avia' ),
      'edit_item' => __( 'Edit Topic', 'avia' ),
      'update_item' => __( 'Update Topic', 'avia' ),
      'view_item' => __( 'View Topic', 'avia' ),
      'separate_items_with_commas' => __( 'Separate topics with commas', 'avia' ),
      'add_or_remove_items' => __( 'Add or remove topics', 'avia' ),
      'choose_from_most_used' => __( 'Choose from the most used', 'avia' ),
      'popular_items' => __( 'Popular Topics', 'avia' ),
      'search_items' => __( 'Search Topics', 'avia' ),
      'not_found' => __( 'Not Found', 'avia' ),
      'no_terms' => __( 'No Topics', 'avia' ),
      'items_list' => __( 'Topic list', 'avia' ),
      'items_list_navigation' => __( 'Topic list navigation', 'avia' ),
    ),
    'hierarchical' => false,
    'public' => true,
    'show_ui' => true,
    'show_admin_column' => true,
    'show_in_nav_menus' => true,
    'show_in_rest' => true
  )
);
/**
 * Register custom taxonomy "topic"
 *
 */
register_taxonomy(
  'event-topic',
  array( 'event' ),
  array(
    'labels' => array(
      'name' => _x( 'Topics', 'Taxonomy General Name', 'avia' ),
      'singular_name' => _x( 'Topic', 'Taxonomy Singular Name', 'avia' ),
      'menu_name' => __( 'Topics', 'avia' ),
      'all_items' => __( 'All Topics', 'avia' ),
      'parent_item' => __( 'Parent Topic', 'avia' ),
      'parent_item_colon' => __( 'Parent Topic:', 'avia' ),
      'new_item_name' => __( 'New Topic Name', 'avia' ),
      'add_new_item' => __( 'Add New Topic', 'avia' ),
      'edit_item' => __( 'Edit Topic', 'avia' ),
      'update_item' => __( 'Update Topic', 'avia' ),
      'view_item' => __( 'View Topic', 'avia' ),
      'separate_items_with_commas' => __( 'Separate topics with commas', 'avia' ),
      'add_or_remove_items' => __( 'Add or remove topics', 'avia' ),
      'choose_from_most_used' => __( 'Choose from the most used', 'avia' ),
      'popular_items' => __( 'Popular Topics', 'avia' ),
      'search_items' => __( 'Search Topics', 'avia' ),
      'not_found' => __( 'Not Found', 'avia' ),
      'no_terms' => __( 'No Topics', 'avia' ),
      'items_list' => __( 'Topic list', 'avia' ),
      'items_list_navigation' => __( 'Topic list navigation', 'avia' ),
    ),
    'hierarchical' => false,
    'public' => true,
    'show_ui' => true,
    'show_admin_column' => true,
    'show_in_nav_menus' => true,
    'show_in_rest' => true
  )
);