<?php
/**
 * Sets the directories (inside your theme) to find .twig files
 */
Timber::$dirname = array( 'views' );
/**
 * Configure our theme inside of a subclass of Timber\Site
 */
class Avia extends Timber\Site {

  public function __construct() {
    add_action( 'pre_get_posts', array( $this, 'archive_queries' ) );
    add_action( 'init', array( $this, 'register_image_crops' ) );
    add_action( 'init', array( $this, 'theme_acf' ) );
    add_action( 'init', array( $this, 'register_post_types' ) );
    add_action( 'init', array( $this, 'register_taxonomies' ) );
    add_action( 'init', array( $this, 'register_menus') );
    add_action( 'init', array( $this, 'posts-supports' ) );
    add_filter( 'timber/context', array( $this, 'add_to_context' ) );
    add_filter( 'timber/twig', array( $this, 'add_to_twig' ) );
    add_action( 'admin_menu', array( $this, 'admin_supports' ) );
    add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
    add_action( 'wp_enqueue_scripts', array( $this, 'theme_assets' ) );
    add_filter( 'nav_menu_css_class', array($this, 'add_active_class'), 10, 2 );
    parent::__construct();
  }

  public function archive_queries( $query ) {
    if( is_admin() ) {
      return $query;
    }

    if( isset( $query->query_vars['post_type'] ) && $query->query_vars['post_type'] == 'event' && $query->is_main_query() ) {
      $query->set('orderby', 'meta_value');
      $query->set('meta_key', 'event_date');
      $query->set('order', 'DESC');
    }

    if( isset( $query->query_vars['post_type'] ) && $query->query_vars['post_type'] == 'insight' && $query->is_main_query() ) {
      $query->set('posts_per_page', '9');
    }

    if( isset( $query->query_vars['post_type'] ) && $query->query_vars['post_type'] == 'news-item' && $query->is_main_query() ) {
      $query->set('posts_per_page', '9');
    }

    return $query;
  }

  /** Custom configuration for ACF plugin */
	public function theme_acf() {
	  require get_template_directory() . '/inc/theme-acf.php';
	}

  /** Register custom post types.  */
  public function register_post_types () {
    require get_template_directory() . '/inc/register-post-types.php';
  }

  /** Register custom taxonomies.  */
  public function register_taxonomies () {
    require get_template_directory() . '/inc/register-taxonomies.php';
  }

  public function add_active_class( $classes = array(), $menu_item = false ) {
    if ( $menu_item->id == 143 && (is_post_type_archive( 'insight' )) ) {
      $classes[] = 'current-menu-item';
    }
    if ( $menu_item->id == 143 && (is_singular( 'insight' )) ) {
      $classes[] = 'current-menu-item';
    }
    if ( $menu_item->id == 124 && (is_post_type_archive( 'news-item' )) ) {
      $classes[] = 'current-menu-item';
    }
    if ( $menu_item->id == 124 && (is_singular( 'news-item' )) ) {
      $classes[] = 'current-menu-item';
    }
    return $classes;
  }


  /** Register image crops */
  public function register_image_crops () {
    add_image_size( 'insight_thumbnail_featured', 714, 305, true );
    add_image_size( 'insight_thumbnail_above_fold', 525, 250, true );
    add_image_size( 'insight_thumbnail_below_fold', 155, 155, true );
    add_image_size( 'insight_thumbnail_masthead', 523, 489, true );
    add_image_size( 'insight_thumbnail_related_aside', 337, 195, true );
    add_image_size( 'insight_thumbnail_related_body', 337, 250, true );

    add_image_size( 'insight_body_figure', 660, 379, true );

    add_image_size( 'feature', 435, 529, true );

  }

  /** Register menus  */
  public function register_menus () {
    register_nav_menus(
      array(
        'header_menu' => __( 'Header' ),
        'footer_menu_one' => __( 'Footer Column One' ),
        'footer_menu_two' => __( 'Footer Column Two' ),
        'footer_menu_three' => __( 'Footer Utilities' )
      )
    );
  }

  public function theme_assets () {
    $theme = wp_get_theme();
    $version = $theme->get('Version');
    wp_enqueue_style( 'bundle', get_template_directory_uri() . '/dist/bundle.css', false, $version, 'all');
		wp_enqueue_script( 'bundle', get_template_directory_uri() . '/dist/bundle.js', false, $version, true);
    /** Remove injection of WordPress's wp-block-library CSS file in <head>  */
    wp_dequeue_style( 'wp-block-library' );
  }

  public function admin_supports () {
    /** Remove comments from admin  */
    remove_menu_page( 'edit-comments.php' );
    remove_menu_page('edit.php');
  }

  public function posts_supports () {
    /** Remove comment support  */
    remove_post_type_support( 'post', 'comments' );
    remove_post_type_support( 'page', 'comments' );
  }

  public function theme_supports () {
    /** Remove injection of WordPress's emoji support script in <head>  */
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    /** Remove injection of WordPress's emoji support inline styles in <head>  */
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    /** Remove injection of meta tag in <head> specifiying WordPress version publically. */
    remove_action( 'wp_head', 'wp_generator' );
    /** Remove injection of link in <head> for WordPress's default REST API. */
    remove_action( 'wp_head', 'rest_output_link_wp_head' );
    /** Remove injection of link in <head> to Windows Live Writer manifest. */
    remove_action( 'wp_head', 'wlwmanifest_link' );
    /** Remove injection of link in <head> to Really Simple Discovery service endpoint. */
    remove_action( 'wp_head', 'rsd_link' );
    /** Remove injection of JavaScript from wp_footer for embedded iframes.  */
    remove_action( 'wp_head', 'wp_oembed_add_host_js' );
    /** Let WordPress handle the <title> tag. */
    add_theme_support( 'title-tag' );
    /** Add admin support for menus */
    add_theme_support( 'menus' );
    /** Remove DNS prefetch link from WordPress <head>  */
    add_filter( 'emoji_svg_url', '__return_false' );
  }

  public function add_to_twig( $twig ) {
    function avia_in_array ( $key, $arr ) {
      return in_array( $key, $arr );
    }
    function avia_in_string ( $str, $key ) {
      return strpos( $str, $key ) !== false;
    }
    $twig->addFunction( new Timber\Twig_Function( 'avia_in_array', 'avia_in_array' ) );
    $twig->addFunction( new Timber\Twig_Function( 'avia_in_string', 'avia_in_string' ) );

    return $twig;
  }

  public function add_to_context( $context ) {
    $context['site']  = $this;

    /** Add menus to global context  */
    $args = array(
      'depth' => 3,
    );
    $context['header_menu'] = new \Timber\Menu( 'header_menu', $args );
    $context['footer_menu_one'] = new \Timber\Menu( 'footer_menu_one' );
    $context['footer_menu_two'] = new \Timber\Menu( 'footer_menu_two' );
    $context['footer_menu_three'] = new \Timber\Menu( 'footer_menu_three' );
    /** Add ACF options to global context  */
    $context['options'] = get_fields('option');

    return $context;
  }

}

new Avia();
