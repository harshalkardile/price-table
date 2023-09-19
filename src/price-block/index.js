import { registerBlockType } from '@wordpress/blocks';
import{ __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType('blocks-course/price-block',{
    title: __("Price Block", "price-table"),
    description: __("A specific price block", "price-table"),
    icon: 'table-col-after',
    parent: ["blocks-course/price-table"],
    supports: {
        reusable: false,
        html: false,
		color: {
            gradients: true,
            background: true
        },
        spacing:{
            padding: true
        }
    },
    attributes:{
        type:{
            type:"string",
            source: "html",
            selector: "h4"
        },
        description:{
            type: "string",
            source: "html",
            selector: "p"
        },
        pricebox:{
            type: "string",
            source: "html",
            selector: "h2"   
        },
        pricedesc:{
            type: "string",
            source: "html",
            selector: "p3"  
        },
        specs:{
            type: "string",
            source: "html",
            selector: "li"  
        },
        mback: {
            type: "string",
            source: "html",
            selector: "p4"  
        },
        getstarted:{
            type: "string",
            source: "html",
            selector: "button"  
        },
        // shadow:{
        //     type: "boolean",
		// 	default: false
        // }
		
    },
    edit: Edit,
    save: Save,
});