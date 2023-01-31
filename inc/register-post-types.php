<?php
/**
 * Register custom post type "insight"
 */
register_post_type(
  'insight',
  array(
    'label' => __( 'insights', 'avia' ),
    'description' => __( 'inights', 'avia' ),
    'labels' => array(
      'name' => _x( 'Insight', 'Post Type General Name', 'avia' ),
      'singular_name' => _x( 'Insight', 'Post Type Singular Name', 'avia' ),
      'menu_name' => __( 'Insights', 'avia' ),
      'parent_item_colon' => __( 'Insight', 'avia' ),
      'all_items' => __( 'Insights', 'avia' ),
      'view_item' => __( 'Insight', 'avia' ),
      'add_new_item' => __( 'Add New', 'avia' ),
      'add_new' => __( 'Add New', 'avia' ),
      'edit_item' => __( 'Insight', 'avia' ),
      'update_item' => __( 'Insight', 'avia' ),
      'search_items' => __( 'Insights', 'avia' ),
      'not_found' => __( 'Not Found', 'avia' ),
      'not_found_in_trash' => __( 'Not found in Trash', 'avia' )
    ),
    'supports' => array(
      'title',
      'revisions'
    ),
    'taxonomies' => array( 'category' ),
    'hierarchical' => false,
    'public' => true,
    'show_in_rest' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'show_in_nav_menus' => true,
    'show_in_admin_bar' => true,
    'menu_position' => 5,
    'can_export' => true,
    'rewrite' => array(
      'slug' => 'insights',
      'with_front' => false
    ),
    'has_archive' => true,
    'exclude_from_search' => true,
    'publicly_queryable' => true,
    'capability_type' => 'page'
  )
);
/**
 * Register custom post type "person"
 */
register_post_type(
  'person',
  array(
    'label' => __( 'people', 'avia' ),
    'description' => __( 'people', 'avia' ),
    'labels' => array(
      'name' => _x( 'Person', 'Post Type General Name', 'avia' ),
      'singular_name' => _x( 'Person', 'Post Type Singular Name', 'avia' ),
      'menu_name' => __( 'People', 'avia' ),
      'parent_item_colon' => __( 'Person', 'avia' ),
      'all_items' => __( 'People', 'avia' ),
      'view_item' => __( 'Person', 'avia' ),
      'add_new_item' => __( 'Add New', 'avia' ),
      'add_new' => __( 'Add New', 'avia' ),
      'edit_item' => __( 'Person', 'avia' ),
      'update_item' => __( 'Person', 'avia' ),
      'search_items' => __( 'People', 'avia' ),
      'not_found' => __( 'Not Found', 'avia' ),
      'not_found_in_trash' => __( 'Not found in Trash', 'avia' )
    ),
    'supports' => array(
      'title',
      'revisions',
      'editor'
    ),
    'hierarchical' => false,
    'public' => true,
    'show_in_rest' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'show_in_nav_menus' => true,
    'show_in_admin_bar' => true,
    'menu_position' => 5,
    'can_export' => true,
    'has_archive' => true,
    'exclude_from_search' => true,
    'publicly_queryable' => true,
    'capability_type' => 'page'
  )
);
/**
 * Register custom post type "news-item"
 */
register_post_type(
  'news-item',
  array(
    'label' => __( 'news', 'avia' ),
    'description' => __( 'news', 'avia' ),
    'labels' => array(
      'name' => _x( 'News', 'Post Type General Name', 'avia' ),
      'singular_name' => _x( 'News', 'Post Type Singular Name', 'avia' ),
      'menu_name' => __( 'News', 'avia' ),
      'parent_item_colon' => __( 'News', 'avia' ),
      'all_items' => __( 'News', 'avia' ),
      'view_item' => __( 'News', 'avia' ),
      'add_new_item' => __( 'News', 'avia' ),
      'add_new' => __( 'Add News', 'avia' ),
      'edit_item' => __( 'News', 'avia' ),
      'update_item' => __( 'News', 'avia' ),
      'search_items' => __( 'News', 'avia' ),
      'not_found' => __( 'Not Found', 'avia' ),
      'not_found_in_trash' => __( 'Not found in Trash', 'avia' )
    ),
    'supports' => array(
      'title',
      'revisions',
      'editor'
    ),
    'hierarchical' => false,
    'public' => true,
    'show_in_rest' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'show_in_nav_menus' => true,
    'show_in_admin_bar' => true,
    'menu_position' => 5,
    'can_export' => true,
    'rewrite' => array(
      'slug' => 'news',
      'with_front' => false
    ),
    'has_archive' => true,
    'exclude_from_search' => true,
    'publicly_queryable' => true,
    'capability_type' => 'page'
  )
);
/**
 * Register custom post type "event"
 */
register_post_type(
  'event',
  array(
    'label' => __( 'events', 'avia' ),
    'description' => __( 'events', 'avia' ),
    'labels' => array(
      'name' => _x( 'Events', 'Post Type General Name', 'avia' ),
      'singular_name' => _x( 'Event', 'Post Type Singular Name', 'avia' ),
      'menu_name' => __( 'Events', 'avia' ),
      'parent_item_colon' => __( 'Events', 'avia' ),
      'all_items' => __( 'Events', 'avia' ),
      'view_item' => __( 'Events', 'avia' ),
      'add_new_item' => __( 'Events', 'avia' ),
      'add_new' => __( 'Add Event', 'avia' ),
      'edit_item' => __( 'Events', 'avia' ),
      'update_item' => __( 'Events', 'avia' ),
      'search_items' => __( 'News', 'avia' ),
      'not_found' => __( 'Not Found', 'avia' ),
      'not_found_in_trash' => __( 'Not found in Trash', 'avia' )
    ),
    'supports' => array(
      'title',
      'revisions',
      'editor'
    ),
    'hierarchical' => false,
    'public' => true,
    'show_in_rest' => true,
    'show_ui' => true,
    'show_in_menu' => true,
    'show_in_nav_menus' => true,
    'show_in_admin_bar' => true,
    'menu_position' => 5,
    'can_export' => true,
    'rewrite' => array(
      'slug' => 'events',
      'with_front' => false
    ),
    'has_archive' => true,
    'exclude_from_search' => true,
    'publicly_queryable' => true,
    'capability_type' => 'page'
  )
);