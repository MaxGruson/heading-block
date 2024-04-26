/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps, RichText} from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {

	return (
		<>
		{/* Main block zone */}
		<div { ...useBlockProps() }>
			<RichText 
				tagName='h2'
				allowedFormats={[]}
				value={attributes.heading}
				onChange={(heading) => setAttributes({heading})}
				placeholder={__( 'Koptekst', 'heading-block')}
				required
			/>
			<RichText 
				tagName='h3'
				allowedFormats={[]}
				value={attributes.subheading}
				onChange={(subheading) => setAttributes({subheading})}
				placeholder={__( 'Onderkoptekst', 'heading-block')}
				required
			/>
		</div>
		{/* End Main block zone */}
		</>
	);
}
