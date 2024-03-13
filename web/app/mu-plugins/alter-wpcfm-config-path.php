<?php
/*
  Plugin Name: Alter wpcfm config path
  Description: Alters the wpcfm config path
  Author: Digital Polygon
  Version: 1.0
  Author URI: https://www.digitalpolygon.com/
*/

/**
 * Change the config directory path for WP CFM.
 */
function alter_config_dir() {
  return dirname(WP_CONTENT_DIR) . '/private/config';
}

/**
 * Alter WP CFM config URL
 */
function alter_config_url() {
  return dirname(WP_CONTENT_DIR) . '/private/config';
}

// Tell wp-cfm where our config files live
add_filter('wpcfm_config_dir', 'alter_config_dir');
add_filter('wpcfm_config_url', 'alter_config_url');
