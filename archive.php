<?php
/**
 * The template for displaying Archive pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.2
 */

$templates = array( 'archive.twig', 'index.twig' );

$context = Timber::context();
$context['posts'] = new Timber\PostQuery();

if ( is_post_type_archive( 'insight' ) ) {
  if ( isset( $_GET['category_name'] ) ) {
    $context['query'] = $_GET['category_name'];
  }
  $context['post'] = new Timber\Post( 'insights' );
  $context['categories'] = get_categories();
}

if ( is_post_type_archive( 'news-item' ) ) {
  if ( isset( $_GET['news-topic'] ) ) {
    $context['query'] = $_GET['news-topic'];
  }
  $context['post'] = new Timber\Post( 'news' );
  $context['categories'] = get_terms( 'news-topic' );
}

if ( is_post_type_archive( 'event' ) ) {
  if ( isset( $_GET['event-topic'] ) ) {
    $context['query'] = $_GET['event-topic'];
  }
  $context['post'] = new Timber\Post( 'events' );
  $context['categories'] = get_terms( 'event-topic' );
}

array_unshift( $templates, 'archive-' . get_post_type() . '.twig' );
Timber::render( $templates, $context );