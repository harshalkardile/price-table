import { useBlockProps, RichText } from '@wordpress/block-editor';
import { PanelBody, ColorPalette } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
// import classnames from 'classnames';


export default function Edit( { attributes, setAttributes } ) {
    const {type, description, pricebox, pricedesc, specs, mback, getstarted, } = attributes;
    const onChangeType = (newType) =>{
        setAttributes({type:newType})
    }
    const onChangeDescription = (newDescription) =>{
        setAttributes({description:newDescription})
    }
    const onChangePricebox = (newPricebox) =>{
        setAttributes({pricebox:newPricebox})
    }
    const onChangePricedesc = (newPricedesc) =>{
        setAttributes({pricedesc:newPricedesc})
    }
    const onChangeSpecs = (newSpecs) =>{
        setAttributes({specs:newSpecs})
    }
    const onChangeMback = (newMback) =>{
        setAttributes({mback:newMback})
    }
    const onChangeGetstarted = (newGetstarted) =>{
        setAttributes({getstarted:newGetstarted})
    }
    // const toggleShadow = () =>{
    //     setAttributes({shadow: !shadow});
    // }
    // const classes = classnames('columnharsh', {
    //     'has-shadow': shadow,
    // });
  
	return( 
        <>
        {/* <BlockControls controls={[
            {
                icon: "admin-page",
                title: __('Shadow', 'price tables'),
                onClick: toggleShadow,
                isActive: shadow,
            },
        ]}/> */}

       
        <div
        {
            ...useBlockProps()
        }
        >

        <RichText
            placeholder={__('Plan Type', 'price-block')}
            tagName='h4'
            onChange={onChangeType}
            value={ type }
        />
        <RichText
            placeholder={__('Plan Description', 'price-block')}
            tagName='p'
            onChange={onChangeDescription}
            value={ description }
        />
        <RichText
            placeholder={__('Add Price', 'price-block')}
            tagName='h2'
            onChange={onChangePricebox}
            value={ pricebox }
        />
      
        <RichText
            placeholder={__('Price Description', 'price-block')}
            tagName='p3'
            onChange={onChangePricedesc}
            value={ pricedesc }
        />
        <RichText
            placeholder={__('Add specifications', 'price-block')}
            tagName='li'
            onChange={onChangeSpecs}
            value={ specs }
        />
        <RichText
            placeholder={__('Add facilty', 'price-block')}
            tagName='p4'
            onChange={onChangeMback}
            value={ mback }
        />
        <RichText
            placeholder={__('Add Button Text', 'price-block')}
            tagName='button'
            onChange={onChangeGetstarted}
            value={ getstarted }
        />
        </div>
        </>
        )
}