<?php
// Register custom style for the core button block
function custom_block_styles()
{
    // Button
    register_block_style(
        'core/columns',
        array(
            'name'  => 'work',
            'label' => 'Work',
        )
    );
    // Button
    register_block_style(
        'core/button',
        array(
            'name'  => 'secondary',
            'label' => 'Secondary',
        )
    );

    // Button
    register_block_style(
        'core/button',
        array(
            'name'  => 'work-btn',
            'label' => 'Work',
        )
    );

    // Group
    register_block_style(
        'core/group',
        array(
            'name'  => 'secondary',
            'label' => 'Secondary',
        ),
    );

    // Heading
    register_block_style(
        'core/heading',
        array(
            'name' => 'page-hero',
            'label' => 'Page Hero',
        )
    );

    // Paragraph - Secondary
    register_block_style(
        'core/paragraph',
        array(
            'name' => 'secondary',
            'label' => 'Secondary',
        )
    );

    // Paragraph - Work Description
    register_block_style(
        'core/paragraph',
        array(
            'name' => 'work-description',
            'label' => 'Work Description',
        )
    );

    // Paragraph - Work Description
    register_block_style(
        'core/separator',
        array(
            'name' => 'accent',
            'label' => 'Accent',
        )
    );

    register_block_style(
        'core/group',
        array(
            'name' => 'full-width',
            'label' => 'Full Width'
        )
    );
}
add_action('init', 'custom_block_styles');
