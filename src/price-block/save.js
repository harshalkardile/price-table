import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const {type, description, pricebox, pricedesc, specs, mback, getstarted, } = attributes;
	
	return (
		<div 
		{ ...useBlockProps.save() }>
			<RichText.Content tagName="h4" value={ type } />
			<RichText.Content tagName="p" value={ description } />
            <RichText.Content tagName="h2" value={ pricebox } />
            <RichText.Content tagName="p3" value={ pricedesc } />
            <RichText.Content tagName="li" value={ specs } />
            <RichText.Content tagName="p4" value={ mback } />
            <RichText.Content tagName="button" value={ getstarted } />
		</div>
	);
}