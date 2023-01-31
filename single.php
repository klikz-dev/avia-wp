<?php
/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::context();
$timber_post = Timber::query_post();
$context['post'] = $timber_post;

if ( is_singular ( 'insight' ) ) {
  $context['categories'] = get_categories();
  $context['parent_category'] = get_post_type_archive_link( 'insight' );
}

if ( is_singular ( 'news-item' ) ) {
  $context['categories'] = get_terms( 'news-topic' );
}

if ( is_singular ( 'event' ) ) {
  $context['categories'] = get_terms( 'event-topic' );
}

if ( post_password_required( $timber_post->ID ) ) {
	Timber::render( 'single-password.twig', $context );
} else {
	Timber::render( array( 'single-' . $timber_post->ID . '.twig', 'single-' . $timber_post->post_type . '.twig', 'single-' . $timber_post->slug . '.twig', 'single.twig' ), $context );
}