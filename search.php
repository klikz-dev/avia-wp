<?php
/**
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.2
 */

$templates = array( 'search.twig', 'archive.twig', 'index.twig' );
$context = Timber::context();

$query = array(
    's' => get_search_query(),
    'post_type' => $_GET['post_type']
);

$context['search_query'] = get_search_query();
$context['posts'] = new Timber\PostQuery($query, $_GET['post_type']);
$context['pagination'] = Timber::get_pagination();

Timber::render( $templates, $context );